import Nav from "./components/NavHeader.svelte";
import Footer from "./components/Footer.svelte";
import { getSearchInput } from "./getSearchInput";
import { displaySearchResults } from "./displaySearchResults";
import { displayFacilityDetails } from "./displayFacilityDetails";
import { displayCampsites } from "./displayCampsiteLinks";
import { displayCampsiteDetails } from "./displayCampsiteDetails";

const nav = new Nav({
  target: document.querySelector(".nav-header"),
});

const footer = new Footer({
  target: document.querySelector("footer"),
});

getSearchInput();

document.addEventListener("DOMContentLoaded", () => {
  const storedSearchInput = sessionStorage.getItem("searchInput");
  const searchInputElement = document.querySelector("#search-input");
  const facilitiesContainer = document.querySelector("#facilities-container");
  const facilityDetailsContainer = document.querySelector(
    "#facility-details-container"
  );
  const campsitesContainer = document.querySelector("#campsites-container")
  const campsiteAttributes = document.querySelector("#campsite-details-container")

  if (storedSearchInput && searchInputElement) {
    searchInputElement.value = storedSearchInput;
  }

  if (facilitiesContainer) {
    if (sessionStorage.getItem("facilities")) {
      displaySearchResults();
    }
  }

  if (facilityDetailsContainer && campsitesContainer) {
    displayFacilityDetails();
    displayCampsites();
  }

  if (campsiteAttributes) {
    displayCampsiteDetails();
  }
});
