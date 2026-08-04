const products = [
    {
        id: 1,
        name: "Sony Wireless Headphones",
        price: 1999,
        image: "images/headphone.jpg",
        description: "Bluetooth 5.3, Noise Cancellation, 40-Hour Battery, Built-in Microphone"
    },
    {
        id: 2,
        name: "Samsung Galaxy Ultra Smart Watch",
        price: 2499,
        image: "images/watch.jpg",
        description: "1.85-inch HD Display, Heart Rate Monitor, SpO2 Sensor, IP68 Water Resistant"
    },
    {
        id: 3,
        name: "Asus TUF Gaming Laptop",
        price: 52999,
        image: "images/laptop.jpg",
        description: "15.6-inch Full HD Display, 13th Gen Intel Core i5-1335H, 16GB RAM, 512GB SSD"
    },
    {
        id: 4,
        name: "JBL Bluetooth Speaker",
        price: 1499,
        image: "images/speaker.jpg",
        description: "20W Output, Deep Bass, IPX7 Waterproof, 12-Hour Playback"
    },
    {
        id: 5,
        name: "Logitech Gaming Mouse",
        price: 899,
        image: "images/gamingmouse.jpg",
        description: "2.4GHz Wireless, Adjustable DPI, Silent Clicks, Ergonomic Design"
    },
    {
        id: 6,
        name: "Razer Keyboard",
        price: 1199,
        image: "images/keyboard.jpg",
        description: "RGB Backlit, Blue Switches, Anti-Ghosting Keys, USB-C Connection"
    },
    {
        id: 7,
        name: "Redmi (Xiaomi) Phone",
        price: 18999,
        image: "images/phone.jpg",
        description: "6.67-inch AMOLED Display, 108MP Camera, 6GB RAM, 128GB Storage"
    },
    {
        id: 8,
        name: "DSLR Camera",
        price: 32999,
        image: "images/camera.jpg",
        description: "24MP Sensor, Full HD Video, Fast Autofocus, Interchangeable Lens"
    }
];
const productContainer = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");
const search = document.getElementById("search");
function displayProducts(productList) {
    productContainer.innerHTML = "";
    productList.forEach(function(product) {
        productContainer.innerHTML += `
            <div class="col-md-3 mb-4">
            <div class="card h-100">
            <img src="${product.image}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="price">₹${product.price}</p>
                <p class="card-text">${product.description}</p>
                <button class="btn btn-primary w-10 addToCart"> Add to Cart</button>
                </div>
            </div>
        </div> `;
});
    const addToCartButtons = document.querySelectorAll(".addToCart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            cartCount.textContent++;
        });
    });
}
displayProducts(products);
search.addEventListener("input", function() {
    const searchText = search.value.toLowerCase();
    const filteredProducts = products.filter(function(product) {
        return (
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText)
        );
    });
displayProducts(filteredProducts);
});
let  URL='https://jsonplaceholder.typicode.com/posts';
localStorage.setItem("name", "Siddhardha");
let name = localStorage.getItem("name");
console.log(name);