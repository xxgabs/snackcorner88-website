/* =========================================================
   SnackCorner88 — Product Database (single source of truth)

   Semua produk didaftarkan di sini. File ini dipakai bareng oleh:
   - products.html  (menampilkan SEMUA produk)
   - product.html   (menampilkan detail 1 produk berdasarkan ?slug=)

   "slug" harus unik dan sama persis dengan yang dipakai di URL,
   contoh: product.html?slug=sweet-snack-collection

   category dipakai untuk filter di products.html.
   badge: "new" | "out" | null
========================================================== */

const PRODUCTS = {
  "candy": {
    name: "Dancing Pop",
    shortDescription: "Enjoy the fun sensation of Dancing Pop Candy! A colorful and exciting popping candy snack with a playful taste, perfect for kids, teens, and candy lovers.",
    description:
     "Dancing Pop is a fun and exciting popping candy snack made for those who love a unique candy experience. With its colorful appearance and playful popping sensation, Dancing Pop brings extra fun to every bite.Perfect as a casual snack, party treat, or fun candy to enjoy with friends and family. Whether you're looking for a colorful candy snack or something different from ordinary sweets, Dancing Pop is a fun choice for every occasion.",
    image: "/assets/products/dancingpop.png",
    category: "Candy",
    available: true,
    variants: ["Original"],
    shopeeUrl: "https://shopee.co.id/product/1855086980/50664843376/"
  },
  "chocolate": {
    name: "BeBe Chocolate Coin",
    shortDescription: "Enjoy BeBe Chocolate Coin, a fun and delicious chocolate candy with a playful coin-shaped design. Perfect for snacking, sharing, and sweet treats.",
    description:
      "Camilan renyah untuk momen sehari-harimu, gurih di setiap gigitan. (Deskripsi ini masih contoh — silakan diganti sesuai produk aslinya.)",
    image: "/assets/products/bebecoin.png",
    category: "Chocolate",
    badge: null,
    available: true,
    variants: ["Original"],
    shopeeUrl: "https://shopee.co.id/product/1855086980/52464828681/"
  },
  "instantfood": {
    name: "Mie Instan Jago Mie",
    shortDescription: "Enjoy Jago Mie Instant Noodles, a quick and delicious noodle snack that's easy to prepare and perfect for a satisfying meal anytime.",
    description:
      "Jago Mie Instant Noodles is a convenient and delicious noodle snack that's easy to prepare whenever you're craving a quick meal. With its flavorful seasoning and satisfying noodle texture, Jago Mie is a practical choice for everyday meals and snacks. Easy to cook and enjoyable at any time of the day, Jago Mie Instant Noodles is perfect for students, busy individuals, or anyone looking for a simple and tasty noodle meal.",
    image: "/assets/products/miejago.png",
    category: "Instant Food",
    badge: null,
    available: true,
    variants: ["Soto Ayam", "Kaldu Ayam","Bakso Spesial"],
    shopeeUrl: "https://shopee.co.id/product/1855086980/56265150523/"
  },
  "chocolate2": {
    name: "Zippy Mini Manis",
    shortDescription: "Enjoy Zippy Mini Manis, a sweet and fun mini candy snack that's perfect for everyday snacking, sharing, and satisfying your sweet cravings.",
    description:
      "Zippy Mini Manis is a sweet and fun mini candy snack made for enjoyable everyday moments. Its small and convenient size makes it easy to enjoy on the go, share with friends, or keep as a simple sweet treat. Perfect for candy lovers looking for a tasty snack, Zippy Mini Manis brings a little sweetness to your day with every bite.",
    image: "/assets/products/zippymini.png",
    category: "Chocolate",
    badge: null,
    available: true,
    variants: ["Original"],
    shopeeUrl: "https://shopee.co.id/product/1855086980/52464828681/"
  },
  "chocolate3": {
    name: "DeLatto Biscuit Ball",
    shortDescription: "Enjoy DeLatto Biscuit Ball, a crunchy and delicious biscuit snack with a fun ball-shaped design. Perfect for snacking, sharing, and enjoying anytime.",
    description:
      "DeLatto Biscuit Ball is a crunchy and delicious biscuit snack with a fun ball-shaped design. Its satisfying texture and sweet flavor make it a tasty choice for everyday snacking. Perfect to enjoy on its own, share with friends and family, or take along as a convenient snack, DeLatto Biscuit Ball adds a fun twist to your everyday biscuit treat.",
    image: "/assets/products/delatto1.png",
    category: "Chocolate",
    badge: null,
    available: true,
    variants: ["Original"],
    shopeeUrl: "https://shopee.co.id/product/1855086980/55214999911/"
  },
  "savory": {
    name: "Kepang Goreng",
    shortDescription: "Enjoy Kepang Goreng, a crunchy and savory traditional fried snack with a unique braided shape. Perfect for everyday snacking and sharing.",
    description:
      "Kepang Goreng is a crunchy and savory traditional fried snack with a distinctive braided shape. Its crispy texture and savory flavor make it a delicious choice for everyday snacking. Perfect to enjoy on its own, share with family and friends, or serve as a tasty snack for various occasions. Kepang Goreng offers a simple yet satisfying traditional snack experience in every bite.",
    image: "/assets/products/kepanggoreng.png",
    category: "Savory",
    badge: null,
    available: true,
    variants: ["Daun Jeruk","Sapi Panggang"],
    shopeeUrl: "https://shopee.co.id/product/1855086980/47465027021/"
  },
  "candy2": {
    name: "Parago Chewy Candy",
    shortDescription: "Enjoy Parago Chewy Candy, a soft and chewy sweet with a delicious fruity taste. Perfect for everyday snacking, sharing, and satisfying your sweet cravings.",
    description:
      "Parago Chewy Candy is a soft and chewy candy made for enjoyable snacking moments. With its sweet and fruity taste and satisfying chewy texture, Parago is a fun treat for candy lovers of all ages. Convenient to enjoy anytime, Parago Chewy Candy is perfect for a quick sweet treat, sharing with friends and family, or keeping as an everyday snack.",
    image: "/assets/products/paragochewy.png",
    category: "Savory",
    badge: null,
    available: true,
    variants: ["Milk","Fruity"],
    shopeeUrl: "https://shopee.co.id/product/1855086980/47465027021/"
  }
  
  

  /* Tambah produk baru di sini, dengan pola yang sama:
  "slug-produk-baru": {
    name: "...",
    shortDescription: "...",
    description: "...",
    image: "/assets/products/....png",
    category: "...",
    badge: null,
    available: true,
    variants: ["..."],
    shopeeUrl: "https://shopee.co.id/..."
  }
  */
};
