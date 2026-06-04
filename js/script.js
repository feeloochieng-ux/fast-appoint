const selectTabs = document.querySelectorAll(".list");

const services = document.querySelectorAll(".content");

for (let service of services) {
  if (service.classList.contains("mbaga")) {
    service.style.display = "flex";
  } else {
    service.style.display = "none";
  }
}
