import { getFacilityDetails } from "./getFacilityDetails.js";
import { createImageContainer } from "./imageCarousel.js";

export async function displayFacilityDetails() {
  let facility = await getFacilityDetails();
  const container = document.querySelector("#facility-details-container");
  container.innerHTML = "";

  if (facility) {
    const facilityName = document.createElement("h1");
    facilityName.classList.add("fd-name");
    facilityName.textContent = facility.name;

    const facilityType = document.createElement("h2");
    facilityType.classList.add("fd-type");
    facilityType.textContent = facility.type;

    const imagesContainer = createImageContainer(facility);

    const facilityDescription = document.createElement("div");
    facilityDescription.classList.add("fd-description");
    facilityDescription.innerHTML = facility.description;

    container.append(facilityName);
    container.append(facilityType);
    container.append(imagesContainer);
    container.append(facilityDescription);
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Facility details could not be loaded.";
    container.append(errorMessage);
  }
}