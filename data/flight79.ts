export const site = {
  name: "Flight 79",
  url: "https://coffee.flight79.com",
  title: "Flight 79 | Aviation-Themed Cafe in Kota Baru Parahyangan",
  description:
    "Flight 79 is an aviation-themed cafe and restaurant in Kota Baru Parahyangan for coffee, comfort food, family dining, meetings, and special occasions.",
} as const;

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
  gofoodUrl: "https://gofood.link/a/SStfYD7",
};

export const social = {
  handle: "@flightseventyniner",
  instagramUrl: "https://www.instagram.com/flightseventyniner/",
  tiktokUrl: "https://www.tiktok.com/@flightseventyniner",
};

export type MenuCategoryId =
  | "breakfast"
  | "light"
  | "indonesian"
  | "western"
  | "oriental"
  | "coffee"
  | "beverages"
  | "dessert";

export type MenuItem = {
  name: string;
  categoryId: MenuCategoryId;
  subCategory: string;
  description: string;
  descriptionEn: string;
  signature?: boolean;
};

export const menuItems: readonly MenuItem[] = [
  // Breakfast & Pastry — Flight Deck Breakfast
  {
    name: "Pre-Flight Omelete",
    categoryId: "breakfast",
    subCategory: "Flight Deck Breakfast",
    description: "Omelet telur lembut untuk sarapan yang menghangatkan pagi.",
    descriptionEn: "Soft, warm egg omelet to start the morning.",
  },
  {
    name: "English Breakfast 79er - Bread",
    categoryId: "breakfast",
    subCategory: "Flight Deck Breakfast",
    description:
      "Sarapan komplet dengan telur sunny side up, roti gandum, daging asap, jamur gurih, dan salad segar.",
    descriptionEn:
      "Complete breakfast with sunny-side-up eggs, whole-wheat bread, smoked beef, savory mushrooms, and fresh salad.",
  },
  {
    name: "English Breakfast 79er Potato",
    categoryId: "breakfast",
    subCategory: "Flight Deck Breakfast",
    description:
      "Perpaduan telur sunny side up, potato wedges renyah, dan salad hijau segar.",
    descriptionEn:
      "Sunny-side-up eggs paired with crispy potato wedges and fresh green salad.",
  },
  {
    name: "The Cabin Crew's Croissant",
    categoryId: "breakfast",
    subCategory: "Flight Deck Breakfast",
    description:
      "Croissant mentega renyah dengan isian telur mata sapi, keripik kentang, dan salad sayur segar.",
    descriptionEn:
      "Crisp butter croissant filled with fried egg, served with potato chips and fresh salad.",
  },
  {
    name: "The Aviator's Tuna",
    categoryId: "breakfast",
    subCategory: "Flight Deck Breakfast",
    description:
      "Croissant renyah dengan tuna salad gurih, keripik kentang, dan salad hijau segar.",
    descriptionEn:
      "Crisp croissant filled with savory tuna salad, potato chips, and fresh green salad.",
  },
  {
    name: "The Captain's Smoked Beef",
    categoryId: "breakfast",
    subCategory: "Flight Deck Breakfast",
    description:
      "Croissant mentega renyah dengan smoked beef tebal bumbu herbal yang smoky, potato chips, dan salad segar.",
    descriptionEn:
      "Crisp butter croissant with smoky herb-seasoned smoked beef, potato chips, and fresh salad.",
  },

  // Breakfast & Pastry — Pastry
  {
    name: "Butter Croissant",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description:
      "Croissant klasik dengan lapisan renyah di luar dan bagian dalam yang lembut.",
    descriptionEn:
      "Classic croissant with a crisp flaky exterior and a soft layered center.",
  },
  {
    name: "Almond Croissant",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description: "Croissant dengan topping almond dan taburan gula halus.",
    descriptionEn: "Flaky croissant topped with sliced almonds and powdered sugar.",
  },
  {
    name: "Choco Croissant",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description:
      "Croissant dua warna dengan lapisan renyah dan rasa cokelat yang seimbang.",
    descriptionEn:
      "Two-tone flaky croissant with a balanced chocolate filling.",
  },
  {
    name: "Cheese Croissant",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description:
      "Croissant bertekstur renyah dan lembut dengan isian cream cheese.",
    descriptionEn: "Crisp, tender croissant filled with smooth cream cheese.",
  },
  {
    name: "Cookies Croissant",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description:
      "Croissant mentega renyah yang diisi dan dilapisi adonan chocolate chip cookie panggang yang lumer.",
    descriptionEn:
      "Butter croissant filled and topped with baked chocolate chip cookie dough.",
  },
  {
    name: "Kouign Amann",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description: "Pastry berlapis karamel dengan tekstur renyah.",
    descriptionEn: "Caramelized layered pastry with a crisp finish.",
  },
  {
    name: "Cream Cheese Danish",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description: "Pastry berlapis dengan isian cream cheese yang lembut.",
    descriptionEn: "Flaky laminated pastry filled with creamy cream cheese.",
  },
  {
    name: "Pain Aux Raisin",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description: "Pastry berlapis lembut dengan krim dan kismis.",
    descriptionEn: "Soft swirled pastry with pastry cream and raisins.",
  },
  {
    name: "Cinnamon Roll",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description: "Roti gulung lembut dengan aroma dan cita rasa kayu manis.",
    descriptionEn: "Soft rolled pastry infused with warm cinnamon aroma.",
  },
  {
    name: "Pistachio Choco Roll",
    categoryId: "breakfast",
    subCategory: "Pastry",
    description: "Pastry gulung lembut dengan isian cokelat dan pistachio.",
    descriptionEn: "Soft swirled pastry filled with chocolate and pistachio.",
  },

  // Soup, Salad & Lite Bites — Soup & Salad
  {
    name: "Chicken Cream Soup",
    categoryId: "light",
    subCategory: "Soup & Salad",
    description: "Sup ayam creamy yang hangat untuk teman bersantai.",
    descriptionEn: "Warm, comforting creamy chicken soup.",
  },
  {
    name: "French Onion Soup",
    categoryId: "light",
    subCategory: "Soup & Salad",
    description:
      "Bawang bombay manis alami dalam kaldu gurih, disajikan bersama garlic bread.",
    descriptionEn:
      "Caramelized onions in savory broth, served with garlic bread.",
  },
  {
    name: "Pumpkin Soup",
    categoryId: "light",
    subCategory: "Soup & Salad",
    description:
      "Sup labu bertekstur lembut dengan rasa manis alami yang hangat dan ringan.",
    descriptionEn: "Velvety pumpkin soup with a light, naturally sweet warmth.",
  },
  {
    name: "Signature Salad 79",
    categoryId: "light",
    subCategory: "Soup & Salad",
    description:
      "Campuran sayuran hijau renyah dengan dressing soy vinaigrette yang segar.",
    descriptionEn: "Crisp mixed greens tossed with soy vinaigrette dressing.",
    signature: true,
  },
  {
    name: "Caesar Salad",
    categoryId: "light",
    subCategory: "Soup & Salad",
    description: "Romaine renyah, crouton gurih, dan dressing caesar creamy.",
    descriptionEn: "Crisp romaine, savory croutons, and creamy Caesar dressing.",
  },
  {
    name: "Fruits Salad",
    categoryId: "light",
    subCategory: "Soup & Salad",
    description: "Manis alami dari buah segar yang ringan dan menyegarkan.",
    descriptionEn: "Light, refreshing medley of naturally sweet fresh fruits.",
  },

  // Soup, Salad & Lite Bites — Lite Bites
  {
    name: "French Fries",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Kentang goreng kuning keemasan yang renyah di luar, lembut di dalam, dengan bumbu gurih.",
    descriptionEn:
      "Golden-fried potatoes, crisp outside and fluffy inside, dusted with savory seasoning.",
  },
  {
    name: "Cajun Potato",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Kentang goreng renyah berbalut racikan bumbu Cajun pedas kaya rempah.",
    descriptionEn: "Crispy fries coated in a spicy, aromatic Cajun seasoning.",
  },
  {
    name: "Onion Ring",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Irisan bawang bombay manis berbalut tepung roti renyah, disajikan dengan spicy mayo.",
    descriptionEn: "Crispy breaded sweet onion rings served with spicy mayo.",
  },
  {
    name: "Calamari",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Cumi segar goreng crispy bertekstur empuk, disajikan dengan saus tartar.",
    descriptionEn: "Tender crispy-fried calamari served with tartar sauce.",
  },
  {
    name: "Mix Platter",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Sajian berbagi berisi chicken wing, sosis, dan potato chips.",
    descriptionEn: "Sharing platter of chicken wings, sausages, and potato chips.",
  },
  {
    name: "Mix Fries",
    categoryId: "light",
    subCategory: "Lite Bites",
    description: "Perpaduan potongan kentang goreng dan tortillas corn.",
    descriptionEn: "Assorted fries paired with crunchy corn tortillas.",
  },
  {
    name: "Tortillas Corn",
    categoryId: "light",
    subCategory: "Lite Bites",
    description: "Keripik jagung renyah dan gurih untuk teman mengobrol.",
    descriptionEn: "Crisp, savory corn tortilla chips for easy snacking.",
  },
  {
    name: "Cireng",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Camilan aci goreng kenyal di dalam dan crispy di luar dengan bumbu rujak pedas manis.",
    descriptionEn:
      "Crispy-outside, chewy-inside fried tapioca bites with sweet-spicy rujak dip.",
  },
  {
    name: "Tahu Lada Garam",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Tahu dadu goreng garing ditumis bersama irisan cabai, bawang putih goreng, dan lada garam.",
    descriptionEn:
      "Crispy tofu cubes tossed with sliced chili, fried garlic, salt, and pepper.",
  },
  {
    name: "Pisang Goreng",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Pisang tanduk manis alami digoreng dengan balutan tepung renyah.",
    descriptionEn: "Naturally sweet plantains fried in a crisp batter.",
  },
  {
    name: "Pisang Mozza",
    categoryId: "light",
    subCategory: "Lite Bites",
    description: "Pisang goreng manis dengan topping keju mozzarella leleh.",
    descriptionEn: "Sweet fried plantains topped with melted mozzarella cheese.",
  },
  {
    name: "Spicy Wing",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Sayap ayam goreng berbalut saus pedas dengan sentuhan manis-gurih.",
    descriptionEn: "Fried chicken wings glazed in a spicy, sweet-savory sauce.",
  },
  {
    name: "Mozzarella Wing",
    categoryId: "light",
    subCategory: "Lite Bites",
    description:
      "Sayap ayam berbumbu gurih dengan lilitan keju mozzarella leleh.",
    descriptionEn: "Savory seasoned chicken wings wrapped in melted mozzarella.",
  },

  // Indonesian Delight
  {
    name: "Nasi Bakar Teri Ayam",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Nasi berbumbu dengan teri gurih dan ayam goreng/bakar dibungkus daun pisang.",
    descriptionEn:
      "Seasoned grilled rice with savory anchovies and fried or grilled chicken in banana leaf.",
  },
  {
    name: "Nasi Bakar Oncom Ayam",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Oncom gurih dalam nasi bakar berpadu dengan ayam goreng/bakar yang juicy.",
    descriptionEn:
      "Savory oncom grilled rice paired with juicy fried or grilled chicken.",
  },
  {
    name: "Nasi Ayam Bakar Komplit",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Ayam bakar, sambal lalap, kerupuk, tahu, dan tempe bersama nasi timbel hangat.",
    descriptionEn:
      "Grilled chicken with sambal, fresh herbs, crackers, tofu, tempeh, and warm timbel rice.",
  },
  {
    name: "Nasi Campur Bali",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Sajian khas Bali dengan sate lilit, pindang telur, sambal matah, plecing kangkung, ayam suwir, teri kacang, dan nasi hangat.",
    descriptionEn:
      "Balinese mixed rice with satay lilit, spiced egg, sambal matah, plecing kangkung, shredded chicken, and anchovy peanuts.",
  },
  {
    name: "Ayam Betutu",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Ayam berbumbu rempah khas Bali disajikan dengan plecing kangkung, sambal matah, kerupuk, dan nasi hangat.",
    descriptionEn:
      "Balinese spiced chicken served with plecing kangkung, sambal matah, crackers, and steamed rice.",
  },
  {
    name: "Sop Iga Garang Asam",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Iga sapi impor empuk dalam kaldu asam manis pedas yang dimasak perlahan.",
    descriptionEn:
      "Tender imported beef ribs slow-cooked in a tangy, sweet-spicy broth.",
  },
  {
    name: "Sop Buntut",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description: "Buntut sapi impor dalam kuah bening yang hangat dan harum.",
    descriptionEn: "Imported oxtail simmered in a clear, aromatic broth.",
  },
  {
    name: "Buntut Goreng",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Buntut sapi impor digoreng hingga garing di luar dan tetap empuk di dalam.",
    descriptionEn: "Imported oxtail fried crisp outside while staying tender inside.",
  },
  {
    name: "Nasi Rawon",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Kuah rawon hitam berempah khas dengan daging sapi empuk dan nasi putih hangat.",
    descriptionEn:
      "Rich dark kluwek beef soup with tender beef and warm steamed rice.",
  },
  {
    name: "Nasi Gulai Kambing",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Daging kambing dalam kuah gulai berempah, disajikan dengan nasi putih hangat.",
    descriptionEn: "Tender lamb in spiced gulai curry served with steamed rice.",
  },
  {
    name: "Tongseng Kambing",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Perpaduan rempah segar, kuah gurih, dan potongan daging kambing empuk.",
    descriptionEn: "Aromatic savory lamb stew with fresh spices and tender cuts.",
  },
  {
    name: "Cruising Iga Bakar Konro",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description: "Iga bakar lembut disajikan dengan sambal hijau yang segar dan harum.",
    descriptionEn: "Tender grilled ribs served with fresh, aromatic green sambal.",
  },
  {
    name: "Nasi Goreng 79",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Nasi goreng khas Flight 79 dengan bumbu spesial, ayam goreng, sate lilit, dan telur mata sapi.",
    descriptionEn:
      "Flight 79 house fried rice with fried chicken, satay lilit, and a sunny-side-up egg.",
  },
  {
    name: "Nasi Goreng Daun Jeruk",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Nasi goreng daun jeruk gurih disajikan dengan sate lilit dan telur mata sapi.",
    descriptionEn:
      "Fragrant kaffir-lime fried rice served with satay lilit and a sunny-side-up egg.",
  },
  {
    name: "Nasi Goreng Buntut",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Nasi goreng rempah gurih dengan potongan buntut sapi empuk dan telur mata sapi.",
    descriptionEn:
      "Spiced fried rice with tender oxtail pieces and a sunny-side-up egg.",
  },
  {
    name: "Nasi Goreng Pete Ikan Asin",
    categoryId: "indonesian",
    subCategory: "Indonesian Delight",
    description:
      "Nasi goreng dengan ikan asin jambal roti, petai, dan telur mata sapi.",
    descriptionEn:
      "Savory fried rice with salted jambal roti fish, petai, and a sunny-side-up egg.",
  },

  // Pizza, Pasta & Steak — Pizza
  {
    name: "Meat Lovers",
    categoryId: "western",
    subCategory: "Pizza",
    description: "Pilihan aneka daging dengan keju leleh di setiap potongan.",
    descriptionEn: "Selection of savory meats with melted cheese in every slice.",
  },
  {
    name: "Beef Pepperoni",
    categoryId: "western",
    subCategory: "Pizza",
    description: "Pepperoni sapi smoky dipadukan dengan keju yang meleleh.",
    descriptionEn: "Smoky beef pepperoni paired with melted cheese.",
  },
  {
    name: "Chicken Lovers",
    categoryId: "western",
    subCategory: "Pizza",
    description: "Potongan ayam lembut dengan saus gurih dan lapisan keju.",
    descriptionEn: "Tender chicken pieces with savory sauce and melted cheese.",
  },
  {
    name: "Double Cheesy",
    categoryId: "western",
    subCategory: "Pizza",
    description: "Kombinasi keju creamy yang kaya rasa.",
    descriptionEn: "Rich, creamy double-cheese pizza.",
  },
  {
    name: "Hot Tuna",
    categoryId: "western",
    subCategory: "Pizza",
    description: "Tuna gurih dan pedas yang berkarakter.",
    descriptionEn: "Savory, spicy tuna topping with bold flavor.",
  },

  // Pizza, Pasta & Steak — Pasta & Noodles
  {
    name: "Spaghetti Aglio Tuna",
    categoryId: "western",
    subCategory: "Pasta & Noodles",
    description:
      "Spaghetti dengan tuna lembut disajikan bersama garlic bread.",
    descriptionEn: "Aglio olio spaghetti with tender tuna and garlic bread.",
  },
  {
    name: "Spaghetti Carbonara",
    categoryId: "western",
    subCategory: "Pasta & Noodles",
    description: "Spaghetti bersaus krim lembut dengan smoked beef gurih.",
    descriptionEn: "Spaghetti in a creamy sauce with savory smoked beef.",
  },
  {
    name: "Spaghetti Bolognese",
    categoryId: "western",
    subCategory: "Pasta & Noodles",
    description: "Spaghetti dengan saus tomat dan daging sapi cincang.",
    descriptionEn: "Spaghetti tossed in a rich tomato and minced beef sauce.",
  },
  {
    name: "Spaghetti A la Thai",
    categoryId: "western",
    subCategory: "Pasta & Noodles",
    description:
      "Spaghetti dengan rasa gurih asam pedas terinspirasi Thailand, lengkap dengan udang.",
    descriptionEn:
      "Thai-inspired tangy, spicy-savory spaghetti topped with shrimp.",
  },
  {
    name: "Fried Noodles",
    categoryId: "western",
    subCategory: "Pasta & Noodles",
    description: "Mie goreng berbumbu spesial disajikan bersama chicken fingers.",
    descriptionEn: "House-seasoned fried noodles served with chicken fingers.",
  },
  {
    name: "Mie Jawa",
    categoryId: "western",
    subCategory: "Pasta & Noodles",
    description:
      "Mie telur dimasak dengan telur dan sayuran segar, dilengkapi chicken katsu.",
    descriptionEn:
      "Comforting Javanese-style egg noodles with vegetables and chicken katsu.",
  },

  // Pizza, Pasta & Steak — Steak
  {
    name: "Tenderloin",
    categoryId: "western",
    subCategory: "Steak",
    description:
      "Potongan daging lembut tidak terlalu berlemak, dengan pilihan kentang dan saus.",
    descriptionEn:
      "Tender lean beef cut served with your choice of potato and gravy.",
  },
  {
    name: "Sirloin",
    categoryId: "western",
    subCategory: "Steak",
    description:
      "Daging padat dan juicy dengan lapisan lemak khas, lengkap dengan pilihan kentang dan saus.",
    descriptionEn:
      "Juicy sirloin cut with rich marbling, served with potato and gravy.",
  },
  {
    name: "Meltique Wagyu",
    categoryId: "western",
    subCategory: "Steak",
    description:
      "Daging meltique bertekstur juicy dan lembut dengan pilihan kentang serta saus.",
    descriptionEn:
      "Juicy, tender meltique wagyu served with your choice of potato and gravy.",
  },
  {
    name: "T-Bone",
    categoryId: "western",
    subCategory: "Steak",
    description:
      "Steak T-Bone panggang yang juicy dan kaya rasa dengan pilihan kentang serta saus.",
    descriptionEn:
      "Char-grilled juicy T-bone steak served with potato and gravy.",
  },
  {
    name: "Chicken Steak",
    categoryId: "western",
    subCategory: "Steak",
    description:
      "Fillet ayam berbumbu spesial dipanggang juicy dengan pilihan kentang dan saus.",
    descriptionEn:
      "Seasoned grilled chicken fillet served with your choice of potato and gravy.",
  },
  {
    name: "Salmon",
    categoryId: "western",
    subCategory: "Steak",
    description:
      "Norwegian salmon panggang garing di luar dan lembut di dalam, dengan pilihan kentang dan saus.",
    descriptionEn:
      "Pan-seared Norwegian salmon, crisp outside and flaky inside, with potato and gravy.",
  },

  // Oriental Menu
  {
    name: "Hainan Chicken Rice 79er",
    categoryId: "oriental",
    subCategory: "Oriental Menu",
    description:
      "Ayam Hainan dipadukan dengan racikan bumbu Indonesia yang kaya rasa.",
    descriptionEn:
      "Hainanese chicken rice infused with aromatic Indonesian seasonings.",
  },
  {
    name: "Chicken Katsu 79er",
    categoryId: "oriental",
    subCategory: "Oriental Menu",
    description:
      "Fillet ayam berbalut tepung roti panko disajikan dengan sambal matah segar.",
    descriptionEn: "Panko-crusted chicken fillet served with fresh sambal matah.",
  },
  {
    name: "Korean Beef Rice Bowl 79er",
    categoryId: "oriental",
    subCategory: "Oriental Menu",
    description:
      "Nasi hangat dan daging sapi berbumbu aromatik dalam satu mangkuk.",
    descriptionEn: "Warm rice bowl topped with aromatic Korean-style beef.",
  },
  {
    name: "Beef Teriyaki Rice Bowl 79er",
    categoryId: "oriental",
    subCategory: "Oriental Menu",
    description:
      "Nasi dan irisan daging sapi empuk yang dimasak dengan saus teriyaki.",
    descriptionEn: "Steamed rice with tender sliced beef glazed in teriyaki sauce.",
  },
  {
    name: "Spicy Dory Rice Bowl 79er",
    categoryId: "oriental",
    subCategory: "Oriental Menu",
    description: "Nasi putih dengan ikan dori lembut dan saus pedas aromatik.",
    descriptionEn: "Steamed rice with tender dory fillet in an aromatic spicy sauce.",
  },

  // Coffee Selection
  {
    name: "Espresso",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Shot espresso pekat dengan karakter kopi yang tegas.",
    descriptionEn: "Rich, concentrated shot of espresso.",
  },
  {
    name: "Americano",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Espresso dengan tambahan air untuk rasa yang lebih ringan.",
    descriptionEn: "Espresso lengthened with water for a cleaner cup.",
  },
  {
    name: "Long Black",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Air panas disiram espresso untuk aroma crema yang utuh.",
    descriptionEn: "Hot water topped with espresso to preserve the crema.",
  },
  {
    name: "Cappuccino",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Espresso dan susu dengan busa lembut, tersedia panas atau dingin.",
    descriptionEn: "Espresso and milk with velvety foam, served hot or iced.",
  },
  {
    name: "Café Latte",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Espresso berpadu dengan susu lembut, tersedia panas atau dingin.",
    descriptionEn: "Smooth espresso blended with milk, served hot or iced.",
  },
  {
    name: "Magic Hot",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Ristretto ganda dengan susu hangat bergaya Melbourne.",
    descriptionEn: "Double ristretto paired with silky steamed milk.",
  },
  {
    name: "V60",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Seduhan manual pour-over dengan pilihan biji Fullwash, Honey, atau Natural.",
    descriptionEn: "Manual pour-over coffee in Fullwash, Honey, or Natural beans.",
  },
  {
    name: "Dirty Lotus Latte",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Susu dingin, sentuhan karamel Lotus, dan espresso di atasnya.",
    descriptionEn: "Chilled milk layered with Lotus caramel notes and espresso.",
  },
  {
    name: "Sweet Cinnamon Coffee",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Kopi susu manis dengan kehangatan aroma kayu manis.",
    descriptionEn: "Sweet milk coffee accented with warm cinnamon.",
  },
  {
    name: "Pistachio Latte",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Kopi susu dengan rasa pistachio yang gurih lembut, tersedia panas atau dingin.",
    descriptionEn: "House signature latte with nutty pistachio notes, hot or iced.",
    signature: true,
  },
  {
    name: "Caramel Latte",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Latte lembut dengan manisnya karamel, tersedia panas atau dingin.",
    descriptionEn: "Smooth latte sweetened with caramel, served hot or iced.",
  },
  {
    name: "Hazelnut Latte",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Latte dengan aroma kacang hazelnut, tersedia panas atau dingin.",
    descriptionEn: "Latte infused with roasted hazelnut aroma, served hot or iced.",
  },
  {
    name: "Vanilla Latte",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Latte klasik dengan sentuhan vanilla lembut, tersedia panas atau dingin.",
    descriptionEn: "Classic latte with smooth vanilla notes, served hot or iced.",
  },
  {
    name: "Iced Coffee 79",
    categoryId: "coffee",
    subCategory: "Coffee Selection",
    description: "Es kopi susu racikan khas Flight 79.",
    descriptionEn: "Flight 79's signature house iced coffee.",
    signature: true,
  },

  // Beverages & Smoothies — Ice Blended Series
  {
    name: "Berry Take-Off",
    categoryId: "beverages",
    subCategory: "Ice Blended Series",
    description: "Strawberry-blueberry segar diblend dengan Yakult dan es krim.",
    descriptionEn: "Fresh strawberry and blueberry blended with Yakult and ice cream.",
    signature: true,
  },
  {
    name: "Chocolate Blend",
    categoryId: "beverages",
    subCategory: "Ice Blended Series",
    description:
      "Blend cokelat, susu, dan es krim beraroma vanila dengan topping whipped cream.",
    descriptionEn:
      "Blended chocolate, milk, and vanilla ice cream topped with whipped cream.",
    signature: true,
  },
  {
    name: "Classic Ice Chocolate",
    categoryId: "beverages",
    subCategory: "Ice Blended Series",
    description: "Es cokelat dan susu beraroma vanila dengan topping whipped cream.",
    descriptionEn:
      "Iced chocolate and vanilla-scented milk topped with whipped cream.",
  },
  {
    name: "Matcha Blend",
    categoryId: "beverages",
    subCategory: "Ice Blended Series",
    description:
      "Blend matcha, susu, dan es krim creamy dengan topping whipped cream.",
    descriptionEn: "Creamy blended matcha, milk, and ice cream with whipped cream.",
  },
  {
    name: "Classic Ice Matcha",
    categoryId: "beverages",
    subCategory: "Ice Blended Series",
    description: "Paduan segar matcha dan susu dingin dengan topping whipped cream.",
    descriptionEn: "Chilled matcha and milk topped with whipped cream.",
    signature: true,
  },
  {
    name: "Mango Horizon",
    categoryId: "beverages",
    subCategory: "Ice Blended Series",
    description: "Blend mangga, Yakult, dan es krim dengan rasa tropis yang creamy.",
    descriptionEn: "Creamy tropical blend of mango, Yakult, and ice cream.",
  },
  {
    name: "Lychee Breeze",
    categoryId: "beverages",
    subCategory: "Ice Blended Series",
    description: "Blend leci, Yakult, dan es krim yang harum dan lembut.",
    descriptionEn: "Fragrant, velvety blend of lychee, Yakult, and ice cream.",
    signature: true,
  },

  // Beverages & Smoothies — Hot Series
  {
    name: "Hot Chocolate",
    categoryId: "beverages",
    subCategory: "Hot Series",
    description: "Seduhan cokelat hangat bersama susu yang creamy.",
    descriptionEn: "Warm, creamy steamed milk chocolate.",
    signature: true,
  },
  {
    name: "Hot Matcha",
    categoryId: "beverages",
    subCategory: "Hot Series",
    description: "Seduhan matcha hangat bersama susu yang lembut dan menenangkan.",
    descriptionEn: "Soothing warm matcha whisked with steamed milk.",
  },

  // Beverages & Smoothies — Mojito & Refreshers
  {
    name: "Kiwi Mojito",
    categoryId: "beverages",
    subCategory: "Mojito & Refreshers",
    description: "Perpaduan soda, mint, dan kiwi yang asam segar.",
    descriptionEn: "Refreshing mix of soda, mint, and tangy kiwi.",
  },
  {
    name: "Mango Mojito",
    categoryId: "beverages",
    subCategory: "Mojito & Refreshers",
    description: "Kesegaran soda dan mint berpadu dengan manisnya mangga.",
    descriptionEn: "Crisp soda and mint balanced with sweet mango.",
    signature: true,
  },
  {
    name: "Lychee Mojito",
    categoryId: "beverages",
    subCategory: "Mojito & Refreshers",
    description: "Sensasi soda dingin dengan rasa leci yang manis wangi.",
    descriptionEn: "Chilled sparkling soda with sweet, fragrant lychee.",
  },
  {
    name: "Strawberry Mojito",
    categoryId: "beverages",
    subCategory: "Mojito & Refreshers",
    description: "Campuran soda dan stroberi yang asam manis menyegarkan.",
    descriptionEn: "Sparkling soda with sweet-tart strawberry.",
  },
  {
    name: "Blueberry Mojito",
    categoryId: "beverages",
    subCategory: "Mojito & Refreshers",
    description: "Rasa khas blueberry dalam racikan soda dingin.",
    descriptionEn: "Distinct blueberry flavor in a crisp chilled soda.",
  },

  // Beverages & Smoothies — Artisan Tea
  {
    name: "Morning Glory",
    categoryId: "beverages",
    subCategory: "Artisan Tea",
    description:
      "Green tea, lavender, chamomile, dried lemon, dan butterfly pea berkarakter herbal fruity.",
    descriptionEn:
      "Herbal-fruity blend of green tea, lavender, chamomile, dried lemon, and butterfly pea.",
  },
  {
    name: "Ruby Tea",
    categoryId: "beverages",
    subCategory: "Artisan Tea",
    description:
      "Green tea, rosella, dan dried strawberry dengan rasa segar tropis.",
    descriptionEn: "Fresh, tangy tropical blend of green tea, rosella, and dried strawberry.",
    signature: true,
  },
  {
    name: "Mango Mint",
    categoryId: "beverages",
    subCategory: "Artisan Tea",
    description:
      "Green tea, mangga, mint, osmanthus, dan rosella yang manis menyegarkan.",
    descriptionEn:
      "Fruity, calming blend of green tea, mango, mint, osmanthus, and rosella.",
  },
  {
    name: "Sencha Mint",
    categoryId: "beverages",
    subCategory: "Artisan Tea",
    description: "Sencha, mint, dan mawar dengan rasa segar yang menenangkan.",
    descriptionEn: "Calming minty infusion of sencha, mint, and rose.",
  },
  {
    name: "Iced Tea",
    categoryId: "beverages",
    subCategory: "Artisan Tea",
    description: "Es teh klasik yang selalu jadi andalan.",
    descriptionEn: "Classic chilled house iced tea.",
    signature: true,
  },
  {
    name: "Mineral Water",
    categoryId: "beverages",
    subCategory: "Artisan Tea",
    description: "Air mineral dingin atau suhu ruang.",
    descriptionEn: "Still mineral water.",
  },

  // Beverages & Smoothies — Smoothies
  {
    name: "Strawberry Smoothies",
    categoryId: "beverages",
    subCategory: "Smoothies",
    description:
      "Smooth blend stroberi dan pisang dengan topping buah naga, pisang, stroberi, anggur, dan granola.",
    descriptionEn:
      "Strawberry-banana smoothie bowl topped with dragonfruit, banana, strawberry, grapes, and granola.",
  },
  {
    name: "Dragonfruit Smoothies",
    categoryId: "beverages",
    subCategory: "Smoothies",
    description:
      "Smooth blend buah naga dan pisang dengan topping buah naga, pisang, stroberi, anggur, dan granola.",
    descriptionEn:
      "Dragonfruit-banana smoothie bowl topped with fresh fruit and crunchy granola.",
    signature: true,
  },

  // Dessert
  {
    name: "Panna Cotta",
    categoryId: "dessert",
    subCategory: "Dessert",
    description: "Puding sutra Italia berbahan dasar krim dan vanilla yang lembut.",
    descriptionEn: "Silky Italian cream and vanilla pudding.",
  },
  {
    name: "Creme Brulee",
    categoryId: "dessert",
    subCategory: "Dessert",
    description:
      "Custard vanilla lembut di bawah lapisan gula karamel renyah beraroma smoky.",
    descriptionEn:
      "Soft vanilla custard beneath a crisp, smoky caramelized sugar crust.",
  },
  {
    name: "Choco Lava",
    categoryId: "dessert",
    subCategory: "Dessert",
    description: "Kue cokelat lembut hangat dengan lelehan cokelat di bagian tengah.",
    descriptionEn: "Warm soft chocolate cake with a molten chocolate center.",
  },
  {
    name: "Affogato",
    categoryId: "dessert",
    subCategory: "Dessert",
    description:
      "Satu scoop es krim vanilla disajikan terpisah dengan satu shot espresso panas pekat.",
    descriptionEn: "Vanilla ice cream served with a hot shot of espresso to pour over.",
  },
  {
    name: "Matchagato",
    categoryId: "dessert",
    subCategory: "Dessert",
    description: "Es krim vanilla dingin dengan siraman pure whisked matcha.",
    descriptionEn: "Vanilla ice cream finished with a pour of pure whisked matcha.",
  },
  {
    name: "Ice Cream",
    categoryId: "dessert",
    subCategory: "Dessert",
    description:
      "Es krim lembut dengan taburan bubuk almond dan garnish wafer roll cokelat.",
    descriptionEn:
      "Creamy ice cream topped with almond crumble and chocolate wafer roll.",
  },
];

export const menuCategories = [
  {
    id: "breakfast",
    number: "01",
    label: "Breakfast & Pastry",
    description:
      "Sajian sarapan Flight Deck dan aneka pastry hangat untuk mengawali pagi atau menemani kopi.",
    descriptionEn:
      "Flight Deck breakfast plates and warm pastries to start the day or pair with your coffee.",
    image: {
      src: "/menus/menu-pastery.jpeg",
      alt: "Pilihan pastry dan croissant sebagai inspirasi kategori sarapan Flight 79",
      position: "12% 70%",
    },
  },
  {
    id: "light",
    number: "02",
    label: "Soup, Salad & Lite Bites",
    description:
      "Sup hangat, salad segar, dan camilan gurih untuk dinikmati sendiri atau berbagi di satu meja.",
    descriptionEn:
      "Warm soups, crisp salads, and savory bites made for solo cravings or sharing at the table.",
    image: {
      src: "/menus/menu-litebites.jpg",
      alt: "Kentang goreng, spicy wing, dan salad segar sebagai ilustrasi kategori Sup, Salad & Camilan Flight 79",
      position: "50% 50%",
    },
  },
  {
    id: "indonesian",
    number: "03",
    label: "Indonesian Delight",
    description:
      "Hidangan Nusantara kaya rempah, mulai dari nasi bakar, sop buntut, rawon, hingga nasi goreng khas 79.",
    descriptionEn:
      "Rich Indonesian favorites from grilled rice and oxtail soup to rawon and house-style fried rice.",
    image: {
      src: "/menus/menu-sopbuntut.jpg",
      alt: "Sop buntut dengan kuah kaldu kaya rasa sebagai inspirasi kategori Indonesian Delight Flight 79",
      position: "66% 52%",
    },
  },
  {
    id: "western",
    number: "04",
    label: "Pizza, Pasta & Steak",
    description:
      "Pizza panggang berkeju, pasta dan mie hangat, hingga potongan steak pilihan dengan aneka saus.",
    descriptionEn:
      "Oven-baked pizzas, comforting pasta and noodles, and grilled steaks with your choice of gravy.",
    image: {
      src: "/menus/menu-pizza.jpg",
      alt: "Beef Pepperoni Pizza dengan keju leleh sebagai visual kategori Pizza, Pasta & Steak Flight 79",
      position: "50% 52%",
    },
  },
  {
    id: "oriental",
    number: "05",
    label: "Oriental Menu",
    description:
      "Rice bowl praktis dan sajian ayam katsu hingga ayam Hainan dengan cita rasa akrab di lidah.",
    descriptionEn:
      "Flavorful rice bowls, Hainanese chicken rice, and panko chicken katsu.",
    image: {
      src: "/menus/menu-oriental.jpg",
      alt: "Chicken Katsu 79er dengan sambal matah dan telur mata sapi sebagai ilustrasi kategori Oriental Menu Flight 79",
      position: "50% 50%",
    },
  },
  {
    id: "coffee",
    number: "06",
    label: "Coffee Selection",
    description:
      "Kopi espresso klasik, manual brew V60, hingga racikan signature Flight 79 panas maupun dingin.",
    descriptionEn:
      "Espresso classics, V60 pour-over, and Flight 79 signature coffees served hot or iced.",
    image: {
      src: "/menus/menu-coffee.jpg",
      alt: "Mesin espresso Flight 79 dengan secangkir kopi yang baru diseduh",
      position: "50% 50%",
    },
  },
  {
    id: "beverages",
    number: "07",
    label: "Beverages & Smoothies",
    description:
      "Ice blended creamy, seri hangat, mojito segar, artisan tea, hingga smoothie bowl buah segar.",
    descriptionEn:
      "Creamy ice-blended drinks, warm classics, sparkling mojitos, artisan teas, and fresh smoothie bowls.",
    image: {
      src: "/menus/menu-berrytakeoff.jpg",
      alt: "Berry Take-Off sebagai visual kategori minuman segar Flight 79",
      position: "94% 44%",
    },
  },
  {
    id: "dessert",
    number: "08",
    label: "Dessert",
    description: "Sajian manis untuk menutup waktu makan dengan sempurna.",
    descriptionEn: "Sweet plates to finish your meal.",
    image: {
      src: "/menus/menu-dessert.jpeg",
      alt: "Kue cokelat hangat dengan lelehan cokelat sebagai visual kategori pencuci mulut Flight 79",
      position: "50% 52%",
    },
  },
] as const;

export const experienceFeatures = [
  {
    number: "01",
    title: "Aviation Atmosphere",
    copy: "Detail landasan, kode penerbangan, dan sentuhan ruang tunggu hadir secukupnya agar ruangan tetap hangat dan nyaman ditinggali.",
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
