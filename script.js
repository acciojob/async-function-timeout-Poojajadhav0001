//your JS code here. If required.
const form = document.getElementById("form");
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const outputDiv = document.getElementById("output");

    // Helper function to create delay using Promise
    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Async function to display message after delay
    async function displayMessage(msg, ms) {
      await wait(ms);
      outputDiv.textContent = msg;
    }

    // Form submit event
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload
      const message = textInput.value.trim();
      const delay = Number(delayInput.value);

      // Optional: validation
      if (!message) {
        outputDiv.textContent = "Please enter a message!";
        return;
      }
      if (isNaN(delay) || delay < 0) {
        outputDiv.textContent = "Please enter a valid delay!";
        return;
      }

      outputDiv.textContent = "Waiting...";
      displayMessage(message, delay);
    });