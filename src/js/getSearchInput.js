export function getHomeSearchInput() {
  document.addEventListener("DOMContentLoaded", () => {
    const homeSearchButton = document.querySelector("#home-button");
    if (homeSearchButton) {
      homeSearchButton.addEventListener("click", () => {
        const homeSearchInput = document.querySelector("#home-search").value;
        localStorage.setItem("searchInput", homeSearchInput);
        window.location.href = "/search/index.html";
      });
    }
  });
}

export function getSearchPageInput() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchPageButton = document.querySelector("#search-button");
    if (searchPageButton) {
      searchPageButton.addEventListener("click", () => {
        const searchPageInput = document.querySelector("#search-input").value;
        localStorage.setItem("searchInput", searchPageInput);
      });
    }
  });
}
