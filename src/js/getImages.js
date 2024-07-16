export async function getImages(facilityId) {
    const apiKey = import.meta.env.VITE_REC_KEY
    const url = `https://ridb.recreation.gov/api/v1/facilities/${facilityId}/media?apikey=${apiKey}`;

    try {
        const response = await fetch(url)
        
        if(!response.ok) {
            console.error(`Failed to retrieve images for facility ${facilityId}`)
            return [];
        }

        const data = await response.json();
        return data.RECDATA
    } catch (error) {
        console.error(`Failed to retrieve images for facility ${facilityId}`, error)
    }
}