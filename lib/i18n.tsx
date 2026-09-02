'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Locale = 'en' | 'sq' | 'de-CH'

export const LANGUAGE_OPTIONS: { value: Locale; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'sq', label: 'Shqip' },
  { value: 'de-CH', label: 'Schwiizerdutsch' },
]

type TranslationValue =
  | string
  | TranslationValue[]
  | { [key: string]: TranslationValue }

type Dictionary = Record<string, TranslationValue>

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    language: { label: 'Language' },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      quote: 'Get a Quote',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      homeAria: 'Bujar SG home',
    },
    logo: { tagline: 'Vehicle Transport' },
    hero: {
      badge: 'Switzerland -> North Macedonia',
      title: 'Reliable Vehicle Transport From Switzerland To North Macedonia',
      description:
        'Fast, reliable and professional vehicle transportation services from Switzerland to Skopje, Tetovo, Gostivar and across North Macedonia.',
      quote: 'Get a Quote',
      how: 'How It Works',
      handling: 'Careful Handling',
      vehicles: '5000+ Vehicles',
      destination: 'North Macedonia',
    },
    servicesOverview: {
      eyebrow: 'Our Routes',
      title: 'Vehicle transport to North Macedonia',
      description:
        'We move cars, SUVs, vans and luxury vehicles from Switzerland to destinations throughout North Macedonia.',
      learnMore: 'Learn more',
      cards: [
        {
          title: 'Switzerland -> North Macedonia',
          description:
            'Direct, reliable transport to Skopje, Tetovo and all of North Macedonia.',
        },
        {
          title: 'Swiss pickup',
          description:
            'Vehicle collection from your Swiss address or one of our secure depots.',
        },
        {
          title: 'Macedonian delivery',
          description:
            'Delivery to Skopje, Tetovo, Gostivar, Kumanovo, Bitola and Struga.',
        },
        {
          title: 'Careful transport',
          description:
            'Every Switzerland to North Macedonia shipment is handled with professional care.',
        },
      ],
    },
    how: {
      eyebrow: 'How It Works',
      title: 'Three simple steps to ship your vehicle',
      description:
        'From your first quote to safe delivery, we keep the entire process transparent and stress-free.',
      steps: [
        {
          title: 'Request Quote',
          description:
            'Use our contact form to receive a fast, transparent quote tailored to your vehicle and route.',
        },
        {
          title: 'Vehicle Pickup',
          description:
            'We collect your vehicle from your Swiss address or depot and load it securely onto our red car carriers.',
        },
        {
          title: 'Safe Delivery',
          description:
            'We keep you updated as your vehicle is delivered safely to its destination in North Macedonia.',
        },
      ],
    },
    why: {
      eyebrow: 'Why Choose Us',
      title: 'The trusted choice for North Macedonia vehicle transport',
      description:
        'Families across Switzerland rely on Bujar SG for careful, reliable and professional vehicle delivery to North Macedonia.',
      features: [
        {
          title: 'Careful Vehicle Handling',
          description:
            'Your vehicle is loaded, secured and handled with care from pickup to delivery.',
        },
        {
          title: 'Clear Updates',
          description:
            'Straightforward communication keeps you informed throughout the journey.',
        },
        {
          title: '10+ Years Experience',
          description:
            'A decade of dedicated experience moving vehicles between Switzerland and North Macedonia.',
        },
        {
          title: 'Competitive Pricing',
          description:
            'Transparent, fair pricing with no hidden fees. Request a tailored quote online.',
        },
        {
          title: 'Professional Drivers',
          description:
            'Experienced, multilingual drivers who know the Switzerland to North Macedonia route.',
        },
        {
          title: 'Door-to-Door Service',
          description:
            'Convenient collection and delivery right to your doorstep on both ends.',
        },
      ],
    },
    cta: {
      title: 'Ready To Ship Your Vehicle?',
      description:
        'Get a fast, transparent quote today and let us handle your vehicle transport from Switzerland to North Macedonia with professional care.',
      whatsapp: 'WhatsApp Us',
      quote: 'Request Quote',
    },
    footer: {
      description:
        'Reliable and professional vehicle transportation from Switzerland to North Macedonia.',
      navigation: 'Navigation',
      destinations: 'Destination',
      contact: 'Contact',
      route: 'Switzerland -> North Macedonia',
      rights: 'All rights reserved.',
      tagline: 'Reliable Swiss Vehicle Transport To North Macedonia.',
    },
    about: {
      heroEyebrow: 'About Us',
      heroTitle: "Switzerland's trusted North Macedonia transport company",
      heroDescription:
        'For over a decade, Bujar SG has connected families across Switzerland with North Macedonia through safe and reliable vehicle transport.',
      storyEyebrow: 'Our Story',
      storyTitle: 'Built on trust within the Macedonian diaspora',
      storyP1:
        'Bujar SG was founded in Zurich by members of the Macedonian community who understood first-hand how difficult and stressful it was to transport a vehicle back home. What started as a single red carrier has grown into a professional fleet serving thousands of families every year.',
      storyP2:
        'Today we operate regular routes from Switzerland to North Macedonia. Every journey is handled by professional, multilingual drivers who treat each vehicle as if it were their own.',
      missionTitle: 'Our Mission',
      mission:
        'To deliver safe, affordable, and reliable vehicle transport services from Switzerland to North Macedonia, giving every customer complete peace of mind from pickup to delivery.',
      visionTitle: 'Our Vision',
      vision:
        'To become the most trusted North Macedonia vehicle transportation company in Switzerland, setting the standard for professionalism, safety and customer care across this route.',
      valuesEyebrow: 'Our Values',
      valuesTitle: 'What drives everything we do',
      values: [
        {
          title: 'Reliability',
          description: 'We deliver on our promises, on time, every time.',
        },
        {
          title: 'Transparency',
          description: 'Clear pricing and honest communication at every stage.',
        },
        {
          title: 'Safety',
          description: 'Your vehicle is handled carefully from pickup to delivery.',
        },
        {
          title: 'Professionalism',
          description:
            'A dedicated, experienced team focused on dependable service.',
        },
      ],
      certEyebrow: 'Trust & Certifications',
      certTitle: 'Licensed and compliant',
      certDescription:
        'We follow the transport requirements needed to move vehicles across European borders with confidence.',
      certs: [
        'Swiss Transport License',
        'EU Logistics Compliant',
        'Bonded Carrier',
      ],
    },
    servicesPage: {
      heroEyebrow: 'Our Services',
      heroTitle: 'Vehicle transport to North Macedonia',
      heroDescription:
        'Discover our complete transport service from Switzerland to North Macedonia.',
      routeEyebrow: 'Route',
      routeTitle: 'Switzerland to North Macedonia',
      routeDescription:
        'Regular, scheduled departures from Switzerland to major cities across North Macedonia.',
      routeImagesEyebrow: 'Popular Routes',
      routeImagesTitle: 'Swiss pickup routes to North Macedonia',
      routeImagesDescription:
        'A few common pickup and delivery combinations for the Switzerland to North Macedonia service.',
      routeImages: [
        {
          title: 'Zurich -> Skopje',
          description:
            'Vehicle transport from Zurich and nearby Swiss cities to Skopje.',
        },
        {
          title: 'Basel -> Tetovo',
          description:
            'Secure pickup around Basel with delivery to Tetovo and surrounding areas.',
        },
        {
          title: 'Geneva -> Gostivar',
          description:
            'Professional transport from western Switzerland to Gostivar and nearby towns.',
        },
      ],
      includedEyebrow: "What's Included",
      includedTitle: 'Everything you need, included',
      includedDescription:
        'Every Bujar SG transport comes with a complete set of professional services as standard.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Frequently asked questions',
      faqDescription:
        'Everything you need to know about transporting your vehicle with Bujar SG.',
      included: [
        {
          title: 'Door-to-door transport',
          description:
            'We collect your vehicle from your address in Switzerland and deliver it directly to the destination.',
        },
        {
          title: 'Depot pickup',
          description:
            'Drop off and collect your vehicle at one of our secure regional depots for a lower rate.',
        },
        {
          title: 'Status updates',
          description:
            'Receive clear updates from pickup in Switzerland to final delivery.',
        },
        {
          title: 'Professional handling',
          description:
            'Trained drivers and modern car carriers ensure your vehicle arrives in perfect condition.',
        },
      ],
    },
    routes: {
      macedonia: {
        title: 'Switzerland -> North Macedonia',
        description:
          'Direct vehicle transport from Switzerland to Skopje, Tetovo, Gostivar and all major Macedonian cities.',
        coverage: 'Skopje, Tetovo, Gostivar, Kumanovo, Bitola, Struga',
      },
      coverage: 'Coverage:',
      quote: 'Get a Quote',
      included: [
        'Secure loading',
        'Status updates',
        'Professional handling',
        'Door-to-door option',
      ],
    },
    faq: {
      items: [
        {
          question: 'How long does transportation take?',
          answer:
            'Delivery timing is confirmed with your quote and depends on pickup location, route planning, and destination city.',
        },
        {
          question: 'Can I transport non-running vehicles?',
          answer:
            'Yes, we can transport non-running vehicles using specialized equipment. Please mention this when requesting your quote so we can arrange the right carrier.',
        },
        {
          question: 'How does pickup work?',
          answer:
            'With door-to-door service we collect the vehicle directly from your Swiss address. With depot pickup, you drop it off at one of our secure regional depots for a lower rate.',
        },
        {
          question: 'What documents are required?',
          answer:
            'You will need the vehicle registration, a copy of your ID, and a signed transport authorization. For customs, we guide you through any additional paperwork required for North Macedonia.',
        },
        {
          question: 'Will I receive updates during transport?',
          answer:
            'Yes. We keep you informed during the journey and contact you with important updates until delivery.',
        },
      ],
    },
    contact: {
      heroEyebrow: 'Contact',
      heroTitle: "Let's get your vehicle moving",
      heroDescription:
        'Fill in the form below for a personalised quote, or reach us directly by phone, email or WhatsApp.',
      infoTitle: 'Contact information',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      facebookPage: 'Facebook page',
      chat: 'Chat with us',
      address: 'Address',
      form: {
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        originCity: 'Origin City (Switzerland)',
        destination: 'Destination Country',
        destinationPlaceholder: 'Select a country',
        vehicle: 'Vehicle Make & Model',
        vehiclePlaceholder: 'e.g. BMW X5',
        message: 'Message',
        submit: 'Send Request',
        sending: 'Sending...',
        successTitle: 'Thank you for your request!',
        successDescription:
          "We've received your details and our team will get back to you shortly with a personalised quote.",
        sendAnother: 'Send another request',
        requestIntro:
          'I would like to request a quote for vehicle transport.',
        route: 'Route:',
        vehicleType: 'Vehicle type:',
        service: 'Service:',
        estimate: 'Estimated price:',
        errorFallback: 'Something went wrong.',
        errors: {
          fullName: 'Please enter your full name',
          email: 'Please enter a valid email address',
          phone: 'Please enter a valid phone number',
          originCity: 'Please enter your origin city',
          destinationCountry: 'Please select a destination country',
          vehicle: 'Please enter your vehicle make & model',
          message: 'Please add a few details (min. 10 characters)',
        },
      },
    },
    destinations: { macedonia: 'North Macedonia' },
  },
  sq: {
    language: { label: 'Gjuha' },
    nav: {
      home: 'Ballina',
      about: 'Rreth nesh',
      services: 'Sherbimet',
      contact: 'Kontakt',
      quote: 'Kerko oferte',
      openMenu: 'Hap menune',
      closeMenu: 'Mbyll menune',
      homeAria: 'Ballina e Bujar SG',
    },
    logo: { tagline: 'Transport automjetesh' },
    hero: {
      badge: 'Zvicra -> Maqedonia e Veriut',
      title:
        'Transport i besueshem i automjeteve nga Zvicra ne Maqedonine e Veriut',
      description:
        'Sherbim i shpejte, i besueshem dhe profesional nga Zvicra per ne Shkup, Tetove, Gostivar dhe gjithe Maqedonine e Veriut.',
      quote: 'Kerko oferte',
      how: 'Si funksionon',
      handling: 'Trajtim me kujdes',
      vehicles: '5000+ automjete',
      destination: 'Maqedonia e Veriut',
    },
    servicesOverview: {
      eyebrow: 'Rruga jone',
      title: 'Transport automjetesh per ne Maqedonine e Veriut',
      description:
        'Transportojme vetura, SUV, furgone dhe automjete luksoze nga Zvicra ne destinacione ne Maqedonine e Veriut.',
      learnMore: 'Me shume',
      cards: [
        {
          title: 'Zvicra -> Maqedonia e Veriut',
          description:
            'Transport direkt dhe i besueshem per ne Shkup, Tetove dhe gjithe Maqedonine e Veriut.',
        },
        {
          title: 'Marrje ne Zvicer',
          description:
            'Marrje e automjetit nga adresa juaj ne Zvicer ose nga depot tona te sigurta.',
        },
        {
          title: 'Dorezim ne Maqedoni',
          description:
            'Dorezim ne Shkup, Tetove, Gostivar, Kumanove, Manastir dhe Struge.',
        },
        {
          title: 'Transport me kujdes',
          description:
            'Cdo dergese nga Zvicra ne Maqedonine e Veriut trajtohet ne menyre profesionale.',
        },
      ],
    },
    how: {
      eyebrow: 'Si funksionon',
      title: 'Tre hapa te thjeshte per transportin e automjetit',
      description:
        'Nga oferta e pare deri te dorezimi i sigurt, procesin e mbajme te qarte dhe pa stres.',
      steps: [
        {
          title: 'Kerko oferte',
          description:
            'Plotesoni formen e kontaktit per nje oferte te shpejte dhe transparente per automjetin dhe rrugen tuaj.',
        },
        {
          title: 'Marrja e automjetit',
          description:
            'E marrim automjetin nga adresa juaj ne Zvicer ose nga depoja dhe e ngarkojme ne menyre te sigurt.',
        },
        {
          title: 'Dorezim i sigurt',
          description:
            'Ju mbajme te informuar derisa automjeti dorezohet ne destinacionin tuaj ne Maqedonine e Veriut.',
        },
      ],
    },
    why: {
      eyebrow: 'Pse Bujar SG',
      title:
        'Zgjedhja e besuar per transport drejt Maqedonise se Veriut',
      description:
        'Familje ne gjithe Zvicren mbeshteten te Bujar SG per transport te kujdesshem, te besueshem dhe profesional drejt Maqedonise se Veriut.',
      features: [
        {
          title: 'Trajtim me kujdes i automjetit',
          description:
            'Automjeti ngarkohet, fiksohet dhe trajtohet me kujdes nga marrja deri te dorezimi.',
        },
        {
          title: 'Perditesime te qarta',
          description:
            'Komunikimi i qarte ju mban te informuar gjate udhetimit.',
        },
        {
          title: '10+ vite pervoje',
          description:
            'Pervoje e gjate ne transportin e automjeteve mes Zvicres dhe Maqedonise se Veriut.',
        },
        {
          title: 'Cmim transparent',
          description:
            'Cmim i drejte, pa shpenzime te fshehura. Kerkoni oferte te personalizuar online.',
        },
        {
          title: 'Shofer profesioniste',
          description:
            'Shofer me pervoje qe e njohin mire rrugen Zvicer - Maqedoni e Veriut.',
        },
        {
          title: 'Sherbim dere me dere',
          description:
            'Marrje dhe dorezim i pershtatshem direkt ne adresat perkatese.',
        },
      ],
    },
    cta: {
      title: 'Gati per ta derguar automjetin?',
      description:
        'Merrni nje oferte te shpejte dhe transparente sot; transportin nga Zvicra ne Maqedonine e Veriut e trajtojme me kujdes profesional.',
      whatsapp: 'Na shkruani ne WhatsApp',
      quote: 'Kerko oferte',
    },
    footer: {
      description:
        'Transport i besueshem dhe profesional nga Zvicra ne Maqedonine e Veriut.',
      navigation: 'Navigimi',
      destinations: 'Destinacioni',
      contact: 'Kontakt',
      route: 'Zvicra -> Maqedonia e Veriut',
      rights: 'Te gjitha te drejtat e rezervuara.',
      tagline: 'Transport i besueshem nga Zvicra ne Maqedonine e Veriut.',
    },
    about: {
      heroEyebrow: 'Rreth nesh',
      heroTitle:
        'Kompania e besuar ne Zvicer per transport drejt Maqedonise se Veriut',
      heroDescription:
        'Per me shume se nje dekade, Bujar SG lidh familjet ne Zvicer me Maqedonine e Veriut permes transportit te sigurt dhe te besueshem.',
      storyEyebrow: 'Historia jone',
      storyTitle: 'E ndertuar mbi besimin e diaspores maqedonase',
      storyP1:
        'Bujar SG u themelua ne Cyrih nga anetare te komunitetit maqedonas qe e kuptonin sa i veshtire mund te jete transporti i nje automjeti per ne vendlindje. Nga nje kamion i vetem i kuq, kompania u rrit ne nje flote profesionale.',
      storyP2:
        'Sot operojme rregullisht nga Zvicra ne Maqedonine e Veriut. Cdo udhetim trajtohet nga shofer profesioniste.',
      missionTitle: 'Misioni yne',
      mission:
        'Te ofrojme transport te sigurt, te perballueshem dhe te besueshem nga Zvicra ne Maqedonine e Veriut, me qetesi te plote nga marrja deri te dorezimi.',
      visionTitle: 'Vizioni yne',
      vision:
        'Te jemi kompania me e besuar ne Zvicer per transport automjetesh drejt Maqedonise se Veriut, me standard te larte profesionalizmi dhe sigurie.',
      valuesEyebrow: 'Vlerat tona',
      valuesTitle: 'Cfare na udheheq',
      values: [
        {
          title: 'Besueshmeria',
          description: 'I mbajme premtimet tona, ne kohe, cdo here.',
        },
        {
          title: 'Transparenca',
          description: 'Cmim i qarte dhe komunikim i sinqerte ne cdo faze.',
        },
        {
          title: 'Siguria',
          description: 'Automjeti juaj trajtohet me kujdes nga marrja deri te dorezimi.',
        },
        {
          title: 'Profesionalizmi',
          description: 'Ekip me pervoje, i fokusuar ne sherbim korrekt.',
        },
      ],
      certEyebrow: 'Besim & certifikime',
      certTitle: 'I licencuar dhe korrekt',
      certDescription:
        'Ndjekim kerkesat e transportit per levizjen e automjeteve permes kufijve europiane.',
      certs: [
        'Licence transporti zvicerane',
        'Perputhje logjistike me BE',
        'Transportues i certifikuar',
      ],
    },
    servicesPage: {
      heroEyebrow: 'Sherbimet tona',
      heroTitle: 'Transport automjetesh per ne Maqedonine e Veriut',
      heroDescription:
        'Zbuloni sherbimin tone te plote nga Zvicra ne Maqedonine e Veriut.',
      routeEyebrow: 'Rruga',
      routeTitle: 'Zvicra drejt Maqedonise se Veriut',
      routeDescription:
        'Nisje te rregullta nga Zvicra drejt qyteteve kryesore ne Maqedonine e Veriut.',
      routeImagesEyebrow: 'Rruge te shpeshta',
      routeImagesTitle: 'Rruge nga Zvicra ne Maqedonine e Veriut',
      routeImagesDescription:
        'Disa kombinime te zakonshme per marrje ne Zvicer dhe dorezim ne Maqedonine e Veriut.',
      routeImages: [
        {
          title: 'Cyrih -> Shkup',
          description:
            'Transport i automjeteve nga Cyrihu dhe qytetet perreth drejt Shkupit.',
        },
        {
          title: 'Basel -> Tetove',
          description:
            'Marrje e sigurt rreth Baselit me dorezim ne Tetove dhe rrethine.',
        },
        {
          title: 'Gjeneve -> Gostivar',
          description:
            'Transport profesional nga Zvicra perendimore drejt Gostivarit dhe qyteteve perreth.',
        },
      ],
      includedEyebrow: 'Cfare perfshihet',
      includedTitle: 'Gjithcka qe ju duhet, e perfshire',
      includedDescription:
        'Cdo transport me Bujar SG perfshin sherbime profesionale si standard.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Pyetje te shpeshta',
      faqDescription:
        'Gjithcka qe duhet te dini per transportin e automjetit me Bujar SG.',
      included: [
        {
          title: 'Transport dere me dere',
          description:
            'E marrim automjetin nga adresa juaj ne Zvicer dhe e dorezojme direkt ne destinacion.',
        },
        {
          title: 'Dorezim ne depo',
          description:
            'Mund ta lini ose ta merrni automjetin ne depot tona rajonale te sigurta.',
        },
        {
          title: 'Perditesime gjate rruges',
          description:
            'Merrni perditesime te qarta nga marrja ne Zvicer deri te dorezimi.',
        },
        {
          title: 'Trajtim profesional',
          description:
            'Shofer te trajnuar dhe kamione moderne sigurojne qe automjeti te mberrije ne gjendje te mire.',
        },
      ],
    },
    routes: {
      macedonia: {
        title: 'Zvicra -> Maqedonia e Veriut',
        description:
          'Transport direkt nga Zvicra per ne Shkup, Tetove, Gostivar dhe qytetet kryesore te Maqedonise se Veriut.',
        coverage: 'Shkup, Tetove, Gostivar, Kumanove, Manastir, Struge',
      },
      coverage: 'Mbulimi:',
      quote: 'Kerko oferte',
      included: [
        'Ngarkim i sigurt',
        'Perditesime gjate rruges',
        'Trajtim profesional',
        'Opsion dere me dere',
      ],
    },
    faq: {
      items: [
        {
          question: 'Sa zgjat transporti?',
          answer:
            'Koha e dorezimit konfirmohet bashke me oferten dhe varet nga vendi i marrjes, planifikimi i rruges dhe qyteti i destinacionit.',
        },
        {
          question: 'A transportoni automjete qe nuk ndizen?',
          answer:
            'Po, mund te transportojme automjete jofunksionale me pajisje te specializuara. Ju lutemi ta cekni kete kur kerkoni oferte.',
        },
        {
          question: 'Si funksionon marrja e automjetit?',
          answer:
            'Me sherbimin dere me dere e marrim automjetin direkt nga adresa juaj ne Zvicer. Mund ta lini edhe ne nje depo te sigurt rajonale.',
        },
        {
          question: 'Cilat dokumente nevojiten?',
          answer:
            'Nevojiten dokumenti i automjetit, kopje e ID-se dhe autorizimi i nenshkruar per transport. Per doganen ju udhezojme per cdo dokument shtese.',
        },
        {
          question: 'A do te marr perditesime gjate transportit?',
          answer:
            'Po. Ju mbajme te informuar gjate udhetimit dhe ju kontaktojme per perditesime te rendesishme deri ne dorezim.',
        },
      ],
    },
    contact: {
      heroEyebrow: 'Kontakt',
      heroTitle: 'Ta nisim transportin e automjetit tuaj',
      heroDescription:
        'Plotesoni formen per nje oferte te personalizuar, ose na kontaktoni direkt me telefon, email apo WhatsApp.',
      infoTitle: 'Informacione kontakti',
      phone: 'Telefoni',
      email: 'Email',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      facebookPage: 'Faqja ne Facebook',
      chat: 'Bisedoni me ne',
      address: 'Adresa',
      form: {
        fullName: 'Emri dhe mbiemri',
        email: 'Email',
        phone: 'Telefoni',
        originCity: 'Qyteti i nisjes (Zvicer)',
        destination: 'Shteti i destinacionit',
        destinationPlaceholder: 'Zgjidhni shtetin',
        vehicle: 'Marka & modeli i automjetit',
        vehiclePlaceholder: 'p.sh. BMW X5',
        message: 'Mesazhi',
        submit: 'Dergo kerkesen',
        sending: 'Duke derguar...',
        successTitle: 'Faleminderit per kerkesen!',
        successDescription:
          'I kemi pranuar te dhenat tuaja dhe ekipi yne do tju kontaktoje se shpejti me oferte te personalizuar.',
        sendAnother: 'Dergo kerkese tjeter',
        requestIntro: 'Deshiroj te kerkoj oferte per transport automjeti.',
        route: 'Rruga:',
        vehicleType: 'Lloji i automjetit:',
        service: 'Sherbimi:',
        estimate: 'Cmimi i vleresuar:',
        errorFallback: 'Dicka shkoi keq.',
        errors: {
          fullName: 'Ju lutemi shkruani emrin dhe mbiemrin',
          email: 'Ju lutemi shkruani nje email valid',
          phone: 'Ju lutemi shkruani nje numer telefoni valid',
          originCity: 'Ju lutemi shkruani qytetin e nisjes',
          destinationCountry: 'Ju lutemi zgjidhni shtetin e destinacionit',
          vehicle: 'Ju lutemi shkruani marken dhe modelin e automjetit',
          message: 'Ju lutemi shtoni disa detaje (min. 10 karaktere)',
        },
      },
    },
    destinations: { macedonia: 'Maqedonia e Veriut' },
  },
  'de-CH': {
    language: { label: 'Sprach' },
    nav: {
      home: 'Start',
      about: 'Uber eus',
      services: 'Service',
      contact: 'Kontakt',
      quote: 'Offerte ahfrage',
      openMenu: 'Menu ufmache',
      closeMenu: 'Menu zumache',
      homeAria: 'Bujar SG Startsite',
    },
    logo: { tagline: 'Fahrzugtransport' },
    hero: {
      badge: 'Schwiiz -> Nordmazedonie',
      title: 'Zuverlassige Fahrzugtransport vo de Schwiiz nach Nordmazedonie',
      description:
        'Schnall, zuverlassig und professionell: Fahrzugtransport vo de Schwiiz nach Skopje, Tetovo, Gostivar und ganz Nordmazedonie.',
      quote: 'Offerte ahfrage',
      how: 'So laufts',
      handling: 'Sorgfaltigi Handhabig',
      vehicles: '5000+ Fahrzug',
      destination: 'Nordmazedonie',
    },
    servicesOverview: {
      eyebrow: 'Eusi Route',
      title: 'Fahrzugtransport nach Nordmazedonie',
      description:
        'Mir transportiered Autos, SUVs, Vans und Luxusfahrzug vo de Schwiiz nach Nordmazedonie.',
      learnMore: 'Meh erfahre',
      cards: [
        {
          title: 'Schwiiz -> Nordmazedonie',
          description:
            'Direkte, zuverlassigi Transport nach Skopje, Tetovo und ganz Nordmazedonie.',
        },
        {
          title: 'Abholig i de Schwiiz',
          description:
            'Mir holed s Fahrzug bi dir ab oder i eim vo eusne sichere Depots.',
        },
        {
          title: 'Lieferig i Nordmazedonie',
          description:
            'Lieferig nach Skopje, Tetovo, Gostivar, Kumanovo, Bitola und Struga.',
        },
        {
          title: 'Sorgfaltige Transport',
          description:
            'Jedi Sendig vo de Schwiiz nach Nordmazedonie wird professionell behandelt.',
        },
      ],
    },
    how: {
      eyebrow: 'So laufts',
      title: 'Drei eifachi Schritt fur din Fahrzugtransport',
      description:
        'Vo de erste Offerte bis zur sichere Lieferig halted mir alles transparent und entspannt.',
      steps: [
        {
          title: 'Offerte ahfrage',
          description:
            'Full s Kontaktformular us und du bechunsch e schnalli, klari Offerte fur dis Fahrzug und die Route.',
        },
        {
          title: 'Fahrzug abhole',
          description:
            'Mir holed dis Fahrzug a dinere Adresse i de Schwiiz oder im Depot ab und laded es sicher uf.',
        },
        {
          title: 'Sicheri Lieferig',
          description:
            'Mir halted dich uf em Laufende, bis dis Fahrzug sicher i Nordmazedonie acho isch.',
        },
      ],
    },
    why: {
      eyebrow: 'Warum Bujar SG',
      title: 'D vertrauti Wahl fur Transport nach Nordmazedonie',
      description:
        'Familie i de ganze Schwiiz verlassed sich uf Bujar SG fur sorgfaltige, zuverlassige und professionelle Fahrzugtransport nach Nordmazedonie.',
      features: [
        {
          title: 'Sorgfaltigi Fahrzughandhabig',
          description:
            'Dis Fahrzug wird vo de Abholig bis zur Lieferig sorgfaltig glade, gsicheret und behandelt.',
        },
        {
          title: 'Klari Updates',
          description:
            'Klari Kommunikation halt dich wahrend de Reise informiert.',
        },
        {
          title: '10+ Jahr Erfahrig',
          description:
            'Langjahrigi Erfahrig mit Fahrzugtransport zwusche Schwiiz und Nordmazedonie.',
        },
        {
          title: 'Fairi Priise',
          description:
            'Transparenti Priise ohni versteckti Choste. Frag online e passendi Offerte ah.',
        },
        {
          title: 'Professionelli Fahrer',
          description:
            'Erfahrni, mehrsprachigi Fahrer, wo d Route Schwiiz - Nordmazedonie kenned.',
        },
        {
          title: 'Tur-zu-Tur Service',
          description:
            'Bequemi Abholig und Lieferig direkt a de Adresse uf beide Site.',
        },
      ],
    },
    cta: {
      title: 'Bereit, dis Fahrzug z transportiere?',
      description:
        'Hol dir hüt e schnalli, transparanti Offerte. Mir ubernehmed din Transport vo de Schwiiz nach Nordmazedonie mit professioneller Sorgfalt.',
      whatsapp: 'WhatsApp schriebe',
      quote: 'Offerte ahfrage',
    },
    footer: {
      description:
        'Zuverlassige und professionelli Fahrzugtransport vo de Schwiiz nach Nordmazedonie.',
      navigation: 'Navigation',
      destinations: 'Destination',
      contact: 'Kontakt',
      route: 'Schwiiz -> Nordmazedonie',
      rights: 'Alli Recht vorbehalte.',
      tagline: 'Zuverlassige Fahrzugtransport vo de Schwiiz nach Nordmazedonie.',
    },
    about: {
      heroEyebrow: 'Uber eus',
      heroTitle: 'D vertrauti Transportfirma vo de Schwiiz nach Nordmazedonie',
      heroDescription:
        'Sit uber eme Jahrzehnt verbindet Bujar SG Familie i de Schwiiz mit Nordmazedonie dur sichere und zuverlässige Fahrzugtransport.',
      storyEyebrow: 'Eusi Gschicht',
      storyTitle: 'Uf Vertraue i de mazedonische Diaspora baut',
      storyP1:
        'Bujar SG isch in Zurich vo Lüt us de mazedonische Community grundet worde. Sie händ selber gwüsst, wie stressig es cha si, es Fahrzug hei z transportiere. Us eim rote Transporter isch e professionelli Flotte worde.',
      storyP2:
        'Hüt fahred mir regelmassig vo de Schwiiz nach Nordmazedonie. Jede Transport wird vo professionelli Fahrer betreut.',
      missionTitle: 'Eusi Mission',
      mission:
        'Sichere, faire und zuverlässige Fahrzugtransport vo de Schwiiz nach Nordmazedonie, damit jede Kund vo de Abholig bis zur Lieferig Rueh het.',
      visionTitle: 'Eusi Vision',
      vision:
        'D vertrautischti Firma i de Schwiiz fur Fahrzugtransport nach Nordmazedonie werde, mit hohem Standard bi Professionalitat, Sicherheit und Kundebetreuig.',
      valuesEyebrow: 'Eusi Wert',
      valuesTitle: 'Was eus atriebt',
      values: [
        {
          title: 'Zuverlassigkeit',
          description: 'Mir halted, was mir versprechid, punctual und jedes Mal.',
        },
        {
          title: 'Transparenz',
          description: 'Klare Priise und ehrligi Kommunikation i jede Phase.',
        },
        {
          title: 'Sicherheit',
          description: 'Dis Fahrzug wird vo de Abholig bis zur Lieferig sorgfaltig behandelt.',
        },
        {
          title: 'Professionalitat',
          description: 'Es erfahrenes Team, fokussiert uf guete Service.',
        },
      ],
      certEyebrow: 'Vertraue & Zertifikat',
      certTitle: 'Lizenziert und konform',
      certDescription:
        'Mir folged de Transportaforderige fur Fahrzugtransport uber europaischi Grenze.',
      certs: [
        'Schwiizer Transportlizenz',
        'EU Logistik konform',
        'Zertifizierte Carrier',
      ],
    },
    servicesPage: {
      heroEyebrow: 'Eusi Service',
      heroTitle: 'Fahrzugtransport nach Nordmazedonie',
      heroDescription:
        'Entdeck euse komplette Transportservice vo de Schwiiz nach Nordmazedonie.',
      routeEyebrow: 'Route',
      routeTitle: 'Schwiiz nach Nordmazedonie',
      routeDescription:
        'Regelmassigi Abfahrte vo de Schwiiz i die wichtigste Stadt vo Nordmazedonie.',
      routeImagesEyebrow: 'Beliebti Route',
      routeImagesTitle: 'Abholroute vo de Schwiiz nach Nordmazedonie',
      routeImagesDescription:
        'Es paar hufigi Kombinatione fur Abholig i de Schwiiz und Lieferig i Nordmazedonie.',
      routeImages: [
        {
          title: 'Zurich -> Skopje',
          description:
            'Fahrzugtransport vo Zurich und de Region nach Skopje.',
        },
        {
          title: 'Basel -> Tetovo',
          description:
            'Sicheri Abholig rund um Basel mit Lieferig nach Tetovo und Umgebig.',
        },
        {
          title: 'Geneva -> Gostivar',
          description:
            'Professionelle Transport vo de Westschwiiz nach Gostivar und i d Region.',
        },
      ],
      includedEyebrow: 'Inklusive',
      includedTitle: 'Alles debi, was du bruchsch',
      includedDescription:
        'Jede Bujar SG Transport chunnt standardmassig mit professionelle Service.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Hufigi Frage',
      faqDescription:
        'Alles, was du uber Fahrzugtransport mit Bujar SG wüsse muesch.',
      included: [
        {
          title: 'Tur-zu-Tur Transport',
          description:
            'Mir holed dis Fahrzug a dinere Adresse i de Schwiiz ab und liefered es direkt a Zielort.',
        },
        {
          title: 'Depot Abgab',
          description:
            'Du chasch dis Fahrzug i eim vo eusne sichere regionale Depots abgeh oder abhole.',
        },
        {
          title: 'Updates unterwegs',
          description:
            'Du bechunsch klari Updates vo de Abholig i de Schwiiz bis zur Lieferig.',
        },
        {
          title: 'Professionelli Handhabig',
          description:
            'Gschulti Fahrer und moderni Transporter sorged dafur, dass dis Fahrzug guet acho isch.',
        },
      ],
    },
    routes: {
      macedonia: {
        title: 'Schwiiz -> Nordmazedonie',
        description:
          'Direkte Fahrzugtransport vo de Schwiiz nach Skopje, Tetovo, Gostivar und die wichtigste Stadt i Nordmazedonie.',
        coverage: 'Skopje, Tetovo, Gostivar, Kumanovo, Bitola, Struga',
      },
      coverage: 'Abdeckig:',
      quote: 'Offerte ahfrage',
      included: [
        'Sicheri Ladig',
        'Updates unterwegs',
        'Professionelli Handhabig',
        'Tur-zu-Tur Option',
      ],
    },
    faq: {
      items: [
        {
          question: 'Wie lang gaht de Transport?',
          answer:
            'D Lieferziit wird mit de Offerte bestatigt und hangt vo Abholort, Routeplanig und Zielstadt ab.',
        },
        {
          question: 'Transportiered ihr au Fahrzug, wo nöd laufe?',
          answer:
            'Ja, mir chond au nöd fahrbereiti Fahrzug mit spezielle Usrustig transportiere. Bitte erwahn das bi de Offerte.',
        },
        {
          question: 'Wie funktioniert d Abholig?',
          answer:
            'Bi Tur-zu-Tur holed mir s Fahrzug direkt a dinere Adresse i de Schwiiz ab. Alternativ chasch es i eim sichere Depot abgeh.',
        },
        {
          question: 'Welchi Dokument brauchts?',
          answer:
            'Du bruchsch Fahrzuguswiis, e Kopie vo dim ID und e unterschriebni Transportvollmacht. Fur Zollpapier helfed mir dir mit de Details.',
        },
        {
          question: 'Bechum ich Updates wahrend em Transport?',
          answer:
            'Ja. Mir halted dich wahrend de Reise informiert und melded eus mit wichtige Updates bis zur Lieferig.',
        },
      ],
    },
    contact: {
      heroEyebrow: 'Kontakt',
      heroTitle: 'Mir bringed dis Fahrzug uf de Weg',
      heroDescription:
        'Full s Formular us fur e personlichi Offerte oder erreich eus direkt per Telefon, E-Mail oder WhatsApp.',
      infoTitle: 'Kontaktinformatione',
      phone: 'Telefon',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      facebookPage: 'Facebook Site',
      chat: 'Mit eus chatte',
      address: 'Adresse',
      form: {
        fullName: 'Vor- und Nachname',
        email: 'E-Mail',
        phone: 'Telefon',
        originCity: 'Startstadt (Schwiiz)',
        destination: 'Zielland',
        destinationPlaceholder: 'Land uswahle',
        vehicle: 'Marke & Modell vom Fahrzug',
        vehiclePlaceholder: 'z.B. BMW X5',
        message: 'Nachricht',
        submit: 'Ahfrag absende',
        sending: 'Wird gsendet...',
        successTitle: 'Danke fur dini Ahfrag!',
        successDescription:
          'Mir hend dini Date erhalte und eus Team meldet sich bald mit ere personliche Offerte.',
        sendAnother: 'No e Ahfrag sende',
        requestIntro: 'Ich mochte e Offerte fur Fahrzugtransport ahfrage.',
        route: 'Route:',
        vehicleType: 'Fahrzugtyp:',
        service: 'Service:',
        estimate: 'Schatzpriis:',
        errorFallback: 'Da isch öppis schiefgloffe.',
        errors: {
          fullName: 'Bitte gib din Vor- und Nachname ih',
          email: 'Bitte gib e gültigi E-Mail-Adresse ih',
          phone: 'Bitte gib e gültigi Telefonnummer ih',
          originCity: 'Bitte gib dini Startstadt ih',
          destinationCountry: 'Bitte wahl s Zielland us',
          vehicle: 'Bitte gib Marke und Modell vom Fahrzug ih',
          message: 'Bitte fug es paar Details dezue (mind. 10 Zeiche)',
        },
      },
    },
    destinations: { macedonia: 'Nordmazedonie' },
  },
}

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  tArray: <T>(key: string) => T[]
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getNestedValue(dictionary: Dictionary, key: string): TranslationValue | undefined {
  return key.split('.').reduce<TranslationValue | undefined>((value, part) => {
    if (!value || typeof value === 'string') return undefined
    if (Array.isArray(value)) {
      const index = Number(part)
      return Number.isInteger(index) ? value[index] : undefined
    }
    return value[part]
  }, dictionary)
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem('bujarsg-locale')
  if (saved === 'en' || saved === 'sq' || saved === 'de-CH') return saved
  const language = window.navigator.language.toLowerCase()
  if (language.startsWith('sq')) return 'sq'
  if (language.startsWith('de') || language.startsWith('gsw')) return 'de-CH'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    setLocaleState(detectLocale())
  }, [])

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
    window.localStorage.setItem('bujarsg-locale', nextLocale)
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<I18nContextValue>(() => {
    const t = (key: string) => {
      const translated =
        getNestedValue(dictionaries[locale], key) ??
        getNestedValue(dictionaries.en, key)
      return typeof translated === 'string' ? translated : key
    }

    const tArray = <T,>(key: string): T[] => {
      const translated =
        getNestedValue(dictionaries[locale], key) ??
        getNestedValue(dictionaries.en, key)
      return Array.isArray(translated) ? (translated as T[]) : []
    }

    return { locale, setLocale, t, tArray }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used inside LanguageProvider')
  }
  return context
}
