export function getCampsiteId(event) {
    const button = event.target;
    const campsiteId = button.dataset.campsiteId;
    localStorage.setItem("campsiteId", campsiteId);
    window.location.href = `/campsite/index.html?campsiteId=${campsiteId}`;
  }