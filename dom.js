const product = [
    {
        id: 0,
        image: './1.jpg',
        title: 'z Flip Foltable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: './2.jpg',
        title: 'Air mimsaha',
        price: 60,
    },
    {
        id: 2,
        image: './3.jpg',
        title: 'camera wawaw',
        price: 230,
    },
    {
        id: 3,
        image: './4.jpg',
        title: 'mdala ela chemch',
        price: 100,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')
var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);  // Removes the item at index 'a'
    displaycart();  // Re-render the cart after removal
}

function displaycart() {
    let total = 0; // Initialize total outside of the loop
    document.getElementById("count").innerHTML = cart.length; // Update the cart item count

    if (cart.length === 0) {
        // If the cart is empty, show a message and reset the total
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        // Map over the cart items to display them
        document.getElementById("cartItem").innerHTML = cart.map((items, index) => {
            const { image, title, price } = items;
            total += price;  // Accumulate the total price

            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src="${image}" />
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');  // Join all cart items into one string to render

        // Update the total after rendering all items
        document.getElementById("total").innerHTML = "$ " + total + ".00";
    }
}

