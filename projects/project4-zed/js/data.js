// ===== DATA FILE FOR STUDY ABROAD HUB =====
// This file contains all the static data for cities, currencies, and timezones

// Time zones for major study abroad cities
const timezones = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Dubai', timezone: 'Asia/Dubai' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { city: 'Singapore', timezone: 'Asia/Singapore' }
];

// Currency data for converter
const currencies = {
    'USD': 'US Dollar',
    'EUR': 'Euro',
    'GBP': 'British Pound',
    'JPY': 'Japanese Yen',
    'AUD': 'Australian Dollar',
    'CAD': 'Canadian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'MXN': 'Mexican Peso',
    'INR': 'Indian Rupee'
};

// Accommodation data for major study abroad cities
const accommodationData = {
    london: {
        city: "London, UK",
        currency: "£",
        places: [
            {
                name: "iQ Student Accommodation",
                type: "Student Residence",
                price: "£200-350/week",
                location: "Multiple locations across London",
                amenities: "Gym, study rooms, social spaces, all-inclusive bills",
                website: "iq-studentaccommodation.com"
            },
            {
                name: "Unite Students",
                type: "Student Residence",
                price: "£180-400/week",
                location: "Central London locations",
                amenities: "24/7 security, cinema room, laundry, bike storage",
                website: "unitestudents.com"
            },
            {
                name: "Nido Student",
                type: "Premium Student Housing",
                price: "£250-450/week",
                location: "King's Cross, Spitalfields",
                amenities: "Rooftop terrace, cinema, gym, co-working spaces",
                website: "nidostudent.com"
            },
            {
                name: "SpareRoom London",
                type: "Shared Housing",
                price: "£500-900/month",
                location: "Various neighborhoods",
                amenities: "Varies by property, flexible contracts",
                website: "spareroom.co.uk"
            }
        ]
    },
    paris: {
        city: "Paris, France",
        currency: "€",
        places: [
            {
                name: "Cité Internationale Universitaire",
                type: "University Residence",
                price: "€400-700/month",
                location: "14th arrondissement",
                amenities: "Library, sports facilities, gardens, cultural events",
                website: "ciup.fr"
            },
            {
                name: "Estudines",
                type: "Student Residence",
                price: "€600-1,000/month",
                location: "Multiple locations in Paris",
                amenities: "Furnished studios, WiFi, laundry, study rooms",
                website: "estudines.com"
            },
            {
                name: "Nexity Studéa",
                type: "Student Residence",
                price: "€550-950/month",
                location: "Various arrondissements",
                amenities: "Furnished apartments, gym, social spaces",
                website: "studea.fr"
            },
            {
                name: "La Carte des Colocs",
                type: "Shared Apartments",
                price: "€400-800/month",
                location: "Throughout Paris",
                amenities: "Varies, local living experience",
                website: "lacartedescolocs.fr"
            }
        ]
    },
    tokyo: {
        city: "Tokyo, Japan",
        currency: "¥",
        places: [
            {
                name: "Sakura House",
                type: "Guesthouse/Share House",
                price: "¥50,000-90,000/month",
                location: "Shinjuku, Shibuya, Ikebukuro",
                amenities: "Furnished rooms, WiFi, utilities included, multilingual staff",
                website: "sakura-house.com"
            },
            {
                name: "Oakhouse",
                type: "Share House",
                price: "¥45,000-100,000/month",
                location: "Central Tokyo locations",
                amenities: "Common areas, events, international community",
                website: "oakhouse.jp"
            },
            {
                name: "Borderless House",
                type: "International Share House",
                price: "¥55,000-95,000/month",
                location: "Various Tokyo wards",
                amenities: "Language exchange, cultural events, furnished",
                website: "borderless-house.com"
            },
            {
                name: "Village House",
                type: "Apartment",
                price: "¥40,000-80,000/month",
                location: "Suburbs and central areas",
                amenities: "No key money, foreigner-friendly, flexible",
                website: "villagehouse.jp"
            }
        ]
    },
    barcelona: {
        city: "Barcelona, Spain",
        currency: "€",
        places: [
            {
                name: "Collegiate Accommodations",
                type: "Student Residence",
                price: "€600-1,100/month",
                location: "Gracia, Gothic Quarter",
                amenities: "Gym, study areas, rooftop, social events",
                website: "collegiate-ac.com"
            },
            {
                name: "Livensa Living",
                type: "Premium Student Housing",
                price: "€700-1,200/month",
                location: "Central Barcelona",
                amenities: "Pool, gym, cinema, study rooms, all-inclusive",
                website: "livensaliving.com"
            },
            {
                name: "Residencia Universitaria Barcelona",
                type: "University Residence",
                price: "€450-800/month",
                location: "Near universities",
                amenities: "Meal plans, laundry, study rooms",
                website: "resa.es"
            },
            {
                name: "Badi Shared Flats",
                type: "Shared Apartments",
                price: "€350-650/month",
                location: "All neighborhoods",
                amenities: "Flexible, roommate matching, varied options",
                website: "badi.com"
            }
        ]
    },
    sydney: {
        city: "Sydney, Australia",
        currency: "A$",
        places: [
            {
                name: "Scape Student Living",
                type: "Student Accommodation",
                price: "A$350-600/week",
                location: "Darlington, Redfern, CBD",
                amenities: "Gym, study spaces, cinema, rooftop, all bills included",
                website: "scape.com"
            },
            {
                name: "Urbanest",
                type: "Student Residence",
                price: "A$380-650/week",
                location: "Darlington, CBD",
                amenities: "24/7 security, gym, social events, study rooms",
                website: "urbanest.com.au"
            },
            {
                name: "Student Housing Australia",
                type: "Student Apartments",
                price: "A$300-550/week",
                location: "Multiple Sydney locations",
                amenities: "Furnished, utilities included, flexible leases",
                website: "sha.com.au"
            },
            {
                name: "Flatmates.com.au",
                type: "Shared Housing",
                price: "A$200-400/week",
                location: "Various suburbs",
                amenities: "Varies, local experience, flexible",
                website: "flatmates.com.au"
            }
        ]
    },
    berlin: {
        city: "Berlin, Germany",
        currency: "€",
        places: [
            {
                name: "The Fizz",
                type: "Student Residence",
                price: "€400-750/month",
                location: "Mitte, Charlottenburg",
                amenities: "Gym, lounge, study rooms, bike storage",
                website: "the-fizz.com"
            },
            {
                name: "Studentenwerk Berlin",
                type: "University Dorms",
                price: "€250-450/month",
                location: "Near all major universities",
                amenities: "Affordable, cafeterias, student community",
                website: "studentenwerk-berlin.de"
            },
            {
                name: "Wunderflats",
                type: "Furnished Apartments",
                price: "€500-900/month",
                location: "All districts",
                amenities: "Fully furnished, flexible, utilities included",
                website: "wunderflats.com"
            },
            {
                name: "WG-Gesucht",
                type: "Shared Apartments (WG)",
                price: "€300-600/month",
                location: "Throughout Berlin",
                amenities: "Authentic Berlin experience, varied options",
                website: "wg-gesucht.de"
            }
        ]
    },
    dublin: {
        city: "Dublin, Ireland",
        currency: "€",
        places: [
            {
                name: "Yugo Dublin",
                type: "Student Accommodation",
                price: "€200-350/week",
                location: "City Centre, near universities",
                amenities: "Study rooms, gym, cinema, social events",
                website: "yugo.com"
            },
            {
                name: "Uninest",
                type: "Premium Student Housing",
                price: "€230-400/week",
                location: "Grand Canal, Smithfield",
                amenities: "All-inclusive, modern facilities, 24/7 security",
                website: "uninest.com"
            },
            {
                name: "Binary Hub",
                type: "Student Residence",
                price: "€180-320/week",
                location: "Near Trinity & UCD",
                amenities: "Study spaces, social areas, bike storage",
                website: "binaryhub.com"
            },
            {
                name: "Daft.ie Student Housing",
                type: "Shared Housing",
                price: "€500-800/month",
                location: "Various Dublin areas",
                amenities: "Varies by property, local landlords",
                website: "daft.ie"
            }
        ]
    },
    rome: {
        city: "Rome, Italy",
        currency: "€",
        places: [
            {
                name: "Campus X",
                type: "Student Residence",
                price: "€450-750/month",
                location: "Trastevere, San Lorenzo",
                amenities: "Study rooms, gym, social events, WiFi",
                website: "campusx.it"
            },
            {
                name: "Camplus",
                type: "University Residence",
                price: "€400-650/month",
                location: "Multiple Rome locations",
                amenities: "Cafeteria, laundry, study areas, cultural activities",
                website: "camplus.it"
            },
            {
                name: "RomAntica",
                type: "Student Apartments",
                price: "€350-600/month",
                location: "Central Rome",
                amenities: "Furnished apartments, WiFi, flexible contracts",
                website: "romantica.com"
            },
            {
                name: "Stanze e Posti Letto Roma",
                type: "Shared Rooms",
                price: "€300-500/month",
                location: "Various neighborhoods",
                amenities: "Budget-friendly, local experience",
                website: "bakeca.it"
            }
        ]
    }
};

// Food and activities data for major study abroad cities
const foodActivitiesData = {
    london: {
        city: "London, UK",
        food: [
            { icon: "🛒", title: "Tesco, Sainsbury's, Lidl", desc: "Budget supermarkets across the city", tip: "Use Tesco Clubcard for discounts" },
            { icon: "🌾", title: "Borough Market", desc: "Famous food market near London Bridge", tip: "Go Thursdays for fewer crowds" },
            { icon: "🍕", title: "Deliveroo, Uber Eats", desc: "Fast food delivery with student codes", tip: "Join Deliveroo Plus for free delivery" },
            { icon: "🍜", title: "Brick Lane Food Scene", desc: "Cheap curry houses & street food", tip: "£5-8 meals, huge portions" },
            { icon: "🥗", title: "Pret A Manger", desc: "Fresh sandwiches & salads", tip: "Subscribe for 5 coffees/day at £30/month" },
            { icon: "🍺", title: "Wetherspoons Pubs", desc: "Cheap pub food & drinks", tip: "Student deals on certain days" }
        ],
        activities: [
            { icon: "🏛️", title: "Free Museums", desc: "British Museum, Natural History, V&A", tip: "All free entry, world-class collections" },
            { icon: "🚶‍♀️", title: "Free Walking Tours", desc: "Sandemans & Strawberry Tours", tip: "Tip-based, 2-3 hour tours" },
            { icon: "🎭", title: "West End Shows", desc: "TodayTix app for student rush tickets", tip: "£20-30 same-day tickets" },
            { icon: "🏃", title: "Hyde Park & Regent's Park", desc: "Free outdoor spaces", tip: "Perfect for running, picnics, studying" },
            { icon: "🎨", title: "Street Art Tours", desc: "Shoreditch & Camden graffiti", tip: "Self-guided or join free tours" },
            { icon: "🎵", title: "Live Music Venues", desc: "Roundhouse, O2 Academy", tip: "Student discount nights on Wednesdays" },
            { icon: "🌃", title: "Student Nights", desc: "Fabric, Ministry of Sound", tip: "£5-10 entry with student ID" },
            { icon: "✈️", title: "Day Trips", desc: "Oxford, Cambridge, Brighton by train", tip: "Use 16-25 Railcard for 1/3 off" }
        ]
    },
    paris: {
        city: "Paris, France",
        food: [
            { icon: "🛒", title: "Carrefour, Monoprix", desc: "Supermarkets throughout Paris", tip: "Cheaper than tourist cafés" },
            { icon: "🥖", title: "Local Boulangeries", desc: "Fresh baguettes daily", tip: "€1 baguettes, best breakfast deal" },
            { icon: "🍕", title: "Deliveroo, Uber Eats", desc: "Food delivery apps", tip: "Student promo codes available" },
            { icon: "🧀", title: "Marché Bastille", desc: "Open-air food market", tip: "Thursdays & Sundays, fresh produce" },
            { icon: "🍷", title: "Crous Restaurants", desc: "Student cafeterias", tip: "€3.30 full meals with student card" },
            { icon: "🥐", title: "Le Quartier Latin", desc: "Cheap student restaurants", tip: "3-course menus for €12-15" }
        ],
        activities: [
            { icon: "🎨", title: "Free Museum Days", desc: "First Sunday of each month", tip: "Louvre, Orsay, Rodin free entry" },
            { icon: "🚶‍♀️", title: "Seine River Walks", desc: "Free riverside strolls", tip: "Picnic with wine & baguette" },
            { icon: "🎬", title: "Cinema with Subtitles", desc: "Grand Action, Champo cinemas", tip: "€7 student tickets, classic films" },
            { icon: "🏰", title: "Versailles Day Trip", desc: "Palace & gardens", tip: "Gardens free, palace €12 students" },
            { icon: "🌳", title: "Luxembourg Gardens", desc: "Beautiful free park", tip: "Great for studying outdoors" },
            { icon: "🎭", title: "Comedy Shows", desc: "Comedy clubs in English", tip: "Free entry with 1 drink minimum" },
            { icon: "🌃", title: "Latin Quarter Nightlife", desc: "Student bars & clubs", tip: "Happy hour 6-9pm daily" },
            { icon: "✈️", title: "Blablacar", desc: "Rideshare to other cities", tip: "Cheaper than trains for groups" }
        ]
    },
    tokyo: {
        city: "Tokyo, Japan",
        food: [
            { icon: "🛒", title: "Family Mart, 7-Eleven", desc: "Convenience stores everywhere", tip: "Fresh onigiri & bento boxes" },
            { icon: "🍜", title: "Ramen Shops", desc: "Quick, cheap meals", tip: "¥600-900 for filling bowl" },
            { icon: "🍱", title: "Yoshinoya, Sukiya", desc: "Fast food chains", tip: "¥400 beef bowls, open 24/7" },
            { icon: "🐟", title: "Tsukiji Outer Market", desc: "Fresh seafood & street food", tip: "Go early morning for best selection" },
            { icon: "🍙", title: "Supermarket Evening Deals", desc: "50% off after 8pm", tip: "Perfect for budget meal prep" },
            { icon: "🍵", title: "Teishoku Set Meals", desc: "Lunch specials", tip: "¥800 complete meals with rice & soup" }
        ],
        activities: [
            { icon: "⛩️", title: "Temples & Shrines", desc: "Senso-ji, Meiji Shrine", tip: "Free entry, peaceful experiences" },
            { icon: "🚶‍♀️", title: "Free Walking Tours", desc: "Local volunteers show you Tokyo", tip: "Register online in advance" },
            { icon: "🎮", title: "Akihabara Gaming", desc: "Arcades & retro games", tip: "¥100 per play, endless fun" },
            { icon: "🌸", title: "Parks & Gardens", desc: "Yoyogi, Ueno, Shinjuku Gyoen", tip: "Shinjuku Gyoen ¥200 students" },
            { icon: "🎭", title: "Free Art Galleries", desc: "Mori Art Museum student nights", tip: "Free or discounted entry" },
            { icon: "🎤", title: "Karaoke", desc: "All-you-can-sing rooms", tip: "¥1000 for 2 hours off-peak" },
            { icon: "🌃", title: "Shibuya & Shinjuku", desc: "Nightlife districts", tip: "Nomihoudai (all-you-can-drink) deals" },
            { icon: "🚄", title: "Day Trips", desc: "Nikko, Kamakura, Mt. Fuji", tip: "JR Pass if staying 7+ days" }
        ]
    },
    barcelona: {
        city: "Barcelona, Spain",
        food: [
            { icon: "🛒", title: "Mercadona, Lidl", desc: "Budget-friendly supermarkets", tip: "Mercadona house brand is cheap" },
            { icon: "🥘", title: "La Boqueria Market", desc: "Famous food market on Las Ramblas", tip: "Fresh juice & tapas to go" },
            { icon: "🍕", title: "Glovo, Just Eat", desc: "Local food delivery", tip: "Student discounts available" },
            { icon: "🥖", title: "Menu del Día", desc: "Lunch specials everywhere", tip: "€10-12 for 3-course meal + drink" },
            { icon: "🍷", title: "Pintxos Bars", desc: "Cheap tapas in Gothic Quarter", tip: "€2-3 per pintxo, great for groups" },
            { icon: "🌮", title: "Beach Chiringuitos", desc: "Beachfront food stalls", tip: "Paella & sangria by the sea" }
        ],
        activities: [
            { icon: "🏖️", title: "Barceloneta Beach", desc: "Free beach access", tip: "Sunset is the best time to visit" },
            { icon: "🚶‍♀️", title: "Free Walking Tours", desc: "Gothic Quarter & Park Güell", tip: "Multiple tours daily, tip-based" },
            { icon: "🏛️", title: "Free Museum Sundays", desc: "After 3pm first Sunday/month", tip: "Picasso Museum, MACBA free" },
            { icon: "⚽", title: "Camp Nou Tours", desc: "FC Barcelona stadium", tip: "€26 students, book online" },
            { icon: "🌳", title: "Park Güell", desc: "Gaudí's famous park", tip: "Free to walk around, €10 monuments" },
            { icon: "🎵", title: "Live Music Venues", desc: "Razzmatazz, Apolo", tip: "Student nights on Thursdays" },
            { icon: "🌃", title: "El Raval Nightlife", desc: "Cheap bars & clubs", tip: "Pre-game at €1 beer bars" },
            { icon: "✈️", title: "Weekend Trips", desc: "Valencia, Costa Brava, Montserrat", tip: "Blablacar or Alsa buses" }
        ]
    },
    sydney: {
        city: "Sydney, Australia",
        food: [
            { icon: "🛒", title: "Coles, Woolworths, Aldi", desc: "Main supermarket chains", tip: "Aldi is cheapest option" },
            { icon: "🌾", title: "Paddy's Markets", desc: "Fresh produce market", tip: "Saturdays for best deals" },
            { icon: "🍕", title: "Uber Eats, Menulog", desc: "Food delivery apps", tip: "Look for promo codes online" },
            { icon: "🍜", title: "Asian Food Courts", desc: "Chinatown, Haymarket", tip: "A$8-12 meals, huge portions" },
            { icon: "☕", title: "Café Culture", desc: "Surry Hills coffee shops", tip: "Free wifi for studying" },
            { icon: "🍔", title: "Grill'd, Oporto", desc: "Aussie fast food chains", tip: "Better quality than McDonald's" }
        ],
        activities: [
            { icon: "🏖️", title: "Bondi to Coogee Walk", desc: "Coastal cliff walk", tip: "Free, stunning views, 2 hours" },
            { icon: "🚶‍♀️", title: "Free Walking Tours", desc: "Rocks district tours", tip: "Daily at 10:30am & 2:30pm" },
            { icon: "🎭", title: "Opera House", desc: "Student rush tickets", tip: "A$40-60 for shows, arrive early" },
            { icon: "🌳", title: "Royal Botanic Gardens", desc: "Free waterfront gardens", tip: "Perfect for picnics with harbour views" },
            { icon: "🎨", title: "Art Gallery NSW", desc: "Free entry to main collection", tip: "Special exhibits extra charge" },
            { icon: "🏄‍♀️", title: "Surf Lessons", desc: "Bondi, Manly beaches", tip: "A$60 group lessons for beginners" },
            { icon: "🌃", title: "Kings Cross Nightlife", desc: "Bars & clubs", tip: "Student nights on Wednesdays" },
            { icon: "✈️", title: "Blue Mountains", desc: "Day trip from Sydney", tip: "Train A$10 return with student card" }
        ]
    },
    berlin: {
        city: "Berlin, Germany",
        food: [
            { icon: "🛒", title: "Aldi, Lidl, Netto", desc: "Very cheap supermarkets", tip: "Cheapest groceries in Europe" },
            { icon: "🌭", title: "Curry 36", desc: "Famous currywurst stand", tip: "€3 Berlin street food classic" },
            { icon: "🍕", title: "Lieferando, Wolt", desc: "Food delivery apps", tip: "Many restaurants on platform" },
            { icon: "🥙", title: "Döner Kebab", desc: "Berlin's go-to cheap meal", tip: "€4-5, filling and delicious" },
            { icon: "🍺", title: "Spätkauf", desc: "Late-night convenience stores", tip: "Cheap beer & snacks 24/7" },
            { icon: "🥨", title: "Student Mensas", desc: "University cafeterias", tip: "€2-4 meals with student ID" }
        ],
        activities: [
            { icon: "🏛️", title: "Museum Island", desc: "UNESCO World Heritage site", tip: "€18 day pass, 5 museums" },
            { icon: "🚶‍♀️", title: "Free Walking Tours", desc: "Brandenburg Gate, East Side Gallery", tip: "Multiple companies, tip-based" },
            { icon: "🎨", title: "East Side Gallery", desc: "Berlin Wall street art", tip: "Free, 1.3km of murals" },
            { icon: "🌳", title: "Tiergarten Park", desc: "Huge city park", tip: "Free, great for running/biking" },
            { icon: "🎭", title: "Underground Culture", desc: "Abandoned places, street art", tip: "Join guided graffiti tours" },
            { icon: "🎵", title: "Techno Clubs", desc: "Berghain, Watergate, Tresor", tip: "€15-20 entry, world-famous DJs" },
            { icon: "🌃", title: "Friedrichshain Nightlife", desc: "Student bars & clubs", tip: "Cheap drinks, lively atmosphere" },
            { icon: "✈️", title: "Poland Day Trips", desc: "Kraków, Wrocław by bus", tip: "€20 return tickets on FlixBus" }
        ]
    },
    dublin: {
        city: "Dublin, Ireland",
        food: [
            { icon: "🛒", title: "Tesco, Dunnes, Lidl", desc: "Main supermarket chains", tip: "Lidl cheapest for students" },
            { icon: "🌾", title: "Temple Bar Food Market", desc: "Saturday market", tip: "Fresh food & street vendors" },
            { icon: "🍕", title: "Deliveroo, Just Eat", desc: "Food delivery", tip: "Student discount codes" },
            { icon: "🍔", title: "Supermac's", desc: "Irish fast food chain", tip: "Cheaper than McDonald's" },
            { icon: "☕", title: "3FE Coffee", desc: "Best coffee in Dublin", tip: "Student discount with ID" },
            { icon: "🍺", title: "Pub Grub", desc: "Traditional Irish food", tip: "€10-15 meals at local pubs" }
        ],
        activities: [
            { icon: "🏰", title: "Trinity College", desc: "Book of Kells & campus", tip: "€14 students, beautiful library" },
            { icon: "🚶‍♀️", title: "Free Walking Tours", desc: "Dublin city center tours", tip: "Daily departures, tip-based" },
            { icon: "🎭", title: "Temple Bar District", desc: "Live music & culture", tip: "Pricey drinks but great atmosphere" },
            { icon: "🌳", title: "Phoenix Park", desc: "One of Europe's largest parks", tip: "Free, see wild deer" },
            { icon: "🍺", title: "Guinness Storehouse", desc: "Beer museum & tasting", tip: "€18.50 students, rooftop views" },
            { icon: "🎵", title: "Live Music Pubs", desc: "The Cobblestone, O'Donoghue's", tip: "Free traditional Irish music nightly" },
            { icon: "🌃", title: "Harcourt Street", desc: "Student nightlife hub", tip: "Coppers nightclub, very popular" },
            { icon: "✈️", title: "Cliffs of Moher", desc: "Day trip from Dublin", tip: "€60 tour, breathtaking views" }
        ]
    },
    rome: {
        city: "Rome, Italy",
        food: [
            { icon: "🛒", title: "Conad, Carrefour, Lidl", desc: "Supermarket chains", tip: "Conad City for quick shops" },
            { icon: "🍕", title: "Pizza al Taglio", desc: "Pizza by the slice", tip: "€3-5 for huge portions" },
            { icon: "🍝", title: "Trattorias", desc: "Family-run restaurants", tip: "€10-12 pasta dishes, authentic" },
            { icon: "🥖", title: "Campo de' Fiori Market", desc: "Daily food market", tip: "Fresh produce, avoid tourist traps nearby" },
            { icon: "🍦", title: "Gelato", desc: "Real Italian gelato", tip: "€2-3 for cone, avoid €6 tourist spots" },
            { icon: "☕", title: "Espresso Culture", desc: "Stand at the bar for cheaper coffee", tip: "€1 espresso standing, €3-4 sitting" }
        ],
        activities: [
            { icon: "🏛️", title: "Free Museum Days", desc: "First Sunday of each month", tip: "Colosseum, Roman Forum free" },
            { icon: "🚶‍♀️", title: "Free Walking Tours", desc: "Ancient Rome, Trastevere", tip: "Multiple daily tours, tip-based" },
            { icon: "⛲", title: "Trevi Fountain", desc: "Famous fountain", tip: "Free, go early morning for photos" },
            { icon: "🌳", title: "Villa Borghese", desc: "Beautiful park & gardens", tip: "Free park, €13 students for gallery" },
            { icon: "🎨", title: "Vatican Museums", desc: "World-class art collection", tip: "€8 students, free last Sunday/month" },
            { icon: "🎭", title: "Opera at Baths of Caracalla", desc: "Outdoor summer opera", tip: "€25 students, magical setting" },
            { icon: "🌃", title: "Trastevere Nightlife", desc: "Student bars & clubs", tip: "Aperitivo hour 6-9pm, buffet with drink" },
            { icon: "✈️", title: "Florence Day Trip", desc: "High-speed train", tip: "€20-30 advance tickets, 90 minutes" }
        ]
    }
};