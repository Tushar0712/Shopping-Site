const products = [
  {
    img: "./icons/assets/product_7.png",
    name: "Urban Explorer Backpack",
    details: "Durable, water-resistant, perfect for daily use and travel.",
    price: "₹1,599",
    colors: ["#222", "#b5651d", "#1976d2"], // black, brown, blue
  },
  {
    img: "./icons/assets/product_2.png",
    name: "Classic White Tee",
    details: "100% cotton, soft touch, essential for every wardrobe.",
    price: "₹899",
    colors: ["#fff", "#222", "#f50505"], // white, black, red
  },
  {
    img: "./icons/assets/product_9.png",
    name: "Minimalist Analog Watch",
    details: "Sleek design, leather strap, suits all occasions.",
    price: "₹2,499",
    colors: ["#222", "#bdb76b", "#b30000"], // black, gold, maroon
  },
  {
    img: "./icons/assets/product_11.png",
    name: "Comfy Jogger Pants",
    details: "Stretchable fabric, relaxed fit, ideal for workouts or lounging.",
    price: "₹1,299",
    colors: ["#222", "#607d8b", "#4caf50"], // black, blue-grey, green
  },
  {
    img: "./icons/assets/product_12.png",
    name: "Trendy Sunglasses",
    details: "UV protection, lightweight, adds style to any outfit.",
    price: "₹2999",
    colors: ["#222", "#ffeb3b", "#f50505"], // black, yellow, red
  },
];

const productsContainer = document.getElementById("products");
productsContainer.innerHTML = ""; // Clear previous content if any
products.forEach((product) => {
  productsContainer.innerHTML += `
    <div class="product-gallery-item">
      <img class="product-gallery-img" src="${product.img}" alt="${
    product.name
  }" />
      <div class="product-gallery-info">
        <div class="product-gallery-name">${product.name}</div>
        <div class="product-gallery-price">${product.price}</div>
        <div class="product-gallery-details">${product.details}</div>
        <div class="product-gallery-colors">
          ${product.colors
            .map(
              (color) =>
                `<span class="color-dot" style="background:${color}"></span>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
});
