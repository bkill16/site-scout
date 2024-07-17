document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#facilities-container");

  container.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("facility-button")) {
      const facilityId = event.target.dataset.facilityId;
      localStorage.setItem("selectedFacilityId", facilityId); // Optional: Still save it in local storage if needed
      window.location.href = `/info/index.html?facilityId=${facilityId}`; // Add facilityId as a query parameter
    }
  });
});
