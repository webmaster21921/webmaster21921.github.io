document.addEventListener("DOMContentLoaded", function () {
    // Initialize cart array and total price
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;

    const cartList = document.getElementById("cart-list");
    const cartTitle = document.getElementById("cart-container-h1");
    const confirmationBox = document.getElementById("confirmation-box");
    const confirmationList = document.getElementById("confirmation-list");

    // Price mapping for categories
    const itemPrices = {
        "Appetizers": 20,
        "Main Dishes": 50,
        "Desserts": 10,
        "Drinks": 10
    };

    // Function to determine item category based on menu structure
    function getCategory(itemName) {
        const sections = document.querySelectorAll(".menu-section");

        for (let section of sections) {
            const sectionTitle = section.querySelector("h3").innerText.trim();
            const items = section.querySelectorAll(".menu-item span");

            for (let item of items) {
                if (item.innerText.trim() === itemName) {
                    return sectionTitle; // Return the section title as the category
                }
            }
        }
        return "Other"; // Default if not found
    }

    // Function to update cart display
    function updateCart() {
        cartList.innerHTML = ""; // Clear the cart list
        cartTitle.textContent = `Cart - Total: $${totalPrice}`;

        const fragment = document.createDocumentFragment(); // Use fragment for better performance

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.classList.add("cart-item");

            const itemText = document.createElement("span");
            itemText.textContent = `${item.name} - $${item.price}`;

            // Create "X" button for removal
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "X";
            removeBtn.classList.add("remove-btn");
            removeBtn.addEventListener("click", function () {
                removeFromCart(index);
            });

            li.appendChild(itemText);
            li.appendChild(removeBtn);
            fragment.appendChild(li);
        });

        cartList.appendChild(fragment);

        // Save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("totalPrice", totalPrice);
    }

    // Restore cart from localStorage on page load
    updateCart();

    // Add event listeners to menu items
    document.querySelectorAll(".menu-item span").forEach(item => {
        item.addEventListener("click", function () {
            const itemName = this.innerText.trim();
            const category = getCategory(itemName);
            const price = itemPrices[category] || 0;

            cart.push({ name: itemName, price: price });
            totalPrice += price;
            updateCart();
        });
    });

    function removeFromCart(index) {
        totalPrice -= cart[index].price; // Deduct price from total
        cart.splice(index, 1); // Remove item from cart array
        updateCart(); // Refresh cart display
    }

    // Order Submission
    document.getElementById("submit-order").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        confirmationList.innerHTML = `<strong>Final Price: $${totalPrice}</strong>`;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            confirmationList.appendChild(li);
        });

        confirmationBox.style.display = "block";
    });

    // Order Confirmation
    document.getElementById("confirm-btn").addEventListener("click", function () {
        window.location.href = "orderForm.html"; // Redirect to the order form page
    });

    // Cancel order confirmation
    document.getElementById("cancel-btn").addEventListener("click", function () {
        confirmationBox.style.display = "none";
    });

});
