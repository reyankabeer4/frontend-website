let bar = document.querySelector(".bar");
bar?.addEventListener("click", () => {
  let navItems = document.querySelector(".navItems");
  navItems?.classList.toggle("active");
});

let profilepic = document.querySelector(".profile-pic");
profilepic?.addEventListener("click", () => {
  let profilemenu = document.querySelector(".profile-menu");
  profilemenu?.classList.toggle("menu-active");
});

let product = [
  {
    title: "Shoes",
    description: "Be Unique",
    price: "$30.0",
    image: "./assets/images/sofa.png",
  },
  {
    title: "Watch",
    description: "Times to make difference",
    price: "$10.0",
    image: "./assets/images/sofa.png",
  },
  {
    title: "Wallet",
    description: "Keep card safe",
    price: "$5.00",
    image: "./assets/images/wallet.png",
  },
  {
    title: "T-Shirt",
    description: "Summer Comfort",
    price: "$2.00",
    image: "./assets/images/sofa.png",
  },
  {
    title: "Jeans",
    description: "Denim Style",
    price: "$7.00",
    image: "./assets/images/ladies-jeans.jpg",
  },
];

// Get product index from URL
let urlParams = new URLSearchParams(window.location.search);
let productIndex = parseInt(urlParams.get("p")); // make sure it's a number
let productimg = document.getElementById("product-img");
let pPrice = document.getElementById("p-price");
let pTitle = document.getElementById("p-title");

let basePrice = parseFloat(product[productIndex].price.replace("$", ""));
let quantity = document.getElementById("quantity");
let num = parseInt(quantity.innerHTML);

// Initial setup
productimg.src = product[productIndex].image;
pTitle.innerHTML = product[productIndex].title;
pPrice.innerHTML = "$" + (basePrice * num).toFixed(2);

function add_to_cart() {
  alert("Added To Cart");
}

let dec = document.getElementById("dec");
let inc = document.getElementById("inc");

dec.addEventListener("click", () => {
  if (num > 1) {
    num--;
    quantity.innerHTML = num;
    pPrice.innerHTML = "$" + (basePrice * num).toFixed(2);
  }
});

inc.addEventListener("click", () => {
  num++;
  quantity.innerHTML = num;
  pPrice.innerHTML = "$" + (basePrice * num).toFixed(2);
});
