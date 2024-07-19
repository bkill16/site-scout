export function getFacilityId(event) {
    const button = event.target;
    const facilityId = button.dataset.facilityId;
    localStorage.setItem("facilityId", facilityId);
    window.location.href = `/info/index.html?facilityId=${facilityId}`;
  }
  