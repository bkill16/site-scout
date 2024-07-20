export async function getCampsites() {
    const facilityId = localStorage.getItem("facilityId");
    const apiKey = import.meta.env.VITE_REC_KEY;

    if (facilityId) {
        const url = `https://ridb.recreation.gov/api/v1/facilities/${facilityId}/campsites?apikey=${apiKey}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                console.error("Failed to retrieve campsites", response.statusText);
                return null;
            }

            const campsitesData = await response.json();

            const campsites = campsitesData.RECDATA;

            const campsiteDetails = campsites.map(campsite => {
                return {
                    campsiteId: campsite.CampsiteID,
                    campsiteName: campsite.CampsiteName
                };
            });

            return campsiteDetails;
        } catch (error) {
            console.error("Error retrieving campsites", error);
            return null;
        }
    } else {
        console.error('Facility ID or API key is missing');
    }
}
