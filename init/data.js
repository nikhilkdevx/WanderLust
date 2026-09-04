const sampleListings = [

  // ==================== TRENDING ====================

  {
    title: "Luxury Beach Villa in Goa",
    description:
      "Relax in a stylish beach villa near Goa's famous coastline, surrounded by palm trees, cafés, and vibrant nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    },
    price: 5500,
    location: "Goa",
    country: "India",
    category: "Trending",
  },

  {
    title: "Santorini Sunset Villa",
    description:
      "Enjoy breathtaking sunsets over the Aegean Sea from a beautiful whitewashed villa in Santorini.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    },
    price: 7200,
    location: "Santorini",
    country: "Greece",
    category: "Trending",
  },

  {
    title: "Luxury Escape in the Maldives",
    description:
      "Stay surrounded by turquoise water and pristine beaches in a luxurious tropical retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    },
    price: 9500,
    location: "Maldives",
    country: "Maldives",
    category: "Trending",
  },

  // ==================== ROOMS ====================

  {
    title: "Cozy Room in Central London",
    description:
      "A comfortable private room in central London with easy access to cafés, shopping streets, and major landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    },
    price: 3200,
    location: "London",
    country: "United Kingdom",
    category: "Rooms",
  },

  {
    title: "Modern Room in Manhattan",
    description:
      "Stay in a modern and comfortable room close to Manhattan's restaurants, attractions, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    },
    price: 4800,
    location: "New York City",
    country: "United States",
    category: "Rooms",
  },

  {
    title: "Minimalist Room in Tokyo",
    description:
      "A peaceful minimalist room ideal for exploring Tokyo's exciting neighborhoods and cultural attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    },
    price: 3600,
    location: "Tokyo",
    country: "Japan",
    category: "Rooms",
  },

  // ==================== ICONIC CITIES ====================

  {
    title: "Paris Apartment Near Eiffel Tower",
    description:
      "Experience Paris from a charming apartment located close to cafés, historic streets, and the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    price: 6200,
    location: "Paris",
    country: "France",
    category: "Iconic Cities",
  },

  {
    title: "Skyline Apartment in New York",
    description:
      "Enjoy impressive city views from a stylish apartment in the heart of New York City.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=80",
    },
    price: 7600,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
  },

  {
    title: "Modern Stay in Dubai",
    description:
      "A luxurious city stay surrounded by Dubai's modern skyline, shopping destinations, and world-class attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
    price: 7000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Iconic Cities",
  },

  // ==================== MOUNTAINS ====================

  {
    title: "Mountain Retreat in Manali",
    description:
      "Wake up to Himalayan mountain views from a peaceful retreat surrounded by forests and fresh mountain air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    },
    price: 3500,
    location: "Manali",
    country: "India",
    category: "Mountains",
  },

  {
    title: "Mountain Cabin in Banff",
    description:
      "A cozy mountain retreat surrounded by the spectacular peaks and lakes of Banff National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    price: 5200,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },

  {
    title: "Ski Chalet in Aspen",
    description:
      "Stay close to Aspen's famous ski slopes in a warm chalet surrounded by beautiful mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
    },
    price: 6800,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },

  // ==================== CASTLES ====================

  {
    title: "Historic Castle in Scotland",
    description:
      "Experience centuries of history in a dramatic Scottish castle surrounded by rolling countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=800&q=80",
    },
    price: 8500,
    location: "Edinburgh",
    country: "Scotland",
    category: "Castles",
  },

  {
    title: "Romantic Castle Stay in France",
    description:
      "Stay inside an elegant French château surrounded by gardens, vineyards, and peaceful countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=800&q=80",
    },
    price: 8200,
    location: "Loire Valley",
    country: "France",
    category: "Castles",
  },

  {
    title: "Royal Castle Stay in Jaipur",
    description:
      "Experience Rajasthan's royal heritage from a palace-inspired property surrounded by Jaipur's historic architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    },
    price: 6500,
    location: "Jaipur",
    country: "India",
    category: "Castles",
  },

  // ==================== AMAZING POOLS ====================

  {
    title: "Infinity Pool Villa in Bali",
    description:
      "Relax in a tropical Bali villa featuring a private infinity pool overlooking lush green surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    },
    price: 5800,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools",
  },

  {
    title: "Luxury Pool Resort in Phuket",
    description:
      "Enjoy tropical weather, a beautiful resort pool, and easy access to Phuket's famous beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    },
    price: 6200,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
  },

  {
    title: "Private Pool Villa in Dubai",
    description:
      "A premium Dubai villa featuring a private swimming pool and luxurious modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=80",
    },
    price: 9000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Amazing Pools",
  },

  // ==================== CAMPING ====================

  {
    title: "Forest Camp in Rishikesh",
    description:
      "Stay close to nature in a peaceful campsite surrounded by forest and Himalayan landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
  },

  {
    title: "Mountain Camping in Yosemite",
    description:
      "Camp beneath towering mountains and forests while exploring the natural beauty of Yosemite.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    },
    price: 2200,
    location: "Yosemite",
    country: "United States",
    category: "Camping",
  },

  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Spend an unforgettable night beneath the stars surrounded by the golden dunes of Rajasthan.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
    },
    price: 2600,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
  },

  // ==================== FARMS ====================

  {
    title: "Peaceful Farm Stay in Tuscany",
    description:
      "Relax among vineyards, rolling hills, and rustic countryside at a peaceful Tuscan farm stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    },
    price: 4000,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
  },

  {
    title: "Countryside Farmhouse in Punjab",
    description:
      "Experience peaceful rural life in a spacious farmhouse surrounded by green agricultural fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    },
    price: 2800,
    location: "Punjab",
    country: "India",
    category: "Farms",
  },

  {
    title: "Green Farm Retreat in New Zealand",
    description:
      "Escape into the countryside with wide green landscapes, fresh air, and a quiet farm environment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    },
    price: 4300,
    location: "Queenstown",
    country: "New Zealand",
    category: "Farms",
  },

  // ==================== BEACHES ====================

  {
    title: "Beachfront Cottage in Malibu",
    description:
      "A relaxing beachfront cottage with beautiful ocean views and quick access to Malibu's coastline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    price: 5000,
    location: "Malibu",
    country: "United States",
    category: "Beaches",
  },

  {
    title: "Tropical Beach House in Bali",
    description:
      "Stay close to Bali's tropical coastline in a peaceful beach house surrounded by palm trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    },
    price: 5200,
    location: "Bali",
    country: "Indonesia",
    category: "Beaches",
  },

  {
    title: "Seaside Retreat in Goa",
    description:
      "Enjoy warm sunsets, sandy beaches, cafés, and the laid-back atmosphere of Goa from this seaside stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
    },
    price: 4200,
    location: "Goa",
    country: "India",
    category: "Beaches",
  },

  // ==================== ARCTIC ====================

  {
    title: "Glass Cabin in Iceland",
    description:
      "Stay surrounded by snowy Icelandic landscapes with a chance to experience the northern lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=800&q=80",
    },
    price: 7200,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctic",
  },

  {
    title: "Northern Lights Cabin in Norway",
    description:
      "A remote Scandinavian cabin ideal for snowy adventures and unforgettable northern-light views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=80",
    },
    price: 6800,
    location: "Tromso",
    country: "Norway",
    category: "Arctic",
  },

  {
    title: "Snow Lodge in Finnish Lapland",
    description:
      "Experience pristine snow-covered wilderness and cozy winter nights in Finnish Lapland.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80",
    },
    price: 7500,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",
  },

  // ==================== HOTELS ====================

  {
    title: "Luxury Hotel in Mumbai",
    description:
      "Stay in a premium hotel close to Mumbai's famous attractions, shopping areas, and vibrant city life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
    price: 6500,
    location: "Mumbai",
    country: "India",
    category: "Hotels",
  },

  {
    title: "Five Star Hotel in Singapore",
    description:
      "A modern luxury hotel offering comfortable rooms and quick access to Singapore's major attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    },
    price: 7000,
    location: "Singapore",
    country: "Singapore",
    category: "Hotels",
  },

  {
    title: "Luxury Resort Hotel in Bangkok",
    description:
      "Enjoy an elegant hotel stay featuring modern rooms, premium facilities, and convenient city access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    },
    price: 5600,
    location: "Bangkok",
    country: "Thailand",
    category: "Hotels",
  },
  // ==================== ADDITIONAL LISTINGS ====================

{
    title: "Heritage Haveli in Udaipur",
    description:
        "Stay in a beautifully restored heritage haveli surrounded by lakes, historic architecture, and the royal charm of Rajasthan.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80",
    },
    price: 4200,
    location: "Udaipur",
    country: "India",
    category: "Trending",
},

{
    title: "Clifftop Retreat in Amalfi",
    description:
        "Enjoy spectacular Mediterranean views from a peaceful clifftop retreat along Italy's famous Amalfi Coast.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=80",
    },
    price: 7800,
    location: "Amalfi",
    country: "Italy",
    category: "Trending",
},

{
    title: "Private Room in Amsterdam",
    description:
        "A warm and comfortable private room located near Amsterdam's canals, museums, and lively city center.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    },
    price: 3400,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Rooms",
},

{
    title: "Cozy Room in Seoul",
    description:
        "A modern compact room in Seoul, perfect for travelers wanting to explore markets, cafés, and Korean culture.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    },
    price: 2900,
    location: "Seoul",
    country: "South Korea",
    category: "Rooms",
},

{
    title: "Canal House in Venice",
    description:
        "Stay in a charming Venetian home close to historic canals, beautiful bridges, and iconic Italian architecture.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    },
    price: 6100,
    location: "Venice",
    country: "Italy",
    category: "Iconic Cities",
},

{
    title: "Historic Stay in Rome",
    description:
        "Explore ancient landmarks and lively Italian streets from this comfortable stay in the heart of Rome.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=80",
    },
    price: 5600,
    location: "Rome",
    country: "Italy",
    category: "Iconic Cities",
},

{
    title: "Himalayan Cabin in Shimla",
    description:
        "A peaceful wooden cabin overlooking the Himalayan hills, perfect for a relaxing mountain getaway.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    },
    price: 3200,
    location: "Shimla",
    country: "India",
    category: "Mountains",
},

{
    title: "Alpine Chalet in Zermatt",
    description:
        "Stay in a traditional alpine chalet surrounded by dramatic Swiss peaks and scenic hiking trails.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=80",
    },
    price: 7400,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains",
},

{
    title: "Medieval Castle in Bavaria",
    description:
        "Experience old-world European charm in a historic castle surrounded by forests and peaceful countryside.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    },
    price: 8200,
    location: "Bavaria",
    country: "Germany",
    category: "Castles",
},

{
    title: "Castle Estate in Ireland",
    description:
        "Spend your vacation in a grand Irish castle estate surrounded by green fields and beautiful countryside.",
    image: {
        filename: "listingimage",
        url: "https://weddingdates.ie/blog/wp-content/uploads/2023/05/Killeen-Castle-HR-520-resize.jpg",
    },
    price: 7900,
    location: "County Meath",
    country: "Ireland",
    category: "Castles",
},

{
    title: "Infinity Pool Retreat in Mykonos",
    description:
        "Relax beside a stunning infinity pool while enjoying panoramic views of the Aegean Sea and Mykonos coastline.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80",
    },
    price: 8300,
    location: "Mykonos",
    country: "Greece",
    category: "Amazing Pools",
},

{
    title: "Jungle Pool Villa in Costa Rica",
    description:
        "Escape into the rainforest with a private pool villa surrounded by tropical greenery and exotic wildlife.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=80",
    },
    price: 5900,
    location: "Guanacaste",
    country: "Costa Rica",
    category: "Amazing Pools",
},

{
    title: "Lakeside Camping in Himachal",
    description:
        "Camp beside a peaceful mountain lake with fresh air, scenic views, and unforgettable evenings under the stars.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=800&q=80",
    },
    price: 1700,
    location: "Kasol",
    country: "India",
    category: "Camping",
},

{
    title: "Wild Camping in Montana",
    description:
        "Enjoy a true wilderness experience surrounded by forests, mountains, and open skies in Montana.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=80",
    },
    price: 2100,
    location: "Montana",
    country: "United States",
    category: "Camping",
},

{
    title: "Vineyard Farmhouse in Napa",
    description:
        "Relax among vineyards and rolling hills in a charming farmhouse located in California's famous wine country.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    },
    price: 4600,
    location: "Napa Valley",
    country: "United States",
    category: "Farms",
},

{
    title: "Rustic Farm Stay in Kerala",
    description:
        "Experience peaceful countryside living surrounded by tropical greenery, plantations, and traditional Kerala landscapes.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80",
    },
    price: 2400,
    location: "Wayanad",
    country: "India",
    category: "Farms",
},

{
    title: "Oceanfront Villa in Maui",
    description:
        "Wake up beside the Pacific Ocean in a beautiful Hawaiian villa with direct access to a sandy beach.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=800&q=80",
    },
    price: 6800,
    location: "Maui",
    country: "United States",
    category: "Beaches",
},

{
    title: "Secluded Beach House in Seychelles",
    description:
        "Enjoy crystal-clear water and peaceful tropical surroundings from this secluded island beach house.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80",
    },
    price: 7600,
    location: "Mahé",
    country: "Seychelles",
    category: "Beaches",
},

{
    title: "Arctic Glass Lodge in Sweden",
    description:
        "Stay beneath the northern sky in a cozy glass lodge surrounded by snowy Scandinavian wilderness.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80",
    },
    price: 7100,
    location: "Kiruna",
    country: "Sweden",
    category: "Arctic",
},

{
    title: "Winter Cabin in Alaska",
    description:
        "A secluded winter cabin surrounded by snowy forests and dramatic Alaskan wilderness.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=800&q=80",
    },
    price: 6300,
    location: "Fairbanks",
    country: "United States",
    category: "Arctic",
},

{
    title: "Luxury Hotel in Istanbul",
    description:
        "Stay in a stylish hotel surrounded by Istanbul's historic landmarks, markets, restaurants, and waterfront views.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
    },
    price: 4800,
    location: "Istanbul",
    country: "Turkey",
    category: "Hotels",
},

{
    title: "Boutique Hotel in Barcelona",
    description:
        "A modern boutique hotel close to Barcelona's architecture, beaches, restaurants, and lively city streets.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    },
    price: 5200,
    location: "Barcelona",
    country: "Spain",
    category: "Hotels",
},

];

module.exports = { data: sampleListings };