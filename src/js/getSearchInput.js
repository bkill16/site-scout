import { geocode } from "./geocodeLocation";
import { displaySearchResults } from "./displaySearchResults";

export function getSearchInput() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchPageButton = document.querySelector("#search-button");
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
