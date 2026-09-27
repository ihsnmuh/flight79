export const contact = {
  phoneDisplay: "+62 851-2130-6972",
  phoneHref: "tel:+6285121306972",
  email: "info@flight79.com",
  address: "Ruko Sasakirana 79, Kota Baru Parahyangan",
  openingHours: "Mon - Sun 08.00 - 21.00",
  parking: "Free parking",
  mapsUrl: "https://maps.app.goo.gl/jz6UKrGxTk31CAoE7",
  menuUrl:
    "https://drive.google.com/file/d/1n2gVQrpwr0Q3eWKB6p2HI_khHOABcnaI/view?usp=drive_link",
  whatsappUrl:
    "https://wa.me/6285121306972?text=Halo%20Flight%2079%2C%20saya%20ingin%20reservasi%20meja.",
};

export const social = {
  handle: "@flightseventyniner",
  instagramUrl: "https://www.instagram.com/flightseventyniner/",
  tiktokUrl: "https://www.tiktok.com/@flightseventyniner",
};

export const menuItems = [
  {
    name: "Butter Croissant",
    categoryId: "breakfast",
    description:
      "Croissant klasik dengan lapisan renyah di luar dan bagian dalam yang lembut.",
    price: "18",
  },
  {
    name: "Signature Salad 79",
    categoryId: "breakfast",
    description:
      "Campuran sayuran hijau renyah dengan dressing soy vinaigrette.",
    price: "39",
  },
  {
    name: "Pre-Flight Omelete",
    categoryId: "breakfast",
    description: "Omelet telur lembut untuk membuka hari sejak suapan pertama.",
    price: "38",
  },
  {
    name: "English Breakfast 79er - Bread",
    categoryId: "breakfast",
    description:
      "Telur sunny side up, roti gandum, daging asap, jamur, dan salad segar.",
    price: "55",
  },
  {
    name: "The Cabin Crew's Croissant",
    categoryId: "breakfast",
    description:
      "Croissant mentega dengan telur mata sapi, keripik kentang, dan salad segar.",
    price: "58",
  },
  {
    name: "Nasi Goreng 79",
    categoryId: "mains",
    description:
      "Nasi goreng khas Flight 79 dengan ayam goreng, sate lilit, dan telur mata sapi.",
    price: "58.5",
  },
  {
    name: "Cruising Iga Bakar Konro",
    categoryId: "mains",
    description:
      "Iga bakar lembut dengan sambal hijau yang segar dan aromatik.",
    price: "90",
  },
  {
    name: "Chicken Katsu 79er",
    categoryId: "mains",
    description: "Fillet ayam berbalut tepung roti panko dengan sambal matah.",
    price: "49",
  },
  {
    name: "Spaghetti Carbonara",
    categoryId: "mains",
    description:
      "Spaghetti dengan saus krim lembut dan smoked beef yang gurih.",
    price: "45",
  },
  {
    name: "Meat Lovers",
    categoryId: "mains",
    description: "Pilihan aneka daging dengan keju leleh di setiap potongan.",
    price: "100",
  },
  {
    name: "Berry Take-Off",
    categoryId: "refreshers",
    description: "Strawberry-blueberry segar dengan Yakult dan es krim.",
    price: "40",
  },
  {
    name: "Classic Ice Chocolate",
    categoryId: "refreshers",
    description: "Es cokelat dan susu beraroma vanilla dengan whipped cream.",
    price: "35",
  },
  {
    name: "Mango Mojito",
    categoryId: "refreshers",
    description: "Kesegaran soda dan mint berpadu dengan manisnya mangga.",
    price: "40",
  },
  {
    name: "Morning Glory",
    categoryId: "refreshers",
    description:
      "Green tea, lavender, chamomile, dried lemon, dan butterfly pea.",
    price: "25",
  },
  {
    name: "Strawberry Smoothies",
    categoryId: "refreshers",
    description:
      "Smooth blend stroberi dan pisang dengan buah segar serta granola.",
    price: "49",
  },
  {
    name: "Espresso",
    categoryId: "coffee",
    description: "Ekstraksi kopi pekat untuk rasa yang langsung dan fokus.",
    price: "20",
  },
  {
    name: "Americano",
    categoryId: "coffee",
    description: "Espresso dengan tambahan air untuk karakter yang lebih ringan.",
    price: "23",
  },
  {
    name: "Cappuccino",
    categoryId: "coffee",
    description: "Espresso dan susu dengan foam lembut, tersedia hot atau ice.",
    price: "32",
  },
  {
    name: "Café Latte",
    categoryId: "coffee",
    description: "Espresso berpadu dengan susu, tersedia hot atau ice.",
    price: "32",
  },
  {
    name: "Iced Coffee 79",
    categoryId: "coffee",
    description: "Signature iced coffee dari Flight 79.",
    price: "38",
  },
  {
    name: "Panna Cotta",
    categoryId: "dessert",
    description: "Puding sutra Italia berbahan dasar krim dan vanilla.",
    price: "37",
  },
  {
    name: "Creme Brulee",
    categoryId: "dessert",
    description: "Custard vanilla lembut dengan lapisan gula karamel renyah.",
    price: "38",
  },
  {
    name: "Choco Lava",
    categoryId: "dessert",
    description: "Lelehan cokelat premium hangat dalam balutan kue lembut.",
    price: "37.5",
  },
  {
    name: "Affogato",
    categoryId: "dessert",
    description: "Es krim vanilla premium dengan satu shot espresso panas.",
    price: "25",
  },
  {
    name: "Matchagato",
    categoryId: "dessert",
    description: "Es krim vanilla dengan siraman pure whisked matcha.",
    price: "30",
  },
] as const;

export const menuCategories = [
  {
    id: "breakfast",
    number: "01",
    label: "Breakfast & Light",
    description: "Pilihan ringan untuk membuka hari atau menemani kopi.",
    image: {
      src: "/menus/menu-pastery.jpeg",
      alt: "Banyak pilihan pastry dan croissant sebagai inspirasi kategori breakfast Flight 79",
      position: "12% 70%",
    },
  },
  {
    id: "mains",
    number: "02",
    label: "Main Course",
    description: "Hidangan utama yang familiar dengan karakter Flight 79.",
    image: {
      src: "/menus/menu-sopbuntut.jpg",
      alt: "Sop buntut dengan potongan daging empuk dan kuah kaldu yang kaya rasa sebagai inspirasi kategori main course Flight 79",
      position: "66% 52%",
    },
  },
  {
    id: "refreshers",
    number: "03",
    label: "Refreshers",
    description: "Pilihan segar untuk menemani perjalanan rasa.",
    image: {
      src: "/menus/menu-berrytakeoff.jpg",
      alt: "Berry Take-Off dengan whipped cream dan buah beri sebagai inspirasi sweet landing",
      position: "94% 44%",
    },
  },
  {
    id: "coffee",
    number: "04",
    label: "Coffee",
    description: "Espresso classics dan signature coffee untuk menemani setiap waktu.",
    image: {
      src: "/menus/menu-coffee.jpg",
      alt: "Mesin espresso Flight 79 dengan secangkir kopi yang baru diseduh",
      position: "50% 50%",
    },
  },
  {
    id: "dessert",
    number: "05",
    label: "Dessert",
    description: "Sweet landing untuk menutup waktu bersama.",
    image: {
      src: "/menus/menu-dessert.jpeg",
      alt: "Lelehan cokelat premium hangat dalam balutan kue lembut. Dilengkapi dengan topping premium untuk pengalaman pencuci mulut yang tak terlupakan.",
      position: "50% 52%",
    },
  },
] as const;

export const menuEnglish = {
  categoryDescriptions: {
    breakfast: "Light choices to start the day or pair with your coffee.",
    mains: "Familiar main dishes with Flight 79 character.",
    refreshers: "Refreshing selections to accompany your flavor journey.",
    coffee: "Espresso classics and signature coffee for any time of day.",
    dessert: "A sweet landing to complete your time together.",
  },
  itemDescriptions: {
    "Butter Croissant": "A classic croissant with a crisp exterior and soft, layered center.",
    "Signature Salad 79": "Crisp mixed greens served with soy vinaigrette dressing.",
    "Pre-Flight Omelete": "A soft omelet to fuel your day from the first bite.",
    "English Breakfast 79er - Bread": "Sunny-side-up eggs, whole-wheat bread, smoked beef, mushrooms, and fresh salad.",
    "The Cabin Crew's Croissant": "A buttery croissant with fried egg, potato chips, and fresh salad.",
    "Nasi Goreng 79": "Flight 79 fried rice with fried chicken, satay lilit, and a sunny-side-up egg.",
    "Cruising Iga Bakar Konro": "Tender grilled ribs served with fresh, aromatic green sambal.",
    "Chicken Katsu 79er": "Panko-crusted chicken fillet served with sambal matah.",
    "Spaghetti Carbonara": "Spaghetti in a creamy sauce with savory smoked beef.",
    "Meat Lovers": "A selection of meats with melted cheese in every slice.",
    "Berry Take-Off": "Fresh strawberry and blueberry blended with Yakult and ice cream.",
    "Classic Ice Chocolate": "Iced chocolate and vanilla-scented milk topped with whipped cream.",
    "Mango Mojito": "Refreshing soda and mint balanced with sweet mango.",
    "Morning Glory": "Green tea, lavender, chamomile, dried lemon, and butterfly pea.",
    "Strawberry Smoothies": "A smooth strawberry-banana blend with fresh fruit and granola.",
    Espresso: "A concentrated coffee extraction with a direct, focused flavor.",
    Americano: "Espresso with added water for a lighter character.",
    Cappuccino: "Espresso and milk with soft foam, available hot or iced.",
    "Café Latte": "Espresso blended with milk, available hot or iced.",
    "Iced Coffee 79": "Flight 79's signature iced coffee.",
    "Panna Cotta": "Silky Italian cream and vanilla pudding.",
    "Creme Brulee": "Soft vanilla custard beneath a crisp caramelized sugar crust.",
    "Choco Lava": "Warm premium molten chocolate wrapped in a soft cake.",
    Affogato: "Premium vanilla ice cream served with a hot shot of espresso.",
    Matchagato: "Vanilla ice cream finished with pure whisked matcha.",
  },
} as const;

export const experienceFeatures = [
  {
    number: "01",
    title: "Aviation Atmosphere",
    copy: "Detail runway, flight labels, dan nuansa lounge hadir subtil—unik untuk dinikmati, tetap hangat untuk ditinggali.",
  },
  {
    number: "02",
    title: "All-Day Choices",
    copy: "Dari croissant dan specialty coffee sampai pizza, pasta, hidangan Indonesia, steak, dessert, dan refresher.",
  },
  {
    number: "03",
    title: "Made for Together",
    copy: "Nyaman untuk breakfast, meeting, family time, perayaan, atau sekadar mengobrol panjang bersama teman.",
  },
] as const;

export const galleryItems = [
  {
    src: "/flight79-first.jpg",
    alt: "Area duduk Flight 79 dengan mural peta dunia dan deretan lampu gantung",
    className: "md:col-span-7 md:row-span-2",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    src: "/flight79-coffee-machine.jpg",
    alt: "Mesin espresso Flight 79 dengan secangkir kopi yang baru diseduh",
    className: "!min-h-[24rem] md:col-span-5 md:row-span-2 md:!min-h-0",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    src: "/flight79-third.jpg",
    alt: "Area makan Flight 79 dengan tanaman rambat dan pencahayaan alami",
    className: "md:col-span-8 md:row-span-2",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 66vw, 100vw",
  },
  {
    src: "/flight79-second-plane.jpg",
    alt: "Koleksi miniatur pesawat yang memperkuat tema aviasi Flight 79",
    className: "md:col-span-4",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 34vw, 100vw",
  },
  {
    src: "/flight79-second-logo.jpg",
    alt: "Logo Flight 79 dengan iluminasi hangat pada dinding interior",
    className: "hidden md:col-span-4 md:block",
    imageClassName: "object-center",
    sizes: "(min-width: 768px) 34vw, 100vw",
  },
] as const;

export const reviews = [
  {
    author: "nabella puspita",
    initials: "NP",
    rating: 5,
    date: "Sebulan lalu",
    text: "Makannya enak banget, pelayanannya okee dan selalu kasih rekomendasi menu-menu favorit. Aku pesan Spaghetti A la Thai, Lychee Mojito, Chicken Steak, dan Hot Latte.",
  },
  {
    author: "Zulfani Riyadh Juliansyah",
    initials: "ZR",
    rating: 5,
    date: "Sebulan lalu",
    text: "Makanannya enak, pelayanan oke, ambience-nya top seperti di dalam pesawat. Bakal balik lagi deh.",
  },
  {
    author: "luthfi lisan shidqi",
    initials: "LS",
    rating: 5,
    date: "2 bulan lalu",
    text: "Baru pertama kali ke sini, ternyata tempatnya hidden gem tapi mudah diakses. Tempatnya nyaman, Nasgor 79-nya enak, kopi 79-nya creamy, dan pelayanannya ramah.",
  },
  {
    author: "Rosa Adjiong",
    initials: "RA",
    rating: 5,
    date: "Sebulan lalu",
    text: "Makan dengan kakak-kakak dan anak. Makanannya enak—nasi, sup, pizza, dan lainnya—suasananya enak, pelayanannya juga ramah.",
  },
] as const;

export const events = [
  "Birthday celebrations",
  "Family gatherings",
  "Corporate meetings",
  "Community gatherings",
  "Aviation enthusiast meetups",
] as const;

export const eventSlides = [
  {
    src: "/events/birthday-event.jpg",
    alt: "Perayaan ulang tahun anak bersama keluarga dan teman di Flight 79",
    eyebrow: "Private celebrations",
    title: "Ulang tahun & momen spesial",
  },
  {
    src: "/flight79-third.jpg",
    alt: "Area makan Flight 79 dengan tanaman hijau dan pencahayaan alami",
    eyebrow: "Together at the table",
    title: "Family & community gatherings",
  },
  {
    src: "/flight79-second-view.jpg",
    alt: "Area duduk Flight 79 dengan suasana industrial yang hangat",
    eyebrow: "Meet with character",
    title: "Meeting & acara komunitas",
  },
] as const;
