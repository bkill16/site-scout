document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 768) {
        initializeCarousel();
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            initializeCarousel();
        } else {
            destroyCarousel();
        }
    });
});

function initializeCarousel() {
    const containers = document.querySelectorAll(".fd-images-container .image-wrapper");
    containers.forEach(container => {
        $(container).slick();
    });
}

function destroyCarousel() {
    const containers = document.querySelectorAll(".fd-images-container .image-wrapper");
    containers.forEach(container => {
        if ($(container).hasClass('slick-initialized')) {
            $(container).slick('unslick');
        }
    });
}
