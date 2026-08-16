
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartItemCount = document.getElementById('cartItemCount');



fetch('/api/products')

    .then(response => response.json())

    .then(products => {

        console.log("Products from database:", products);

        displayCart(products);

    })

    .catch(error => {

        console.error("Error getting products:", error);

    });




function displayCart(products) {

   let itemCount = 0;

    // Clear cart display
    cartItems.innerHTML = '';

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = '<p>Your basket is empty.</p>';

        cartTotal.textContent = '0.00';

        return;
    }



    cart.forEach(cartItem => {

        itemCount += cartItem.quantity;

        // Find product in database
        const product = products.find(
            product => product.ProductID == cartItem.productID
        );



        if (!product) {
            return;
        }


        const itemTotal = product.Price * cartItem.quantity;


        total += itemTotal;


        const item = document.createElement('div');

        item.innerHTML = `
            <h3>${product.ProductName}</h3>

            <p>
                Price: R${product.Price.toFixed(2)}
            </p>

            <p>
                Quantity: ${cartItem.quantity}
            </p>

            <p>
                Total: R${itemTotal.toFixed(2)}
            </p>

            <hr>
        `;



        cartItems.appendChild(item);

    });
    
    cartItemCount.textContent = itemCount;



    cartTotal.textContent = total.toFixed(2);

}