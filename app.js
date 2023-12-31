let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let checkout = document.getElementById("checkout");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Hot Brew Coffee",
    image: "1.avif",
    price: 145,
  },
  {
    id: 2,
    name: "Cold Brew Coffee",
    image: "2.avif",
    price: 195,
  },
  {
    id: 3,
    name: "Sweet Cold Brew",
    image: "4.avif",
    price: 200,
  },
  {
    id: 4,
    name: "Iced Cappucino",
    image: "5.avif",
    price: 185,
  },
  {
    id: 5,
    name: "Iced White Mocha",
    image: "6.avif",
    price: 210,
  },
  {
    id: 6,
    name: "Iced Caramel Latte",
    image: "8.avif",
    price: 210,
  },
  {
    id: 7,
    name: "Reese's Choco PB Frappe",
    image: "9.avif",
    price: 275,
  },
  {
    id: 8,
    name: "Hershey's Classic Mocha Frappe",
    image: "10.avif",
    price: 245,
  },
  {
    id: 9,
    name: "Hershey's Mocha S'mores Frappe",
    image: "12.avif",
    price: 245,
  },
  {
    id: 10,
    name: "Hot Tea",
    image: "13.avif",
    price: 155,
  },
  {
    id: 11,
    name: "Iced Tea",
    image: "14.avif",
    price: 170,
  },
  {
    id: 12,
    name: "Lemon Lychee Tea",
    image: "15.avif",
    price: 180,
  },
  {
    id: 13,
    name: "Cookie Crumble Frappe",
    image: "17.avif",
    price: 220,
  },
  {
    id: 14,
    name: "Dark Chocolate Frappe",
    image: "18.avif",
    price: 205,
  },
  {
    id: 15,
    name: "Caramel Vanilla Frappe",
    image: "19.avif",
    price: 195,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>`;
    list.appendChild(newDiv);
  });
}
initApp();

initApp();
