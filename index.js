

fetch('/api/products')
    .then(response => response.json())
    .then(products => {

        console.log("Products from database:", products);

        const productCards = document.querySelectorAll('#Product li');

        products.forEach(product => {

   
            const card = document.querySelector(
                `[data-product-id="${product.ProductID}"]`
            ).parentElement;

            card.querySelector('label').innerHTML = `
                <img class="Productimg" src="${card.querySelector('img').src}">
                <br>${product.ProductName}
                <br>R${product.Price.toLocaleString('en-ZA')}
                <br><br>
            `;

        });

    })
    .catch(error => {
        console.error("Error getting products:", error);
    });



const Search = document.getElementById('Search');
const Product = document.querySelectorAll('#Product li');


Search.addEventListener('input', function() {

    const filterValue = Search.value.toLowerCase();

    Product.forEach(item => {

        const text = item.textContent.toLowerCase();

        if (text.includes(filterValue)) {
            item.style.display = '';
        } 
        else {
            item.style.display = 'none'; 
        }

    });

});




const cartButtons = document.querySelectorAll('.add-to-cart-btn');

let cart = JSON.parse(localStorage.getItem('cart')) || [];


cartButtons.forEach(button => {

    button.addEventListener('click', function() {

        const productID = button.dataset.productId;

   
        const existingProduct = cart.find(
            item => item.productID === productID
        );

        if (existingProduct) {

            existingProduct.quantity++;

        } 
        else {

            cart.push({
                productID: productID,
                quantity: 1
            });

        }

 
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Product added to cart!');

    });

});