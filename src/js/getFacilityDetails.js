import { getImages } from "./getImages";

export async function getFacilityDetails() {
    const facilityId = localStorage.getItem("facilityId");
    const apiKey = import.meta.env.VITE_REC_KEY;

    if (facilityId) {
        const url = `https://ridb.recreation.gov/api/v1/facilities/${facilityId}?apikey=${apiKey}`;
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                console.error(`Failed to retrieve facility details for facilityId ${facilityId}`, response.statusText);
                return null;
            }

            const facility = await response.json();
            const facilityImages = await getImages(facility.FacilityID);

            return {
                id: facility.FacilityID,
                name: facility.FacilityName,
                type: facility.FacilityTypeDescription,
                images: facilityImages.map((img) => img.URL),
                description: facility.FacilityDescription
            };
        } catch (error) {
            console.error("No data found for this facility", error);
            return null;
        }
    } else {
        console.error("No facilityId found in localStorage.");
        return null;
    }
}
