import { getSearchResults } from "./getSearchResults";

export async function displaySearchResults() {
  let facilities = [];

  const storedFacilities = sessionStorage.getItem("facilities");
  if (storedFacilities) {
    facilities = JSON.parse(storedFacilities);
  } else {
    facilities = await getSearchResults();
    sessionStorage.setItem("facilities", JSON.stringify(facilities));
  }

  const container = document.querySelector("#facilities-container");

  container.innerHTML = "";

  if (facilities.length === 0) {
    container.innerHTML = "<p>Sorry, no matches were found</p>";
    return;
  }

  facilities.forEach((facility) => {
    const facilityCard = document.createElement("div");
    facilityCard.classList.add("facility-card");

    const facilityName = document.createElement("h3");
    facilityName.classList.add("facility-name");
    facilityName.textContent = facility.name;

    const facilityType = document.createElement("h4");
    facilityType.classList.add("facility-type");
    facilityType.textContent = facility.type;

    facilityCard.appendChild(facilityName);
    facilityCard.appendChild(facilityType);

    const img = document.createElement("img");
    if (facility.images && facility.images.length > 0) {
      img.src = facility.images[0];
      img.alt = `${facility.name} thumbnail`;
    } else {
      img.src = "../images/no_image.jpg";
      img.alt = "No image available";
    }
    img.classList.add("facility-thumbnail");
    facilityCard.appendChild(img);

    const facilityButton = document.createElement("button");
    facilityButton.classList.add("facility-button");
    facilityButton.textContent = "More Info";

    facilityCard.appendChild(facilityButton);
    container.appendChild(facilityCard);
  });

  console.log("Facilities displayed:", facilities.length);
}
