export type Language = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      blogs: 'Blogs',
      booking: 'Booking',
      bookNow: 'Book Appointment',
    },
    hero: {
      heading: 'Optimize Your Home & Workspace for Harmony, Focus & Growth ',
      subheading: 'I, Amitabh help individuals and businesses optimize their homes and workspaces using spatial alignment principles derived from the ancient architectural science of Vastu Shastra.',
      cta: 'Book Your Free 20-Minute Assessment',
      tagline: 'Where Energy Meets Architecture',
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real experiences from people who transformed their spaces and lives',
      clients: [
        {
          initials: 'SK',
          name: 'Sarah Klein',
          location: 'Munich, Germany',
          content: "Amitabh's consultation completely changed our home office setup. My productivity has increased significantly, and I feel more focused throughout the day. The Vastu adjustments were simple but incredibly effective."
        },
        {
          initials: 'MW',
          name: 'Markus Weber',
          location: 'Munich, Germany',
          content: "After implementing Amitabh's recommendations, my sleep quality improved dramatically. I was skeptical at first, but the bedroom repositioning made a real difference. Highly recommended for anyone struggling with restlessness."
        },
        {
          initials: 'LF',
          name: 'Laura Fischer',
          location: 'Munich, Germany',
          content: "Our family relationships have become much more harmonious since the consultation. The living room adjustments created a more peaceful atmosphere. Amitabh understood our needs perfectly and provided practical solutions."
        },
        {
          initials: 'RP',
          name: 'Raj Patel',
          location: 'Bangalore, India',
          content: "As someone familiar with Vastu, I was impressed by Amitabh's modern approach. He blended traditional wisdom with contemporary living seamlessly. My business has seen noticeable growth since the office consultation."
        },
        {
          initials: 'AS',
          name: 'Anita Sharma',
          location: 'Delhi, India',
          content: "Amitabh's Cosmiq Report was incredibly detailed and accurate. The personalized blueprint helped me understand my strengths and challenges. His guidance on spatial alignment has brought clarity and balance to my life."
        }
      ]
    },
    vastu: {
      title: 'What is Vastu Shastra?',
      text1: 'Vastu Shastra is an ancient architectural science that studies the relationship between space, direction, light and human wellbeing.',
      text2: 'It analyzes how spatial orientation, layout and directional alignment influence comfort, productivity, focus and harmony within a space.',
      text3: 'This knowledge is applied to modern homes, offices and workplaces to improve spatial balance and functionality.',
    },
    philosophy: {
      title: 'My Cosmiq Philosophy',
      p1: 'I believe that the spaces we live and work in influence our daily experience far more than we realize.',
      p2: 'Architecture is not only about walls, furniture and design. It also shapes how we think, feel, rest and interact with others.',
      p3: 'For centuries, traditional architectural systems studied the relationship between space, direction, light and human wellbeing. One of these systems is the ancient Indian science of Vastu Shastra.',
      p4: 'My work focuses on translating these principles into practical recommendations for modern homes and workplaces in Germany.',
      p5: 'Rather than proposing drastic changes or demolition, my goal is to identify simple spatial adjustments that can help create:',
      list: [
        'better balance in living spaces',
        'improved focus and productivity',
        'a calmer and more supportive environment'
      ],
      p6: 'Every space is unique, and every consultation begins with understanding the individual needs of the client and the characteristics of the property.',
      p7: 'Through careful analysis and practical guidance, the aim is to help people experience their homes and workplaces as places of clarity, balance and harmony.',
    },
    problems: {
      title: 'Does Your Space Feel Like This?',
      items: [
        {
          title: 'Poor Sleep or Restlessness',
          desc: 'Some people find it difficult to sleep well despite having a comfortable bedroom. The placement of the bed or room direction can influence rest and relaxation.'
        },
        {
          title: 'Lack of Focus or Productivity',
          desc: 'Workspace orientation and spatial layout can affect concentration and mental clarity.'
        },
        {
          title: 'Stressful Feeling at Home',
          desc: 'Sometimes a home may look beautiful but still feel mentally heavy or uncomfortable.'
        },
        {
          title: 'Relationship Tension at Home',
          desc: 'The design and orientation of spaces can influence emotional harmony and communication.'
        },
        {
          title: 'Business or Career Stagnation',
          desc: 'Workspace layout can influence focus, decision making and professional growth.'
        },
        {
          title: 'Creative Blockages',
          desc: 'A stagnant or cluttered environment can hinder the flow of new ideas and creative energy.'
        }
      ]
    },
    blogs: {
      title: 'Insights & Articles',
      readMore: 'Read More',
      posts: [
        {
          id: 1,
          title: 'The Science of Direction: Why North Matters',
          excerpt: 'Understanding the magnetic and solar influences on your home layout.',
          date: 'March 10, 2026'
        },
        {
          id: 2,
          title: 'Vastu for the Modern Home Office',
          excerpt: 'How to position your desk for maximum focus and career growth.',
          date: 'March 5, 2026'
        },
        {
          id: 3,
          title: 'Color Psychology in Spatial Alignment',
          excerpt: 'Choosing the right hues for each direction to enhance harmony.',
          date: 'February 28, 2026'
        },
        {
          id: 4,
          title: 'The Entrance: Your Home’s Mouth of Energy',
          excerpt: 'Why the main door is the most critical part of your spatial alignment.',
          date: 'February 20, 2026'
        },
        {
          id: 5,
          title: 'Simple Adjustments for Better Sleep',
          excerpt: 'Non-structural changes you can make today for a more restful night.',
          date: 'February 15, 2026'
        }
      ]
    },
    services: {
      title: 'Our Services',
      s1: {
        title: 'Home Spatial Alignment Consultation',
        description: 'A comprehensive analysis of your living environment to identify energy blockages and optimize room usage. We look at everything from the main entrance to the placement of your bed, ensuring your home supports rest, health, and harmony.',
        image: 'https://www.cosmiqconsulting.com/de/peace/img2.jpeg',
        items: [
          'Detailed floor plan analysis and directional mapping',
          'Evaluation of room placement and usage patterns',
          'Entrance and window alignment review',
          'Furniture layout optimization for better energy flow',
          'Color and material recommendations based on Vastu elements',
          'Practical, non-structural correction strategies'
        ],
        pricingNote: 'Initial Consultation – Free\n20-minute call to discuss your space and understand your requirements.',
        pricing: {
          title: 'Choose Your Tier',
          tiers: [
            { name: 'Apartment Video Analysis', price: '€150', desc: 'Remote consultation based on your floor plan and photos or video. Includes directional analysis and practical layout recommendations.' },
            { name: 'On-Site Apartment Consultation', price: '€450', desc: 'In-person spatial analysis of your apartment including entrance orientation, room layout and personalised recommendations.', badge: 'Most Popular' },
            { name: 'Complete Home & Property Analysis', price: 'From €750', desc: 'Comprehensive spatial alignment consultation for independent houses including interior layout, entrance orientation and garden or outdoor areas.' }
          ]
        },
        pricingFooter: 'Not sure which consultation you need? Start with the free 20-minute consultation.'
      },
      s2: {
        title: 'Office & Commercial Layout Consultation',
        description: 'Optimise workplace energy for productivity, prosperity and wellbeing — practical, modern Vastu solutions for offices, shops and commercial buildings.',
        features: [
          { title: 'Low Productivity in the Workspace', desc: 'Is your team working hard but results are slow? Does the office feel stagnant or unbalanced? Workspace layout can influence decision-making, leadership presence and overall business flow.' },
          { title: 'Business Growth Feels Stagnant', desc: 'Does it feel like your business is stuck? You can write: slow business growth, difficulty attracting new clients, constant operational challenges. The spatial organisation of a workspace can influence decision-making and overall business flow.' },
          { title: 'Team Conflicts or Poor Communication', desc: 'Does your team environment feel tense or uncoordinated? Frequent misunderstandings among employees, lack of collaboration, uncomfortable work atmosphere. Workspace layout and seating orientation can influence interaction patterns and team dynamics.' }
        ],
        whatWeAnalyse: [
          'office entrance orientation',
          'leadership desk placement',
          'employee seating arrangement',
          'meeting room positioning',
          'client reception area',
          'overall spatial balance'
        ],
        pricingNote: 'Initial Consultation – Free\n20-minute discussion to understand your workspace, business needs, and layout challenges.',
        pricing: {
          title: 'Choose Your Tier',
          tiers: [
            { name: 'Workspace Video Analysis', price: '€220', desc: 'Remote consultation based on your office floor plan and photos or video. Includes orientation analysis and recommendations for desk placement, leadership position, entrance flow, and workspace balance.' },
            { name: 'On-Site Office Consultation', price: '€550', desc: 'In-person spatial analysis of your workspace including entrance orientation, team seating arrangement, meeting room placement, and productivity flow.' },
            { name: 'Complete Commercial Property Analysis', price: 'From €950', desc: 'Comprehensive spatial alignment consultation for larger offices, studios, or commercial spaces including layout flow, leadership zones, customer areas, and overall energy balance.' }
          ]
        },
        items: [] // Keep for compatibility
      },
      s3: {
        title: 'Personalised Cosmiq Report',
        tagline: 'Your CosmiQ Blueprint',
        quote: 'Discover the hidden map of your life, written in the stars, numbers and directions.',
        description: 'A comprehensive 130-140 page personalized guide combining Astrology, Numerology, and Vastu wisdom tailored specifically for you. This unique blueprint reveals your life path, career potential, relationship patterns, and spatial alignment recommendations.\n\nComplete Life Blueprint\nDetailed analysis of your birth chart revealing career paths, relationship dynamics, health patterns, wealth potential, and personal growth opportunities based on planetary positions at your birth.',
        features: [
          { title: 'Complete Life Blueprint', desc: 'Detailed analysis of your birth chart revealing career paths, relationship dynamics, health patterns, wealth potential, and personal growth opportunities based on planetary positions at your birth.' }
        ],
        blueprintSections: [
          { icon: '✦', title: 'Astrological Blueprint', desc: 'Decode your core identity, power vector and hidden emotional architecture with the guidance of your planets.' },
          { icon: '∞', title: 'Numerology Profile', desc: 'Insights based on your Name and Date of Birth.' },
          { icon: '☾', title: 'Vastu In your Life', desc: 'Practical tips for harmonizing your home and workspace.' }
        ],
        sampleDoc: {
          title: 'About This Sample Document',
          desc: 'This PDF contains sample details information. You can read it on the left or download it below.',
          cta: 'Download Sample PDF'
        },
        whatsInside: {
          title: 'What’s Inside Your Blueprint',
          items: [
            { title: 'Full Life Predictions', desc: 'Insights into career, relationships, health, wealth, and personal growth drawn from the exact position of planets at the time of your birth.' },
            { title: 'Relationship Compatibility', desc: 'The people your soul attracts, why connections break, and how to align love.' },
            { title: 'Natal Chart Creation', desc: 'A detailed astrology chart based on your birth date, time, and location.' },
            { title: 'Numerology Wisdom', desc: 'Ancient Vedic numerology decoded for your name and birth date.' },
            { title: 'Your Vedic Chart', desc: 'Step by Step guidance to create and understand your own chart.' },
            { title: 'Vastu Knowledge', desc: 'Practical wisdom on how directions and spaces influence your Energy, Success and Wellbeing.' }
          ]
        },
        whySpecial: {
          title: 'Why Is It Special?',
          items: [
            'Uniquely Yours: No 2 books are alike-- each book is written and customized for an individual.',
            'Timeless Guide: A 130-140 page manual you can revisit for clarity, inspiration and decision making at every stage of your life.',
            '“Silent Personality” decoding — what others feel about you',
            'Holistic Wisdom: Astrology, Numerology and Vasu woven together into one powerful Blueprint',
            'Follow-up support'
          ]
        },
        pricing: {
          title: 'Choose Your Tier',
          tiers: [
            { name: 'Digital Edition', price: '€69', desc: 'Prepared personally and pdf shared within 2-3 working days.' },
            { name: 'Cosmiq Master Edition', price: '€119', desc: 'A premium hardbound edition - perfect as a gift with intention or a timeless keepsake for yourself. (Delivered in 7-10 Business working days) + Digital Edition' },
            { name: '1:1 Elite Session', price: '€199', desc: 'Master Edition + Digital Edition + 1 hour Live one-on-one consultation call with report explanation and doubt clearing session.', badge: 'Most Requested' }
          ]
        },
        cta: {
          title: 'Begin Your Personalized Cosmiq Report',
          desc: 'Send your full name, date of birth, birth time, city of birth, and what you are seeking clarity on.'
        },
        items: [] // Keep for compatibility
      }
    },
    booking: {
      title: 'Book Your Consultation',
      processTitle: 'How the Consultation Works',
      steps: [
        { title: 'Book Your Free 20-Minute Assessment', desc: 'Schedule a complimentary introductory call to discuss your space and understand your requirements. We\'ll explore how spatial alignment can benefit your specific situation. This no-obligation conversation helps us understand your goals and determine the best consultation approach for your needs. We\'ll discuss your current challenges, whether it\'s sleep issues, productivity concerns, or relationship harmony, and explain how Vastu principles can help create positive changes in your environment.' },
        { title: 'Initial Consultation Call', desc: 'During the call we understand the client\'s situation and goals. We discuss your concerns, current challenges, and what you hope to achieve through spatial alignment. This deep-dive conversation covers your lifestyle, daily routines, and specific areas where you feel stuck or uncomfortable. We explore your relationship with your space and identify key areas for improvement, whether it\'s your bedroom layout affecting sleep quality, workspace orientation impacting productivity, or overall energy flow in your home.' },
        { title: 'Share Your Floor Plan', desc: 'The client shares the floor plan and property details. This can be architectural drawings, photos, videos, or a virtual walkthrough of your space. For remote consultations, clear photos from each corner of rooms and a simple hand-drawn layout work perfectly. For on-site visits, we\'ll schedule a convenient time. The more details you provide about room usage, furniture placement, and specific concerns, the more precise our analysis can be. We\'ll also note natural light sources, existing color schemes, and any architectural features.' },
        { title: 'Directional and Layout Analysis', desc: 'Analysis of spatial orientation and room placement. We examine how directions, entrances, and room positioning affect energy flow and functionality. Using Vastu Shastra principles combined with modern architectural understanding, we identify energy blockages and alignment opportunities. We analyze the eight directions, five elements balance, and how your space supports your personal and professional goals. This includes checking bedroom orientation for restful sleep, kitchen placement for health, and workspace positioning for productivity.' },
        { title: 'Site Visit (if required)', desc: 'For on-site consultations, we conduct a physical assessment of your space. This allows precise measurements, compass readings for accurate directional alignment, and identification of specific energy flow patterns. We observe natural light throughout the day, check ventilation, and assess how furniture placement affects movement and energy. Physical visits are especially valuable for complex spaces, commercial properties, or when major layout adjustments are being considered. We bring specialized tools for directional analysis and space energy assessment.' },
        { title: 'Personalized Recommendations', desc: 'Receive detailed, practical recommendations tailored to your space. These include layout adjustments, directional alignments, color recommendations, and element balancing that don\'t require structural changes. You\'ll get a comprehensive report with prioritized action steps, from immediate quick fixes to longer-term improvements. Recommendations cover furniture repositioning, color scheme adjustments, decluttering strategies, and simple additions like plants or elements that enhance positive energy. We also provide guidance on maintaining the alignment and periodic check-ins to ensure lasting benefits.' }
      ],
      goal: 'Goal: Optimize the space for wellbeing, productivity and balance.',
      form: {
        name: 'Name',
        phone: 'Phone Number',
        email: 'Email Address',
        dob: 'Date of Birth (optional)',
        pob: 'Place of Birth (optional)',
        submit: 'Request Appointment'
      }
    },
    footer: {
      contact: 'Contact',
      address: 'Munich, Germany',
      email: 'info@cosmiqconsulting.com',
      phone: '+49 176 70496449',
      instagram: 'https://www.instagram.com/cosmiq_consulting',
      impressum: 'Legal Notice',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      cookies: 'Cookie Consent'
    },
    cookieConsent: {
      title: 'Cookies & Privacy Settings',
      text1: 'We use cookies and similar technologies to improve your browsing experience, analyse website traffic and show relevant advertisements.',
      text2: 'By clicking "Accept All", you agree to the use of analytics and marketing cookies, including services such as Google Analytics and Google Ads.',
      text3: 'You can manage your preferences at any time or withdraw your consent via the cookie settings.',
      text4: 'For more information, please read our Privacy Policy.'
    },
    privacy: {
      title: 'Privacy Policy (Datenschutzerklärung)',
      intro: 'The protection of your personal data is very important to us. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.',
      dataUse: 'When you use this website, various personal data may be collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for.',
      controller: {
        title: '1. Responsible Party (Controller)',
        text: 'The responsible party for data processing on this website is:',
        company: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Germany',
        phone: 'Phone: +49 176 7049 6449',
        email: 'Email: amitabh@cosmiqconsulting.com',
        note: 'The controller is the natural or legal person who determines the purposes and means of the processing of personal data.'
      },
      hosting: {
        title: '2. Hosting',
        provider: 'This website is hosted by:',
        company: 'Hostinger International Ltd.',
        address: '61 Lordou Vironos Street',
        city: '6023 Larnaca',
        country: 'Cyprus',
        data: 'When you visit our website, the hosting provider may collect log files including:',
        items: [
          'IP address',
          'Browser type and version',
          'Operating system used',
          'Referrer URL',
          'Time of server request'
        ],
        purpose: 'This data is collected to ensure the stable and secure operation of the website.',
        legal: 'The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure website operation).'
      },
      serverLogs: {
        title: '3. Data Collection on Our Website',
        subtitle: 'Server Log Files',
        text: 'The hosting provider automatically collects and stores information in server log files that your browser transmits automatically.',
        items: [
          'Browser type and version',
          'Operating system',
          'Referrer URL',
          'Hostname of the accessing computer',
          'Time of server request',
          'IP address'
        ],
        note: 'This data is not merged with other data sources.'
      },
      contact: {
        title: '4. Contact via Email or Phone',
        text: 'If you contact us via email or phone, your request including all resulting personal data will be stored and processed for the purpose of handling your request.',
        data: 'This includes:',
        items: [
          'Name',
          'Email address',
          'Phone number',
          'Inquiry details'
        ],
        legal: 'The legal basis for processing is:',
        legalItems: [
          'Art. 6(1)(b) GDPR – processing necessary for contractual communication',
          'Art. 6(1)(f) GDPR – legitimate interest in responding to inquiries'
        ],
        retention: 'Your data will remain with us until the purpose for storing the data no longer applies or you request deletion.'
      },
      calendly: {
        title: '5. Appointment Booking',
        provider: 'For booking consultations through our website we use:',
        company: 'Calendly LLC, Atlanta, USA',
        data: 'When you book an appointment, the following data may be processed:',
        items: [
          'Name',
          'Email address',
          'Appointment time',
          'Additional information you provide'
        ],
        purpose: 'This information is required to organize and conduct the consultation.',
        legal: 'The legal basis for processing is Art. 6(1)(b) GDPR (contractual services).',
        link: 'For more information, please see Calendly\'s privacy policy.'
      },
      cookies: {
        title: '6. Cookies',
        text: 'Our website uses cookies. Cookies are small text files stored on your device that help improve the user experience.',
        types: 'Cookies may be:',
        typeItems: [
          'Session cookies (deleted after the visit)',
          'Permanent cookies (remain stored until deleted)'
        ],
        purposes: 'Cookies may be used for:',
        purposeItems: [
          'Website functionality',
          'Analytics',
          'Marketing'
        ],
        legal: 'The legal basis for the storage of cookies is:',
        legalItems: [
          'Art. 6(1)(f) GDPR (legitimate interest)',
          'Art. 6(1)(a) GDPR if consent is required'
        ],
        browser: 'You can configure your browser to inform you about the use of cookies or disable them entirely.'
      },
      analytics: {
        title: '7. Analytics and Advertising',
        googleAnalytics: {
          title: 'Google Analytics',
          text: 'This website uses Google Analytics. Provider: Google.',
          data: 'Google Analytics uses cookies that allow an analysis of your use of the website.',
          items: [
            'IP address',
            'Device information',
            'Pages visited',
            'Time spent on website',
            'User interactions'
          ],
          transfer: 'Google may transfer this information to servers in the United States.',
          legal: 'The processing takes place only with your consent according to Art. 6(1)(a) GDPR.',
          withdraw: 'You can withdraw your consent at any time.'
        },
        googleAds: {
          title: 'Google Ads',
          text: 'This website uses Google Ads. Google Ads allows us to display advertisements in Google search results and across the Google advertising network.',
          data: 'Google Ads may use cookies and tracking technologies to measure advertising performance.',
          legal: 'The legal basis is Art. 6(1)(a) GDPR (user consent).'
        }
      },
      socialMedia: {
        title: '8. Social Media',
        text: 'Our website may contain links to social media platforms such as:',
        platforms: [
          'LinkedIn'
        ],
        note: 'If you visit these platforms, data processing is carried out by the respective provider according to their privacy policies.',
        disclaimer: 'We have no influence on how these platforms process personal data.'
      },
      rights: {
        title: '9. Your Rights Under GDPR',
        text: 'You have the following rights regarding your personal data:',
        items: [
          'Right to access your stored data',
          'Right to correction of incorrect data',
          'Right to deletion of data',
          'Right to restriction of processing',
          'Right to data portability',
          'Right to object to processing',
          'Right to lodge a complaint with a supervisory authority'
        ],
        contact: 'To exercise these rights, please contact us at:',
        email: 'amitabh@cosmiqconsulting.com'
      },
      ssl: {
        title: '10. SSL Encryption',
        text: 'For security reasons and to protect confidential content, this website uses SSL encryption.',
        recognition: 'You can recognize an encrypted connection by the https:// prefix and the lock icon in your browser address bar.'
      }
    },
    impressum: {
      title: 'Legal Notice (Impressum)',
      section1: {
        title: 'Information according to §5 TMG',
        company: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Germany'
      },
      representative: {
        title: 'Represented by:',
        name: 'Amitabh Shekhar'
      },
      contact: {
        title: 'Contact:',
        phone: 'Phone: +49 176 7049 6449',
        email: 'Email: amitabh@cosmiqconsulting.com'
      },
      responsible: {
        title: 'Responsible for content according to §55 Abs. 2 RStV:',
        name: 'Amitabh Shekhar',
        company: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Germany'
      },
      dispute: {
        title: 'EU Dispute Resolution',
        text1: 'The European Commission provides a platform for online dispute resolution (ODR):',
        link: 'https://ec.europa.eu/consumers/odr/',
        text2: 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'
      },
      liability: {
        title: 'Liability for content',
        text: 'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness or timeliness of the content.'
      },
      links: {
        title: 'Liability for links',
        text: 'Our website may contain links to external websites of third parties. We have no influence on the contents of those websites, therefore we cannot assume any liability for those external contents.'
      },
      copyright: {
        title: 'Copyright',
        text: 'The content and works created by the site operator on these pages are subject to copyright law. Duplication, processing, distribution or any form of commercialization beyond the scope of copyright law requires the prior written consent of the respective author.'
      }
    },
    terms: {
      title: 'Terms & Conditions (AGB)',
      intro: 'AGB – Allgemeine Geschäftsbedingungen\nCosmiQ Consulting',
      scope: {
        title: '1. Scope of Application',
        text: 'These General Terms and Conditions (AGB) apply to all consulting services provided by CosmiQ Consulting, Köglweg 15, 82024 Taufkirchen, Germany. By booking a consultation or service through our website or booking system, the client agrees to these terms and conditions.'
      },
      services: {
        title: '2. Services',
        text: 'CosmiQ Consulting provides consulting services in the areas of business consulting, coaching, and advisory services. The scope of the service is determined individually between CosmiQ Consulting and the client, either through direct communication or via the booking platform.'
      },
      booking: {
        title: '3. Booking of Appointments',
        text: 'Appointments can be booked online via our booking system or by direct contact. Once an appointment is confirmed, the booking becomes binding.'
      },
      payment: {
        title: '4. Payment',
        text: 'Payment for consulting services must be made in advance unless otherwise agreed. Payments may be processed via payment service providers such as PayPal or bank transfer.'
      },
      cancellation: {
        title: '5. Cancellation Policy',
        text: 'Appointments may be cancelled or rescheduled free of charge up to 24 hours before the scheduled appointment time. If a cancellation is made less than 24 hours before the appointment or the client does not attend the appointment, CosmiQ Consulting reserves the right to charge the full consultation fee.'
      },
      liability: {
        title: '6. Liability',
        text: 'CosmiQ Consulting provides consulting services based on experience and professional knowledge. However, no guarantee is given for specific outcomes or results. Liability for damages is limited to cases of intentional misconduct or gross negligence.'
      },
      confidentiality: {
        title: '7. Confidentiality',
        text: 'All information shared by the client during consultations will be treated as strictly confidential and will not be disclosed to third parties without consent unless required by law.'
      },
      dataProtection: {
        title: '8. Data Protection',
        text: 'Personal data collected in connection with bookings or consultations will be processed in accordance with our Privacy Policy (Datenschutzerklärung).'
      },
      applicableLaw: {
        title: '9. Applicable Law',
        text: 'The laws of the Federal Republic of Germany apply.'
      },
      jurisdiction: {
        title: '10. Place of Jurisdiction',
        text: 'The place of jurisdiction for all disputes arising from this contractual relationship is Munich, Germany.'
      },
      companyInfo: {
        title: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Germany'
      }
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      blogs: 'Blogs',
      booking: 'Buchung',
      bookNow: 'Termin buchen',
    },
    hero: {
      heading: 'Optimieren Sie Ihr Zuhause und Ihren Arbeitsplatz durch räumliche Ausrichtung',
      subheading: 'Ich helfe Einzelpersonen und Unternehmen, ihre Wohn- und Arbeitsräume mithilfe von Prinzipien der räumlichen Ausrichtung zu optimieren, die aus der alten Architekturwissenschaft Vastu Shastra stammen.',
      cta: 'Buchen Sie Ihre kostenlose 20-minütige Analyse',
      tagline: 'Wo Energie auf Architektur trifft',
    },
    testimonials: {
      title: 'Was Unsere Kunden Sagen',
      subtitle: 'Echte Erfahrungen von Menschen, die ihre Räume und Leben verändert haben',
      clients: [
        {
          initials: 'SK',
          name: 'Sarah Klein',
          location: 'München, Deutschland',
          content: "Amitabhs Beratung hat unser Home-Office-Setup völlig verändert. Meine Produktivität hat deutlich zugenommen und ich fühle mich den ganzen Tag über fokussierter. Die Vastu-Anpassungen waren einfach, aber unglaublich effektiv."
        },
        {
          initials: 'MW',
          name: 'Markus Weber',
          location: 'München, Deutschland',
          content: "Nach der Umsetzung von Amitabhs Empfehlungen hat sich meine Schlafqualität dramatisch verbessert. Ich war anfangs skeptisch, aber die Neupositionierung des Schlafzimmers hat einen echten Unterschied gemacht. Sehr zu empfehlen für jeden, der mit Unruhe kämpft."
        },
        {
          initials: 'LF',
          name: 'Laura Fischer',
          location: 'München, Deutschland',
          content: "Unsere Familienbeziehungen sind seit der Beratung viel harmonischer geworden. Die Anpassungen im Wohnzimmer haben eine friedlichere Atmosphäre geschaffen. Amitabh hat unsere Bedürfnisse perfekt verstanden und praktische Lösungen geboten."
        },
        {
          initials: 'RP',
          name: 'Raj Patel',
          location: 'Bangalore, Indien',
          content: "Als jemand, der mit Vastu vertraut ist, war ich von Amitabhs modernem Ansatz beeindruckt. Er hat traditionelle Weisheit nahtlos mit zeitgemäßem Wohnen verbunden. Mein Geschäft hat seit der Beratung ein spürbares Wachstum erlebt."
        },
        {
          initials: 'AS',
          name: 'Anita Sharma',
          location: 'Delhi, Indien',
          content: "Amitabhs Cosmiq-Bericht war unglaublich detailliert und genau. Der personalisierte Blueprint half mir, meine Stärken und Herausforderungen zu verstehen. Seine Anleitung zur räumlichen Ausrichtung hat Klarheit und Balance in mein Leben gebracht."
        }
      ]
    },
    vastu: {
      title: 'Was ist Vastu Shastra?',
      text1: 'Vastu Shastra ist eine alte Architekturwissenschaft, die die Beziehung zwischen Raum, Richtung, Licht und menschlichem Wohlbefinden untersucht.',
      text2: 'Sie analysiert, wie räumliche Orientierung, Layout und Richtungs-Ausrichtung Komfort, Produktivität, Fokus und Harmonie in einem Raum beeinflussen.',
      text3: 'Dieses Wissen wird auf moderne Wohnungen, Büros und Arbeitsplätze angewendet, um das räumliche Gleichgewicht und die Funktionalität zu verbessern.',
    },
    philosophy: {
      title: 'Meine Cosmiq-Philosophie',
      p1: 'Ich glaube, dass die Räume, in denen wir leben und arbeiten, unsere tägliche Erfahrung weit mehr beeinflussen, als uns bewusst ist.',
      p2: 'Architektur besteht nicht nur aus Wänden, Möbeln und Design. Sie prägt auch, wie wir denken, fühlen, uns ausruhen und mit anderen interagieren.',
      p3: 'Seit Jahrhunderten untersuchen traditionelle Architektursysteme die Beziehung zwischen Raum, Richtung, Licht und menschlichem Wohlbefinden. Eines dieser Systeme ist die alte indische Wissenschaft Vastu Shastra.',
      p4: 'Meine Arbeit konzentriert sich darauf, diese Prinzipien in praktische Empfehlungen für moderne Wohnungen und Arbeitsplätze in Deutschland zu übersetzen.',
      p5: 'Anstatt drastische Änderungen oder Abrisse vorzuschlagen, ist es mein Ziel, einfache räumliche Anpassungen zu identifizieren, die helfen können, Folgendes zu schaffen:',
      list: [
        'bessere Balance in Wohnräumen',
        'verbesserter Fokus und Produktivität',
        'eine ruhigere und unterstützendere Umgebung'
      ],
      p6: 'Jeder Raum ist einzigartig, und jede Beratung beginnt mit dem Verständnis der individuellen Bedürfnisse des Kunden und der Eigenschaften der Immobilie.',
      p7: 'Durch sorgfältige Analyse und praktische Anleitung ist es das Ziel, Menschen dabei zu helfen, ihr Zuhause und ihren Arbeitsplatz als Orte der Klarheit, Ausgewogenheit und Harmonie zu erleben.',
    },
    problems: {
      title: 'Fühlt sich Ihr Raum so an?',
      items: [
        {
          title: 'Schlechter Schlaf oder Ruhelosigkeit',
          desc: 'Einigen Menschen fällt es schwer, gut zu schlafen, obwohl sie ein komfortables Schlafzimmer haben. Die Platzierung des Bettes oder die Raumrichtung können Ruhe und Entspannung beeinflussen.'
        },
        {
          title: 'Mangel an Fokus oder Produktivität',
          desc: 'Die Ausrichtung des Arbeitsplatzes und das räumliche Layout können die Konzentration und geistige Klarheit beeinträchtigen.'
        },
        {
          title: 'Stressiges Gefühl zu Hause',
          desc: 'Manchmal sieht ein Zuhause schön aus, fühlt sich aber dennoch geistig schwer oder ungemütlich an.'
        },
        {
          title: 'Spannungen in Beziehungen zu Hause',
          desc: 'Das Design und die Ausrichtung von Räumen können die emotionale Harmonie und Kommunikation beeinflussen.'
        },
        {
          title: 'Stagnation im Geschäft oder in der Karriere',
          desc: 'Das Layout des Arbeitsplatzes kann Fokus, Entscheidungsfindung und berufliches Wachstum beeinflussen.'
        },
        {
          title: 'Kreative Blockaden',
          desc: 'Eine stagnierende oder überfüllte Umgebung kann den Fluss neuer Ideen und kreativer Energie behindern.'
        }
      ]
    },
    blogs: {
      title: 'Einblicke & Artikel',
      readMore: 'Mehr lesen',
      posts: [
        {
          id: 1,
          title: 'Die Wissenschaft der Richtung: Warum Norden wichtig ist',
          excerpt: 'Verständnis der magnetischen und solaren Einflüsse auf Ihre Hausgestaltung.',
          date: '10. März 2026'
        },
        {
          id: 2,
          title: 'Vastu für das moderne Home-Office',
          excerpt: 'Wie Sie Ihren Schreibtisch für maximalen Fokus und berufliches Wachstum positionieren.',
          date: '5. März 2026'
        },
        {
          id: 3,
          title: 'Farbpsychologie in der räumlichen Ausrichtung',
          excerpt: 'Wahl der richtigen Farbtöne für jede Richtung zur Förderung der Harmonie.',
          date: '28. Februar 2026'
        },
        {
          id: 4,
          title: 'Der Eingang: Der Mund der Energie Ihres Hauses',
          excerpt: 'Warum die Haupttür der kritischste Teil Ihrer räumlichen Ausrichtung ist.',
          date: '20. Februar 2026'
        },
        {
          id: 5,
          title: 'Einfache Anpassungen für besseren Schlaf',
          excerpt: 'Nicht-strukturelle Änderungen, die Sie heute für eine erholsamere Nacht vornehmen können.',
          date: '15. Februar 2026'
        }
      ]
    },
    services: {
      title: 'Unsere Leistungen',
      s1: {
        title: 'Vastu-Beratung für Wohnräume',
        description: 'Eine umfassende Analyse Ihres Wohnumfelds, um Energieblockaden zu identifizieren und die Raumnutzung zu optimieren. Wir betrachten alles vom Haupteingang bis zur Platzierung Ihres Bettes.',
        image: 'https://www.cosmiqconsulting.com/de/peace/img2.jpeg',
        items: ['Grundrissanalyse', 'Richtungsbewertung', 'Überprüfung der Raumaufteilung', 'Praktische Empfehlungen'],
        pricingNote: 'Erstberatung – Kostenlos\n20-minütiges Gespräch, um Ihren Raum zu besprechen und Ihre Anforderungen zu verstehen.',
        pricing: {
          title: 'Wählen Sie Ihr Paket',
          tiers: [
            { name: 'Wohnungs-Videoanalyse', price: '€150', desc: 'Fernberatung basierend auf Ihrem Grundriss und Fotos oder Video. Beinhaltet Richtungsanalyse und praktische Layout-Empfehlungen.' },
            { name: 'Vor-Ort Wohnungsberatung', price: '€450', desc: 'Persönliche räumliche Analyse Ihrer Wohnung inklusive Eingangsausrichtung, Raumaufteilung und personalisierten Empfehlungen.', badge: 'Beliebt' },
            { name: 'Komplette Haus- & Grundstücksanalyse', price: 'Ab €750', desc: 'Umfassende räumliche Ausrichtungsberatung für Einfamilienhäuser inklusive Innenraumlayout, Eingangsausrichtung und Garten- oder Außenbereichen.' }
          ]
        },
        pricingFooter: 'Sind Sie sich unsicher, welche Beratung Sie brauchen? Beginnen Sie mit der kostenlosen 20-minütigen Erstberatung.'
      },
      s2: {
        title: 'Büro & Gewerbe-Layout-Beratung',
        description: 'Optimieren Sie die Arbeitsplatzenergie für Produktivität, Wohlstand und Wohlbefinden — praktische, moderne Vastu-Lösungen für Büros, Geschäfte und gewerbliche Gebäude.',
        features: [
          { title: 'Geringe Produktivität am Arbeitsplatz', desc: 'Arbeitet Ihr Team hart, aber die Ergebnisse sind langsam? Fühlt sich das Büro stagnierend oder unausgeglichen an? Das Arbeitsplatzlayout kann Entscheidungsfindung, Führungspräsenz und den gesamten Geschäftsablauf beeinflussen.' },
          { title: 'Geschäftswachstum fühlt sich stagnierend an', desc: 'Fühlt es sich an, als wäre Ihr Unternehmen stecken geblieben? Langsames Geschäftswachstum, Schwierigkeiten neue Kunden zu gewinnen, ständige betriebliche Herausforderungen. Die räumliche Organisation eines Arbeitsplatzes kann Entscheidungsfindung und den gesamten Geschäftsablauf beeinflussen.' },
          { title: 'Teamkonflikte oder schlechte Kommunikation', desc: 'Fühlt sich Ihre Teamumgebung angespannt oder unkoordiniert an? Häufige Missverständnisse unter Mitarbeitern, mangelnde Zusammenarbeit, unangenehme Arbeitsatmosphäre. Arbeitsplatzlayout und Sitzorientierung können Interaktionsmuster und Teamdynamik beeinflussen.' }
        ],
        whatWeAnalyse: [
          'Büroeingangsausrichtung',
          'Führungsschreibtisch-Platzierung',
          'Mitarbeiter-Sitzanordnung',
          'Besprechungsraum-Positionierung',
          'Kundenempfangsbereich',
          'Gesamte räumliche Balance'
        ],
        pricingNote: 'Erstberatung – Kostenlos\n20-minütiges Gespräch, um Ihren Arbeitsplatz, Geschäftsbedürfnisse und Layout-Herausforderungen zu verstehen.',
        pricing: {
          title: 'Wählen Sie Ihr Paket',
          tiers: [
            { name: 'Arbeitsplatz-Videoanalyse', price: '€220', desc: 'Fernberatung basierend auf Ihrem Bürogrundriss und Fotos oder Video. Beinhaltet Orientierungsanalyse und Empfehlungen für Schreibtischplatzierung, Führungsposition, Eingangsfluss und Arbeitsplatzbalance.' },
            { name: 'Vor-Ort Büroberatung', price: '€550', desc: 'Persönliche räumliche Analyse Ihres Arbeitsplatzes inklusive Eingangsausrichtung, Team-Sitzanordnung, Besprechungsraum-Platzierung und Produktivitätsfluss.' },
            { name: 'Komplette Gewerbeimmobilien-Analyse', price: 'Ab €950', desc: 'Umfassende räumliche Ausrichtungsberatung für größere Büros, Studios oder Gewerbeflächen inklusive Layoutfluss, Führungszonen, Kundenbereichen und gesamter Energiebalance.' }
          ]
        },
        items: []
      },
      s3: {
        title: 'Personalisierter Cosmiq-Bericht',
        tagline: 'Ihr CosmiQ Blueprint',
        quote: 'Entdecken Sie die verborgene Karte Ihres Lebens, geschrieben in den Sternen, Zahlen und Richtungen.',
        description: 'Ein umfassender 130-140 seitiger personalisierter Leitfaden, der Astrologie, Numerologie und Vastu-Weisheit speziell für Sie kombiniert. Dieser einzigartige Blueprint enthüllt Ihren Lebensweg, Karrierepotenzial, Beziehungsmuster und räumliche Ausrichtungsempfehlungen.\n\nVollständiger Lebens-Blueprint\nDetaillierte Analyse Ihrer Geburtskarte, die Karrierewege, Beziehungsdynamiken, Gesundheitsmuster, Wohlstandspotenzial und persönliche Wachstumschancen auf der Grundlage der Planetenpositionen bei Ihrer Geburt offenbart.',
        features: [
          { title: 'Kompletter Lebens-Blueprint', desc: 'Detaillierte Analyse Ihres Geburtshoroskops, die Karrierewege, Beziehungsdynamiken, Gesundheitsmuster, Vermögenspotenzial und persönliche Wachstumschancen basierend auf den Planetenpositionen bei Ihrer Geburt enthüllt.' }
        ],
        blueprintSections: [
          { icon: '✦', title: 'Astrologischer Blueprint', desc: 'Entschlüsseln Sie Ihre Kernidentität und emotionale Architektur.' },
          { icon: '∞', title: 'Numerologie-Profil', desc: 'Einblicke basierend auf Ihrem Namen und Geburtsdatum.' },
          { icon: '☾', title: 'Vastu in Ihrem Leben', desc: 'Praktische Tipps zur Harmonisierung von Haus und Arbeitsplatz.' }
        ],
        sampleDoc: {
          title: 'Über dieses Musterdokument',
          desc: 'Dieses PDF enthält Beispielinformationen. Sie können es links lesen oder unten herunterladen.',
          cta: 'Muster-PDF herunterladen'
        },
        whatsInside: {
          title: 'Was ist in Ihrem Blueprint enthalten',
          items: [
            { title: 'Lebensvorhersagen', desc: 'Einblicke in Karriere, Beziehungen, Gesundheit und Wachstum.' },
            { title: 'Beziehungskompatibilität', desc: 'Wen Ihre Seele anzieht und wie Sie die Liebe ausrichten.' },
            { title: 'Erstellung des Geburtshoroskops', desc: 'Ein detailliertes Horoskop basierend auf Ihren Geburtsdaten.' },
            { title: 'Numerologie-Weisheit', desc: 'Alte vedische Numerologie entschlüsselt.' },
            { title: 'Ihre vedische Karte', desc: 'Schritt-für-Schritt-Anleitung zum Verständnis Ihrer Karte.' },
            { title: 'Vastu-Wissen', desc: 'Wie Richtungen Ihren Erfolg und Ihr Wohlbefinden beeinflussen.' }
          ]
        },
        whySpecial: {
          title: 'Warum ist es besonders?',
          items: [
            'Einzigartig für Sie: Kein Buch gleicht dem anderen.',
            'Zeitloser Leitfaden: Ein 130-140-seitiges Handbuch.',
            'Entschlüsselung der „stillen Persönlichkeit“',
            'Ganzheitliche Weisheit: Astrologie, Numerologie und Vastu.',
            'Follow-up-Unterstützung'
          ]
        },
        pricing: {
          title: 'Wählen Sie Ihr Paket',
          tiers: [
            { name: 'Digitale Edition', price: '€69', desc: 'Persönlich erstellt und als PDF geteilt.' },
            { name: 'Cosmiq Master Edition', price: '€119', desc: 'Eine hochwertige gebundene Ausgabe - perfekt als Geschenk mit Intention oder zeitloses Erinnerungsstück für Sie selbst. (Lieferung in 7-10 Werktagen) + Digitale Edition' },
            { name: '1:1 Elite Session', price: '€199', desc: 'Master Edition + Digital Edition + 1 Stunde Live-Einzelberatung mit Berichtserklärung und Fragenklärung.', badge: 'Meistgefragt' }
          ]
        },
        cta: {
          title: 'Beginnen Sie Ihren personalisierten Cosmiq-Bericht',
          desc: 'Senden Sie Ihren vollen Namen, Geburtsdatum, Geburtszeit und Geburtsort.'
        },
        items: []
      }
    },
    booking: {
      title: 'Buchen Sie Ihre Beratung',
      processTitle: 'So funktioniert die Beratung',
      steps: [
        { title: 'Buchen Sie Ihre kostenlose 20-minütige Analyse', desc: 'Vereinbaren Sie einen kostenlosen einführenden Anruf, um Ihren Raum zu besprechen und Ihre Anforderungen zu verstehen. Wir erkunden, wie räumliche Ausrichtung Ihre spezifische Situation verbessern kann. Dieses unverbindliche Gespräch hilft uns, Ihre Ziele zu verstehen und den besten Beratungsansatz für Ihre Bedürfnisse zu bestimmen. Wir besprechen Ihre aktuellen Herausforderungen, ob es Schlafprobleme, Produktivitätsbedenken oder Bezieungsharmonie sind, und erklären, wie Vastu-Prinzipien positive Veränderungen in Ihrer Umgebung schaffen können.' },
        { title: 'Erstberatungsgespräch', desc: 'Während des Gesprächs verstehen wir die Situation und die Ziele des Kunden. Wir besprechen Ihre Bedenken, aktuellen Herausforderungen und was Sie durch räumliche Ausrichtung erreichen möchten. Dieses vertiefte Gespräch deckt Ihren Lebensstil, tägliche Routinen und spezifische Bereiche ab, in denen Sie sich festgefahren oder unwohl fühlen. Wir erkunden Ihre Beziehung zu Ihrem Raum und identifizieren Schlüsselbereiche für Verbesserungen.' },
        { title: 'Teilen Sie Ihren Grundriss', desc: 'Der Kunde teilt den Grundriss und die Objektdetails mit. Dies können architektonische Zeichnungen, Fotos, Videos oder ein virtueller Rundgang durch Ihren Raum sein. Für Fernberatungen funktionieren klare Fotos aus jeder Zimmerecke und eine einfache handgezeichnete Skizze perfekt. Je mehr Details Sie über Raumnutzung, Möbelplatzierung und spezifische Bedenken angeben, desto präziser kann unsere Analyse sein.' },
        { title: 'Richtungs- und Layoutanalyse', desc: 'Analyse der räumlichen Orientierung und Raumplatzierung. Wir untersuchen, wie Richtungen, Eingänge und Raumpositionierung den Energiefluss und die Funktionalität beeinflussen. Unter Verwendung von Vastu-Shastra-Prinzipien kombiniert mit modernem architektonischem Verständnis identifizieren wir Energieblockaden und Ausrichtungsmöglichkeiten. Wir analysieren die acht Richtungen, das Gleichgewicht der fünf Elemente und wie Ihr Raum Ihre persönlichen und beruflichen Ziele unterstützt.' },
        { title: 'Besichtigung vor Ort (falls erforderlich)', desc: 'Bei Vor-Ort-Beratungen führen wir eine physische Beurteilung Ihres Raums durch. Dies ermöglicht präzise Messungen, Kompassablesungen für genaue Richtungsausrichtung und die Identifizierung spezifischer Energieflussmuster. Wir beobachten das natürliche Licht im Laufe des Tages, prüfen die Belüftung und bewerten, wie die Möbelplatzierung Bewegung und Energie beeinflusst.' },
        { title: 'Personalisierte Empfehlungen', desc: 'Erhalten Sie detaillierte, praktische Empfehlungen, die auf Ihren Raum zugeschnitten sind. Diese umfassen Layout-Anpassungen, Richtungsausrichtungen, Farbempfehlungen und Elementeausgewogenheit, die keine strukturellen Änderungen erfordern. Sie erhalten einen umfassenden Bericht mit priorisierten Maßnahmen, von sofortigen schnellen Lösungen bis zu langfristigen Verbesserungen.' }
      ],
      goal: 'Ziel: Den Raum für Wohlbefinden, Produktivität und Ausgewogenheit optimieren.',
      form: {
        name: 'Name',
        phone: 'Telefonnummer',
        email: 'E-Mail-Adresse',
        dob: 'Geburtsdatum (optional)',
        pob: 'Geburtsort (optional)',
        submit: 'Termin anfragen'
      }
    },
    footer: {
      contact: 'Kontakt',
      address: 'München, Deutschland',
      email: 'info@cosmiqconsulting.com',
      phone: '+49 176 70496449',
      instagram: 'https://www.instagram.com/cosmiq_consulting',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
      cookies: 'Cookie-Einwilligung'
    },
    cookieConsent: {
      title: 'Cookies & Datenschutzeinstellungen',
      text1: 'Wir verwenden Cookies und ähnliche Technologien, um Ihr Browsererlebnis zu verbessern, Website-Verkehr zu analysieren und relevante Werbung zu zeigen.',
      text2: 'Durch Klick auf "Alle akzeptieren" stimmen Sie der Verwendung von Analyse- und Marketing-Cookies zu, einschließlich Diensten wie Google Analytics und Google Ads.',
      text3: 'Sie können Ihre Präferenzen jederzeit verwalten oder Ihre Einwilligung über die Cookie-Einstellungen zurückziehen.',
      text4: 'Weitere Informationen finden Sie in unserer Datenschutzerklärung.'
    },
    privacy: {
      title: 'Datenschutzerklärung',
      intro: 'Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Wir behandeln Ihre persönlichen Daten vertraulich und in Übereinstimmung mit den gesetzlichen Datenschutzbestimmungen und dieser Datenschutzerklärung.',
      dataUse: 'Bei der Nutzung dieser Website können verschiedene persönliche Daten gesammelt werden. Persönliche Daten sind Daten, die zur persönlichen Identifizierung verwendet werden können. Diese Datenschutzerklärung erklärt, welche Daten wir sammeln und wofür wir sie verwenden.',
      controller: {
        title: '1. Verantwortliche Stelle (Verantwortlicher)',
        text: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
        company: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Deutschland',
        phone: 'Telefon: +49 176 7049 6449',
        email: 'E-Mail: amitabh@cosmiqconsulting.com',
        note: 'Der Verantwortliche ist die natürliche oder juristische Person, die die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten bestimmt.'
      },
      hosting: {
        title: '2. Hosting',
        provider: 'Diese Website wird gehostet von:',
        company: 'Hostinger International Ltd.',
        address: '61 Lordou Vironos Street',
        city: '6023 Larnaca',
        country: 'Zypern',
        data: 'Wenn Sie unsere Website besuchen, kann der Hosting-Provider Protokolldateien sammeln, einschließlich:',
        items: [
          'IP-Adresse',
          'Browsertyp und -version',
          'Verwendetes Betriebssystem',
          'Referrer-URL',
          'Zeit der Serveranfrage'
        ],
        purpose: 'Diese Daten werden gesammelt, um den stabilen und sicheren Betrieb der Website zu gewährleisten.',
        legal: 'Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Website-Betrieb).'
      },
      serverLogs: {
        title: '3. Datenerfassung auf unserer Website',
        subtitle: 'Server-Protokolldateien',
        text: 'Der Hosting-Provider sammelt und speichert automatisch Informationen in Server-Protokolldateien, die Ihr Browser automatisch übermittelt.',
        items: [
          'Browsertyp und -version',
          'Betriebssystem',
          'Referrer-URL',
          'Hostname des zugreifenden Computers',
          'Zeit der Serveranfrage',
          'IP-Adresse'
        ],
        note: 'Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.'
      },
      contact: {
        title: '4. Kontakt per E-Mail oder Telefon',
        text: 'Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage einschließlich aller daraus resultierenden persönlichen Daten gespeichert und verarbeitet, um Ihre Anfrage zu bearbeiten.',
        data: 'Dies umfasst:',
        items: [
          'Name',
          'E-Mail-Adresse',
          'Telefonnummer',
          'Anfragedetails'
        ],
        legal: 'Die Rechtsgrundlage für die Verarbeitung ist:',
        legalItems: [
          'Art. 6 Abs. 1 lit. b DSGVO – Verarbeitung für vertragliche Kommunikation erforderlich',
          'Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse an der Beantwortung von Anfragen'
        ],
        retention: 'Ihre Daten bleiben bei uns, bis der Zweck der Datenspeicherung nicht mehr zutrifft oder Sie die Löschung beantragen.'
      },
      calendly: {
        title: '5. Terminbuchung',
        provider: 'Für die Buchung von Beratungen über unsere Website verwenden wir:',
        company: 'Calendly LLC, Atlanta, USA',
        data: 'Wenn Sie einen Termin buchen, können folgende Daten verarbeitet werden:',
        items: [
          'Name',
          'E-Mail-Adresse',
          'Terminzeit',
          'Zusätzliche Informationen, die Sie bereitstellen'
        ],
        purpose: 'Diese Informationen sind erforderlich, um die Beratung zu organisieren und durchzuführen.',
        legal: 'Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (vertragliche Dienstleistungen).',
        link: 'Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly.'
      },
      cookies: {
        title: '6. Cookies',
        text: 'Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden und die Benutzererfahrung verbessern.',
        types: 'Cookies können sein:',
        typeItems: [
          'Sitzungs-Cookies (nach dem Besuch gelöscht)',
          'Permanente Cookies (bleiben gespeichert, bis sie gelöscht werden)'
        ],
        purposes: 'Cookies können verwendet werden für:',
        purposeItems: [
          'Website-Funktionalität',
          'Analyse',
          'Marketing'
        ],
        legal: 'Die Rechtsgrundlage für die Speicherung von Cookies ist:',
        legalItems: [
          'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
          'Art. 6 Abs. 1 lit. a DSGVO, wenn Einwilligung erforderlich ist'
        ],
        browser: 'Sie können Ihren Browser so konfigurieren, dass Sie über die Verwendung von Cookies informiert werden oder diese vollständig deaktivieren.'
      },
      analytics: {
        title: '7. Analyse und Werbung',
        googleAnalytics: {
          title: 'Google Analytics',
          text: 'Diese Website verwendet Google Analytics. Anbieter: Google.',
          data: 'Google Analytics verwendet Cookies, die eine Analyse Ihrer Website-Nutzung ermöglichen.',
          items: [
            'IP-Adresse',
            'Geräteinformationen',
            'Besuchte Seiten',
            'Auf der Website verbrachte Zeit',
            'Benutzerinteraktionen'
          ],
          transfer: 'Google kann diese Informationen an Server in den Vereinigten Staaten übertragen.',
          legal: 'Die Verarbeitung erfolgt nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.',
          withdraw: 'Sie können Ihre Einwilligung jederzeit widerrufen.'
        },
        googleAds: {
          title: 'Google Ads',
          text: 'Diese Website verwendet Google Ads. Google Ads ermöglicht es uns, Werbung in den Google-Suchergebnissen und im Google-Werbenetzwerk anzuzeigen.',
          data: 'Google Ads kann Cookies und Tracking-Technologien verwenden, um die Werbeleistung zu messen.',
          legal: 'Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Benutzereinwilligung).'
        }
      },
      socialMedia: {
        title: '8. Soziale Medien',
        text: 'Unsere Website kann Links zu Social-Media-Plattformen enthalten wie:',
        platforms: [
          'LinkedIn'
        ],
        note: 'Wenn Sie diese Plattformen besuchen, erfolgt die Datenverarbeitung durch den jeweiligen Anbieter gemäß deren Datenschutzerklärungen.',
        disclaimer: 'Wir haben keinen Einfluss darauf, wie diese Plattformen persönliche Daten verarbeiten.'
      },
      rights: {
        title: '9. Ihre Rechte nach DSGVO',
        text: 'Sie haben folgende Rechte bezüglich Ihrer persönlichen Daten:',
        items: [
          'Recht auf Auskunft über Ihre gespeicherten Daten',
          'Recht auf Berichtigung falscher Daten',
          'Recht auf Löschung von Daten',
          'Recht auf Einschränkung der Verarbeitung',
          'Recht auf Datenübertragbarkeit',
          'Recht auf Widerspruch gegen die Verarbeitung',
          'Recht auf Beschwerde bei einer Aufsichtsbehörde'
        ],
        contact: 'Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter:',
        email: 'amitabh@cosmiqconsulting.com'
      },
      ssl: {
        title: '10. SSL-Verschlüsselung',
        text: 'Aus Sicherheitsgründen und zum Schutz vertraulicher Inhalte verwendet diese Website SSL-Verschlüsselung.',
        recognition: 'Sie erkennen eine verschlüsselte Verbindung am https://-Präfix und dem Schlosssymbol in der Adressleiste Ihres Browsers.'
      }
    },
    impressum: {
      title: 'Impressum',
      section1: {
        title: 'Angaben gemäß §5 TMG',
        company: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Deutschland'
      },
      representative: {
        title: 'Vertreten durch:',
        name: 'Amitabh Shekhar'
      },
      contact: {
        title: 'Kontakt:',
        phone: 'Telefon: +49 176 7049 6449',
        email: 'E-Mail: amitabh@cosmiqconsulting.com'
      },
      responsible: {
        title: 'Verantwortlich für den Inhalt nach §55 Abs. 2 RStV:',
        name: 'Amitabh Shekhar',
        company: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Deutschland'
      },
      dispute: {
        title: 'EU-Streitschlichtung',
        text1: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
        link: 'https://ec.europa.eu/consumers/odr/',
        text2: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
      },
      liability: {
        title: 'Haftung für Inhalte',
        text: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
      },
      links: {
        title: 'Haftung für Links',
        text: 'Unsere Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss, daher können wir für diese fremden Inhalte auch keine Gewähr übernehmen.'
      },
      copyright: {
        title: 'Urheberrecht',
        text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors.'
      }
    },
    terms: {
      title: 'Allgemeine Geschäftsbedingungen (AGB)',
      intro: 'AGB – Allgemeine Geschäftsbedingungen\nCosmiQ Consulting',
      scope: {
        title: '1. Geltungsbereich',
        text: 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Beratungsdienstleistungen, die von CosmiQ Consulting, Köglweg 15, 82024 Taufkirchen, Deutschland, erbracht werden. Durch die Buchung einer Beratung oder Dienstleistung über unsere Website oder Buchungssystem stimmt der Kunde diesen Geschäftsbedingungen zu.'
      },
      services: {
        title: '2. Dienstleistungen',
        text: 'CosmiQ Consulting erbringt Beratungsdienstleistungen in den Bereichen Unternehmensberatung, Coaching und Beratungsdienstleistungen. Der Umfang der Dienstleistung wird individuell zwischen CosmiQ Consulting und dem Kunden festgelegt, entweder durch direkte Kommunikation oder über die Buchungsplattform.'
      },
      booking: {
        title: '3. Terminbuchung',
        text: 'Termine können online über unser Buchungssystem oder durch direkten Kontakt gebucht werden. Sobald ein Termin bestätigt ist, wird die Buchung verbindlich.'
      },
      payment: {
        title: '4. Zahlung',
        text: 'Zahlungen für Beratungsdienstleistungen müssen im Voraus geleistet werden, sofern nichts anderes vereinbart ist. Zahlungen können über Zahlungsdienstleister wie PayPal oder Banküberweisung verarbeitet werden.'
      },
      cancellation: {
        title: '5. Stornierungsrichtlinie',
        text: 'Termine können bis zu 24 Stunden vor dem vereinbarten Termin kostenlos storniert oder verschoben werden. Wenn eine Stornierung weniger als 24 Stunden vor dem Termin erfolgt oder der Client nicht zum Termin erscheint, behält sich CosmiQ Consulting das Recht vor, die volle Beratungsgebühr zu berechnen.'
      },
      liability: {
        title: '6. Haftung',
        text: 'CosmiQ Consulting erbringt Beratungsdienstleistungen auf Basis von Erfahrung und Fachwissen. Es wird jedoch keine Garantie für bestimmte Ergebnisse oder Erfolge gegeben. Die Haftung für Schäden ist auf Fälle vorsätzlichen Fehlverhaltens oder grober Fahrlässigkeit beschränkt.'
      },
      confidentiality: {
        title: '7. Vertraulichkeit',
        text: 'Alle Informationen, die der Client während der Beratungen weitergibt, werden streng vertraulich behandelt und ohne Zustimmung nicht an Dritte weitergegeben, sofern nicht gesetzlich vorgeschrieben.'
      },
      dataProtection: {
        title: '8. Datenschutz',
        text: 'Personenbezogene Daten, die im Zusammenhang mit Buchungen oder Beratungen erhoben werden, werden in Übereinstimmung mit unserer Datenschutzerklärung (Datenschutzerklärung) verarbeitet.'
      },
      applicableLaw: {
        title: '9. Anwendbares Recht',
        text: 'Es gelten die Gesetze der Bundesrepublik Deutschland.'
      },
      jurisdiction: {
        title: '10. Gerichtsstand',
        text: 'Der Gerichtsstand für alle Streitigkeiten aus dieser Geschäftsbeziehung ist München, Deutschland.'
      },
      companyInfo: {
        title: 'CosmiQ Consulting',
        address: 'Köglweg 15',
        city: '82024 Taufkirchen',
        country: 'Deutschland'
      }
    }
  }
};
