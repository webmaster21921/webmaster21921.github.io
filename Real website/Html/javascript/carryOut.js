document.addEventListener("DOMContentLoaded", function () {
    // Initialize cart array
    const cart = [];
    const cartList = document.getElementById("cart-list");
    const confirmationBox = document.getElementById("confirmation-box");
    const confirmationList = document.getElementById("confirmation-list");


    // Creates event listeners for all menu items
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", function () {
            const itemName = this.innerText.trim(); // Get item name
            cart.push(itemName); //Add item to cart array
            updateCart(); // Updates cart display (function shown below)
        });
    });


    function updateCart() {

        cartList.innerHTML = ""; 

        const fragment = document.createDocumentFragment(); //Use fragment for better performance

        //Create an item on the list for each menu item selected
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            fragment.appendChild(li);
        });


        cartList.appendChild(fragment); 
    }

    //Order Submission
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

    //Order Confirmation
    document.getElementById("confirm-btn").addEventListener("click", function () {
        alert("Order Confirmed!");
        confirmationBox.style.display = "none";
        //Clears the array and updates the display
        cart.length = 0; 
        updateCart();
    });

    //Cancel order confirmation
    document.getElementById("cancel-btn").addEventListener("click", function () {
        confirmationBox.style.display = "none";
    });
});
