export function createImageContainer(facility) {
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("fd-images-container");
  
    if (facility.images && facility.images.length > 0) {
      facility.images.forEach((imgURL, index) => {
        const img = document.createElement("img");
        img.src = imgURL;
        img.alt = `${facility.name} image`;
        if (index === 0) {
          img.classList.add("active");
        }
        imagesContainer.appendChild(img);
      });
    } else {
      const img = document.createElement("img");
      img.src = "../images/no_image.jpg";
      img.alt = `No image available for ${facility.name}`;
      img.classList.add("active");
      imagesContainer.appendChild(img);
    }
  
    return imagesContainer;
  }
  