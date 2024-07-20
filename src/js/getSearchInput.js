import { geocode } from "./geocodeLocation";
import { displaySearchResults } from "./displaySearchResults";

export function getSearchInput() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchPageButton = document.querySelector("#search-button");
    const distanceButtons = document.querySelectorAll(".distance-button");
    let selectedRadius = 25;

    const defaultButton = document.querySelector('[data-radius="25"]');
    if (defaultButton) {
      defaultButton.classList.add('selected');
      console.log("Default button selected");
    }

    distanceButtons.forEach(button => {
      button.addEventListener("click", () => {
        distanceButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedRadius = parseInt(button.getAttribute("data-radius"));

        localStorage.setItem("radius", selectedRadius);
        sessionStorage.setItem("radius", selectedRadius);
      });
    });

    if (searchPageButton) {
      searchPageButton.addEventListener("click", async () => {
        const searchPageInput = document.querySelector("#search-input").value;

        localStorage.setItem("searchInput", searchPageInput);
        sessionStorage.setItem("searchInput", searchPageInput);
        sessionStorage.removeItem("facilities");

        await geocode();
        displaySearchResults();
      });
    }
  });
}
