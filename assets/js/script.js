let bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  let navItems = document.querySelector(".navItems");
  navItems.classList.toggle("active");
});

let profilepic = document.querySelector(".profile-pic");
profilepic.addEventListener("click", () => {
  let profilemenu = document.querySelector(".profile-menu");
  profilemenu.classList.toggle("menu-active");
});

let allProducts = document.getElementById("cards-container");


let product = [
  { title: "Shoes", description: "Be Unique", price: "$30.0",image:"./assets/images/sofa.png" },
  { title: "Watch", description: "Times to make difference", price: "$10.0",image:"./assets/images/sofa.png" },
  { title: "Wallet", description: "Keep card safe", price: "$5.00",image:"./assets/images/wallet.png" },
  { title: "T-Shirt", description: "Summer Comfort", price: "$2.00",image:"./assets/images/sofa.png" },
  { title: "T-Shirt", description: "Summer Comfort", price: "$2.00",image:"./assets/images/sofa.png" },
  { title: "Jeans", description: "Denim Style", price: "$7.00",image:"./assets/images/ladies-jeans.jpg" },
];


for (let i = 0; i < product.length; i++) {
  allProducts.innerHTML += `<div class="card">
          <img src="${product[i].image}" alt="" />
          <div class="card-content">
            <h2 class="p-title">${product[i].title}</h2>
            <p>${product[i].description}</p>
            <p id='p-price'>${product[i].price}</p>
            <div class='d-flex'>
            <a href='product-details.html?p=${i}' id='readBtn'>Read</a>
            <button onclick='add_to_cart()' id='cartBtn'>Cart</button>
            </div>
          </div>
        </div>`;
}

function add_to_cart() {
  alert("Added To Cart");
}

