const selectListing= document.querySelectorAll(".list");

const services = document.querySelectorAll(".content");

for (let service of services) {
  if (service.classList.contains("mbaga")) {
    service.style.display = "flex";
  } else {
    service.style.display = "none";
  }
}
// for (let list of selectListing) {
//   if (list.textContent.toLowerCase() === "mbagathi hospital") {
//     list.classList.add("selected");
//   }
//   list.addEventListener("click", function () {
//         for (let list of selectListings) {
//       if (list.classList.contains("selected")) {
//         list.classList.remove("selected");
//       }
//     }
//     list.classList.add("selected");
//     const listName=list.textContent.toLowerCase()
//     if(listName==="Makadara Hospital"){
//         for (let category of pizzaCategories) {
//   if (category.classList.contains("margherita")) {
//     category.style.display = "flex";
//   } else {
//     category.style.display = "none";
//   }
// }
//     }
//     else if(tabName==="pepperoni"){
//         for (let category of pizzaCategories) {
//   if (category.classList.contains("pepperoni")) {
//     category.style.display = "flex";
//   } else {
//     category.style.display = "none";
//   }
// }
//     }
//     else if(tabName==="chicken pizza"){
//   for (let category of pizzaCategories) {
//   if (category.classList.contains("chicken_pizza")) {
//     category.style.display = "flex";
//   } else {
//     category.style.display = "none";
//   }
// }
//     }
//     else if(tabName==="meat lover's pizza"){
       
//         for (let category of pizzaCategories) {
//   if (category.classList.contains("meat")) {
//     category.style.display = "flex";
//   } else {
//     category.style.display = "none";
//   }
// }
//     }
//      else if(tabName==="hawaiian"){
       
//         for (let category of pizzaCategories) {
//   if (category.classList.contains("hawaiian")) {
//     category.style.display = "flex";
//   } else {
//     category.style.display = "none";
//   }
// }
//     }
//   });

// }



