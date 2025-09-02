//Get the form from the HTML. Listen for a submit event. When submitted, first prevent the page from reloading." 

// Get references to DOM elements

const form = document.getElementById('greetingForm');
const input = document.getElementById('username');
const output = document.getElementById('greetingMessage');

// Listen for submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page from reloading

  // Get value from input
  const name = input.value.trim("Jeremie");

  // Create greeting message
  const greeting = `Jeremie, ${'God is good'}!`;

  // Display message in output element
  output.textContent = greeting;

  // Reset form input
  form.reset();
});

// I asked Google Gemini "Why is my page cannot read properties of null? Here is my code  const name = document.getElementById('Jeremie').value;
// AI responded "When you see the error "Cannot read properties of null" in your JavaScript code, especially with document.getElementById(), it means that the element you are trying to access does not exist in the HTML at the time the script is run."
// So I had to add "Jeremie" in the Input text Id