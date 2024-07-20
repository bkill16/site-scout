import { getCampsiteDetails } from "./getCampsiteDetails";

export async function displayCampsiteDetails() {
    const campsiteDetails = await getCampsiteDetails();
    const campsiteId = localStorage.getItem("campsiteId");

    if (campsiteDetails) {
        const container = document.querySelector("#campsite-details-container");

        container.innerHTML = `<h2 class='campsite-details-title'>${campsiteId} - Campsite Details</h2>`;

        const attributeList = document.createElement("ul");

        for (const [key, value] of Object.entries(campsiteDetails)) {
            if (value !== null) {
                const listItem = document.createElement("li");
                listItem.classList.add("campsite-detail-item");
                listItem.textContent = `${formatKey(key)}: ${value}`;
                attributeList.appendChild(listItem);
            }
        }

        container.appendChild(attributeList);
    } else {
        console.error("No campsite details found.");
        const container = document.querySelector("#campsite-details-container");
        container.innerHTML = "<p>No attributes found for this site</p>";
    }
}

function formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
}