export async function getCampsiteDetails() {
    const campsiteId = localStorage.getItem("campsiteId");
    const apiKey = import.meta.env.VITE_REC_KEY;

    if (campsiteId) {
        const url = `https://ridb.recreation.gov/api/v1/campsites/${campsiteId}/attributes?apikey=${apiKey}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                console.error(`Failed to retrieve campsite attributes for campsiteId ${campsiteId}`, response.statusText);
                return null;
            }

            const attributesData = await response.json();
            const attributes = attributesData.RECDATA;

            const campsiteDetails = {
                picnicTable: getAttributeValue(attributes, "Picnic Table"),
                shade: getAttributeValue(attributes, "Shade"),
                siteLength: getAttributeValue(attributes, "Site Length"),
                campfireAllowed: getAttributeValue(attributes, "Campfire Allowed"),
                capacitySizeRating: getAttributeValue(attributes, "Capacity/Size Rating"),
                drivewayEntry: getAttributeValue(attributes, "Driveway Entry"),
                firePit: getAttributeValue(attributes, "Fire Pit"),
                maxNumPeople: getAttributeValue(attributes, "Max Num of People"),
                maxNumVehicles: getAttributeValue(attributes, "Max Num of Vehicles"),
                maxVehicleLength: getAttributeValue(attributes, "Max Vehicle Length"),
                tentPad: getAttributeValue(attributes, "Tent Pad"),
                tentPadLength: getAttributeValue(attributes, "Tent Pad Length"),
                tentPadWidth: getAttributeValue(attributes, "Tent Pad Width")
            };

            return campsiteDetails;
        } catch (error) {
            console.error(`Error retrieving campsite attributes for campsiteId ${campsiteId}`, error);
            return null;
        }
    } else {
        console.error('Campsite ID or API key is missing');
        return null;
    }
}

function getAttributeValue(attributes, attributeName) {
    const attribute = attributes.find(attr => attr.AttributeName === attributeName);
    return attribute ? attribute.AttributeValue : null;
}
