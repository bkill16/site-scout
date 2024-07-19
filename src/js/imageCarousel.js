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
      createCarousel(imagesContainer);
    } else {
      const img = document.createElement("img");
      img.src = "../images/no_image.jpg";
      img.alt = `No image available for ${facility.name}`;
      img.classList.add("active");
      imagesContainer.appendChild(img);
    }
  
    return imagesContainer;
  }
  
  function createCarousel(imagesContainer) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "<";
    prevButton.classList.add("prev-button");
  
    const nextButton = document.createElement("button");
    nextButton.textContent = ">";
    nextButton.classList.add("next-button");
  
    const controlsContainer = document.createElement("div");
    controlsContainer.classList.add("carousel-controls");
    controlsContainer.appendChild(prevButton);
    controlsContainer.appendChild(nextButton);
  
    imagesContainer.appendChild(controlsContainer);
  
    let currentImageIndex = 0;
    const images = imagesContainer.querySelectorAll("img:not(.prev-button):not(.next-button)");
  
    const showImage = (index) => {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    };
  
    prevButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });
  
    nextButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });
  }
  