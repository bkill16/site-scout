import { geocode } from "./geocodeLocation";

export function getSearchInput() {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const searchPageButton = document.querySelector("#search-button");
    if (searchPageButton) {
      searchPageButton.addEventListener("click", () => {
        const searchPageInput = document.querySelector("#search-input").value;
        console.log("Search button clicked, input value:", searchPageInput);
        localStorage.setItem("searchInput", searchPageInput);
        geocode();
      });
    } else {
      console.error("Search button not found");
    }
  });
}
