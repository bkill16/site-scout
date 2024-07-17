document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#facilities-container");

  container.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("facility-button")) {
      window.location.href = "/info/index.html";
    }
  });
});
