export function getRadius() {
    const radiusButton = document.querySelector(".distance-button");
    document.addEventListener("click", radiusButton => {
        console.log("radius button clicked")
    })
}