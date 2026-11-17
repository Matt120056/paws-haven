// script.js - Northern Paws Rescue
// Class Activity 5

const petItems = document.querySelectorAll(".pet-list li");
const petCount = document.querySelector("#pet-count");
const searchInput = document.querySelector("#pet-search");
const searchForm = document.querySelector("#pets form");
const noResults = document.querySelector("#no-results");





function filterPets(searchText) {
    const search = searchText.trim().toLowerCase();
    let shown = 0;
  
    for (const item of petItems) {
      const name = item.querySelector("h3").textContent.toLowerCase();
      if (name.includes(search)) {
        item.classList.remove("hidden");
        shown = shown + 1;
      } else {
        item.classList.add("hidden");
      }
    }
  
    petCount.textContent = "Showing " + shown + " of " + petItems.length + " pets";
    if (shown === 0) {
        noResults.classList.remove("hidden");
      } else {
        noResults.classList.add("hidden");
      }
  }

  searchInput.addEventListener("input", () => {
    filterPets(searchInput.value);
  });
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  
  filterPets("");
