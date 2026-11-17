// script.js - Northern Paws Rescue
// Class Activity 5

const petItems = document.querySelectorAll(".pet-list li");
const petCount = document.querySelector("#pet-count");

petCount.textContent = "Showing " + petItems.length + " of " + petItems.length + " pets";

