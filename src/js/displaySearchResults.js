import { getSearchResults } from "./getSearchResults";

export async function displaySearchResults() {
  const facilities = await getSearchResults();
  const container = document.querySelector("#facilities-container");

  if (!container) {
    console.error("Container element not found.");
    return;
  }

  console.log("Clearing container...");
  container.innerHTML = "";

  facilities.forEach((facility) => {
    const facilityCard = document.createElement("div");
    facilityCard.classList.add("facility-card");

    const facilityName = document.createElement("h3");
    facilityName.classList.add("facility-name");
    facilityName.textContent = facility.name;

    const facilityType = document.createElement("h4");
    facilityType.classList.add("facility-type");
    facilityType.textContent = facility.type;

    const facilityButton = document.createElement("button");
    facilityButton.classList.add("facility-button");
    facilityButton.textContent = "More Info";

    facilityCard.appendChild(facilityName);
    facilityCard.appendChild(facilityType);
    facilityCard.appendChild(facilityButton);

    container.appendChild(facilityCard);
  });

  console.log("Facilities displayed:", facilities.length);
}
