import Nav from "./components/NavHeader.svelte";
import Footer from "./components/Footer.svelte";
import { getSearchInput } from "./getSearchInput";
import { displaySearchResults } from "./displaySearchResults";

const nav = new Nav({
  target: document.querySelector(".nav-header"),
});

const footer = new Footer({
  target: document.querySelector("footer"),
});

getSearchInput();

document.addEventListener("DOMContentLoaded", () => {
  const storedSearchInput = sessionStorage.getItem("searchInput");
  if (storedSearchInput) {
    document.querySelector("#search-input").value = storedSearchInput;
  }

  if (sessionStorage.getItem("facilities")) {
    displaySearchResults();
  }
});
