import { geocode } from "./geocodeLocation";

export function getSearchInput() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchPageButton = document.querySelector("#search-button");
    if (searchPageButton) {
      searchPageButton.addEventListener("click", () => {
        const searchPageInput = document.querySelector("#search-input").value;
        localStorage.setItem("searchInput", searchPageInput);
        geocode();
      });
    } else {
      console.error("Search button not found");
    }
  });
}
