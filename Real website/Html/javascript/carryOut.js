let cart = [];

function addToCart(name, price, image) {
    cart.push({ name, price, image });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                        <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function submitOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some items before submitting.");
        return;
    }
    let orderSummary = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join("\n");
    alert(`Order Submitted! \n\nYour Order:\n${orderSummary}\n\nThank you for ordering!`);
}

function goBack() {
    window.location.href = "carryOutPage.html";
}