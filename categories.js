function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
  }

  function filterProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
      const name = card.getAttribute("data-name").toLowerCase();
      card.style.display = name.includes(input) ? "block" : "none";
    });
  }

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.productName === product.productName);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.productName} has been added to your cart.`);
  }

  function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.product-card button');

    addToCartButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const productCards = document.querySelectorAll('.product-card');
        const productCard = productCards[index];

        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent.replace(/[^\d]/g, '');
        const productImage = productCard.querySelector('img').src;

        const product = {
          productName,
          price: parseInt(productPrice),
          img: productImage,
          quantity: 1
        };

        addToCart(product);
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (event) {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      menu.classList.remove('show');
    }
  });

  window.onload = () => {
    setupAddToCartButtons();
  };