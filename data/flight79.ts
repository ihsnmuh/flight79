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

export const menuItems = [
  {
    name: "Butter Croissant",
    categoryId: "breakfast",
    description: "Croissant klasik dengan lapisan renyah di luar dan bagian dalam yang lembut.",
    price: "18",
  },
  {
    name: "Signature Salad 79",
    categoryId: "breakfast",
    description: "Campuran sayuran hijau renyah dengan dressing soy vinaigrette.",
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
    description: "Telur sunny side up, roti gandum, daging asap, jamur, dan salad segar.",
    price: "55",
  },
  {
    name: "The Cabin Crew's Croissant",
    categoryId: "breakfast",
    description: "Croissant mentega dengan telur mata sapi, keripik kentang, dan salad segar.",
    price: "58",
  },
  {
    name: "Nasi Goreng 79",
    categoryId: "mains",
    description: "Nasi goreng khas Flight 79 dengan ayam goreng, sate lilit, dan telur mata sapi.",
    price: "58.5",
  },
  {
    name: "Cruising Iga Bakar Konro",
    categoryId: "mains",
    description: "Iga bakar lembut dengan sambal hijau yang segar dan aromatik.",
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
    description: "Spaghetti dengan saus krim lembut dan smoked beef yang gurih.",
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
    description: "Green tea, lavender, chamomile, dried lemon, dan butterfly pea.",
    price: "25",
  },
  {
    name: "Strawberry Smoothies",
    categoryId: "refreshers",
    description: "Smooth blend stroberi dan pisang dengan buah segar serta granola.",
    price: "49",
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
      src: "/flight79-menu.jpg",
      alt: "Inspirasi kategori sarapan dan pilihan ringan",
      position: "12% 70%",
    },
  },
  {
    id: "mains",
    number: "02",
    label: "Main Course",
    description: "Hidangan utama yang familiar dengan karakter Flight 79.",
    image: {
      src: "/flight79-menu.jpg",
      alt: "Inspirasi kategori hidangan utama Flight 79",
      position: "66% 52%",
    },
  },
  {
    id: "refreshers",
    number: "03",
    label: "Refreshers",
    description: "Pilihan segar untuk menemani perjalanan rasa.",
    image: {
      src: "/flight79-menu.jpg",
      alt: "Inspirasi kategori minuman segar Flight 79",
      position: "94% 44%",
    },
  },
  {
    id: "dessert",
    number: "04",
    label: "Dessert",
    description: "Sweet landing untuk menutup waktu bersama.",
  },
] as const;

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
