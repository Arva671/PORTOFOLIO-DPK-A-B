function addToCart(productName, productPrice) {
    console.log('Menambahkan ke keranjang:', productName, productPrice);
  
    localStorage.setItem('selectedGame', JSON.stringify({ name: productName, price: productPrice }));
  
    window.location.href = 'PAYMENT-SUCCESS.png';

const modal = document.getElementById("myAccountModal");
const btn = document.getElementById("myAccountBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
  }
