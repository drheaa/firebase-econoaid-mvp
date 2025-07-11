// script.js

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loan-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent page reload

      const name = document.getElementById("name").value.trim();
      const amount = document.getElementById("amount").value.trim();
      const purpose = document.getElementById("purpose").value.trim();

      if (!name || !amount || !purpose) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      // Simulate data processing (replace with Firebase logic later)
      console.log("Loan application submitted:");
      console.log(`Name: ${name}`);
      console.log(`Amount: ${amount}`);
      console.log(`Purpose: ${purpose}`);

      alert("Your loan application has been submitted successfully!");

      form.reset(); // clear form fields
    });
  }
});
