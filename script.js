
  document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the form from submitting normally

    // Optional: you can add basic validation or authentication checks here

    // Redirect to your next page
    window.location.href = './e-commerce/index.html'; // Change to your actual next page
  });

  