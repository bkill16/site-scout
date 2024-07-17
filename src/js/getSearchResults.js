import { getImages } from "./getImages";

export async function getSearchResults() {
  const lat = localStorage.getItem("lat");
  const lng = localStorage.getItem("lng");
  const apiKey = import.meta.env.VITE_REC_KEY;
  const radius = 25;
  const facilityType = "Campground";

  if (lat && lng) {
    const url = `https://ridb.recreation.gov/api/v1/facilities?latitude=${lat}&longitude=${lng}&radius=${radius}&apikey=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Failed to retrieve facilities:", response.statusText);
        return [];
      }
      const data = await response.json();
      if (data.RECDATA) {
        const facilities = await Promise.all(
          data.RECDATA.filter(
            (facility) =>
              facility.FacilityTypeDescription &&
              facility.FacilityTypeDescription.includes(facilityType)
          ).map(async (facility) => {
            const images = await getImages(facility.FacilityID);
            return {
              id: facility.FacilityID, // Include the facilityId
              name: facility.FacilityName,
              type: facility.FacilityTypeDescription,
              images: images.map((img) => img.URL),
            };
          })
        );
        return facilities;
      } else {
        console.error("No facilities found in the response data");
      }
    } catch (error) {
      console.error("Error retrieving facilities:", error);
    }
  } else {
    console.error("Latitude and Longitude not found in local storage");
  }
  return [];
}
