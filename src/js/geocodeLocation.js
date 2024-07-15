console.log('Google API Key at top level:', import.meta.env.VITE_GOOGLE_KEY);

export async function geocode() {
  const searchInput = localStorage.getItem("searchInput");
  const apiKey = import.meta.env.VITE_GOOGLE_KEY;
  console.log('Google API Key:', apiKey);
  console.log('Search Input:', searchInput);

  if (searchInput && apiKey) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchInput)}&key=${apiKey}`;
    console.log('Geocoding URL:', url);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK") {
        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;
        console.log("Lat:", latitude);
        console.log("Lng:", longitude);
      } else {
        console.error("Error getting latitude and longitude:", data.status);
      }
    } catch (error) {
      console.error("Error getting latitude and longitude:", error);
    }
  } else {
    console.error("Search input or API key is missing");
  }
}
