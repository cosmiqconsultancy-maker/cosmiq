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
        title: 'Office & Commercial Vastu',
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
        description: 'A comprehensive 130-140 page personalized guide combining Astrology, Numerology, and Vastu wisdom tailored specifically for you. This unique blueprint reveals your life path, career potential, relationship patterns, and spatial alignment recommendations.',
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
        { title: 'Book Your Free 20-Minute Assessment', desc: '' },
        { title: 'Initial Consultation Call', desc: 'During the call we understand the client’s situation and goals.' },
        { title: 'Share Your Floor Plan', desc: 'The client shares the floor plan and property details.' },
        { title: 'Directional and Layout Analysis', desc: 'Analysis of spatial orientation and room placement.' },
        { title: 'Site Visit (if required)', desc: '' },
        { title: 'Personalized Recommendations', desc: '' }
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
      email: 'info@cosmiqconsulting.com'
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
        title: 'Büro & Gewerbe Vastu',
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
        description: 'Ein umfassender 130-140 seitiger personalisierter Leitfaden, der Astrologie, Numerologie und Vastu-Weisheit speziell für Sie kombiniert. Dieser einzigartige Blueprint enthüllt Ihren Lebensweg, Karrierepotenzial, Beziehungsmuster und räumliche Ausrichtungsempfehlungen.',
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
        { title: 'Buchen Sie Ihre kostenlose 20-minütige Analyse', desc: '' },
        { title: 'Erstberatungsgespräch', desc: 'Während des Gesprächs verstehen wir die Situation und die Ziele des Kunden.' },
        { title: 'Teilen Sie Ihren Grundriss', desc: 'Der Kunde teilt den Grundriss und die Objektdetails mit.' },
        { title: 'Richtungs- und Layoutanalyse', desc: 'Analyse der räumlichen Orientierung und Raumplatzierung.' },
        { title: 'Besichtigung vor Ort (falls erforderlich)', desc: '' },
        { title: 'Personalisierte Empfehlungen', desc: '' }
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
      email: 'info@cosmiqconsulting.com'
    }
  }
};
