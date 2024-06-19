document.addEventListener('DOMContentLoaded', function() {
    // Delay the sliding up of the product slider by 1 second after page load
    setTimeout(function() {
        document.getElementById('product-slider').style.bottom = '0';
    }, 1000);
});
