document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartList = document.getElementById("cart-list");
    const confirmationBox = document.getElementById("confirmation-box");
    const confirmationList = document.getElementById("confirmation-list");


    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", function () {
            const itemName = this.innerText.trim();
            cart.push(itemName);
            updateCart();
        });
    });


    function updateCart() {

        cartList.innerHTML = "";

        if (cart.length > 0) {
            const cartTitle = document.createElement("h2");
            cartTitle.textContent = "Cart";
            cartList.appendChild(cartTitle);
        }


        const fragment = document.createDocumentFragment();

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            fragment.appendChild(li);
        });

        cartList.appendChild(fragment); 
    }


    document.getElementById("submit-order").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        confirmationList.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            confirmationList.appendChild(li);
        });

        confirmationBox.style.display = "block";
    });

    document.getElementById("confirm-btn").addEventListener("click", function () {
        alert("Order Confirmed!");
        confirmationBox.style.display = "none";
        cart.length = 0; 
        updateCart();
    });


    document.getElementById("cancel-btn").addEventListener("click", function () {
        confirmationBox.style.display = "none";
    });
});
