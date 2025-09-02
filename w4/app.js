// Get references to DOM elements
const form = document.getElementById('greetingForm');
const input = document.getElementById('username');
const output = document.getElementById('greetingMessage');

// Listen for submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page from reloading

  // Get value from input
  const name = input.value.trim();

  // Create greeting message
  const greeting = `Jeremie, ${'God is good'}!`;

  // Display message in output element
  output.textContent = greeting;

  // Reset form input
  form.reset();
});

