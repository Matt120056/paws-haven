
// shift-board.js - Saturday shift board
// Class Activity 5, Step 11

const shiftForm = document.querySelector("#shift-form");
const nameInput = document.querySelector("#volunteer-name");
const shiftList = document.querySelector("#shift-list");
const shiftMessage = document.querySelector("#shift-message");
const countText = document.querySelector("#signup-count");

let signedUp = 0;

function addVolunteer(name) {
  const item = document.createElement("li");

  item.textContent = name + " is on the list";

  shiftList.appendChild(item);
}

shiftForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const volunteerName = nameInput.value.trim();

  if (volunteerName === "") {
    shiftMessage.textContent = "Please type your name first.";
    return;
  }

  shiftMessage.textContent = "";

  addVolunteer(volunteerName);

  signedUp = signedUp + 1;

  countText.textContent = signedUp + " volunteers signed up";

  nameInput.value = "";
  nameInput.focus();
});
