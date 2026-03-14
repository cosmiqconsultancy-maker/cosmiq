import React, { useState, useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface VideoPopupProps {
  videoId: string;
  trigger?: 'auto' | 'button';
  delay?: number; // seconds for auto trigger
}

export const VideoPopup: React.FC<VideoPopupProps> = ({ 
  videoId, 
  trigger = 'button',
  delay = 3
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    if (trigger === 'auto' && !hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [trigger, delay, hasAutoOpened]);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      {/* Floating Play Button */}
      {trigger === 'button' && (
        <button
          onClick={openPopup}
          className="fixed bottom-8 right-8 z-50 bg-bronze text-softwhite p-4 rounded-full shadow-2xl hover:bg-charcoal transition-all group animate-pulse"
          aria-label="Watch video"
        >
          <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Popup Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-charcoal rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-softwhite/20 hover:bg-softwhite/40 text-softwhite p-2 rounded-full transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* YouTube Embed */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
