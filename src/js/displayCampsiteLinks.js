import { getCampsites } from "./getCampsites";
import { getCampsiteId } from "./getCampsiteId";

export async function displayCampsites() {
  const campsites = await getCampsites();

  if (campsites) {
    const container = document.querySelector("#campsites-container");

    container.innerHTML = "";

    container.innerHTML = "<h2 class='campsites-title'>Campsites</h2>"

    campsites.forEach((campsite) => {
      const campsiteCard = document.createElement("div");
      campsiteCard.classList.add("campsite-card");

      const campsiteName = document.createElement("button");
      campsiteName.classList.add("campsite-name");
      campsiteName.textContent = campsite.campsiteName;
      campsiteName.dataset.campsiteId = campsite.campsiteId;

      campsiteName.addEventListener("click", getCampsiteId);

      campsiteCard.appendChild(campsiteName);

      container.appendChild(campsiteCard);
    });
  } else {
    const container = document.querySelector("#campsites-container")
    container.innerHTML = "<p>No campsites found</p>"
  }
}
