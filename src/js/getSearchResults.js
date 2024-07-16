async function getSearchResults() {
  const lat = localStorage.getItem("lat");
  const lng = localStorage.getItem("lng");
  const apiKey = import.meta.env.VITE_REC_KEY;
  const radius = 25;
  const facilityType = "Campground";

  if (lat && lng) {
    const url = `https://ridb.recreation.gov/api/v1/facilities?latitude=${lat}&longitude=${lng}&radius=${radius}&apikey=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok && data.RECDATA) {
        const facilities = data.RECDATA.filter(
          (facility) =>
            facility.FacilityTypeDescription &&
            facility.FacilityTypeDescription.includes(facilityType)
        ).map((facility) => ({
          name: facility.FacilityName,
          type: facility.FacilityTypeDescription,
        }));

        return facilities;
      } else {
        console.error("Failed to retrieve facilities");
      }
    } catch (error) {
      console.error("Error retrieving facilities:", error);
    }
  } else {
    console.error("Latitude and Longitude not found in local storage");
  }
  return [];
}
