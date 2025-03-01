let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h2').innerText;
        const productPrice = product.querySelector('p').innerText;

        const item = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cart.push(item);
        updateCartCount();
    });
});

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}