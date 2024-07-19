import { getFacilityDetails } from "./getFacilityDetails.js";
import { createImageContainer } from "./imageCarousel.js";

export async function displayFacilityDetails() {
  let facility = await getFacilityDetails();
  const container = document.querySelector("#facility-details-container");
  container.innerHTML = "";

  const facilityName = document.createElement("h1");
  facilityName.classList.add("fd-name");
  facilityName.textContent = facility.name;

  const facilityType = document.createElement("h2");
  facilityType.classList.add("fd-type");
  facilityType.textContent = facility.type;

  const imagesContainer = createImageContainer(facility);

  container.append(facilityName);
  container.append(facilityType);
  container.append(imagesContainer);
}
