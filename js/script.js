const selectList = document.querySelectorAll(".list1");

const serviceCategories = document.querySelectorAll(".sect");

// for (let category of serviceCategories) {
//   if (category.classList.contains("mbagathi")) {
//     category.style.display = "flex";
//   } else {
//     category.style.display = "none";
//   }
// }

// for (let list of selectList) {
//   if (list.textContent.toLowerCase() === "mbagathi hospital") {
//     list.classList.add("selected");
//   }
//   list.addEventListener("click", function () {
//     for (let list of selectList) {
//       if (list.classList.contains("selected")) {
//         list.classList.remove("selected");
//       }
//     }
//     list.classList.add("selected");
//     const listName = list.textContent.toLowerCase();
//     if (listName === "mbagathi hospital") {
//       for (let category of serviceCategories) {
//         if (category.classList.contains("mbagathi")) {
//           category.style.display = "flex";
//         } else {
//           category.style.display = "none";
//         }
//       }
//     } else if (listName === "makadara hospital") {
//       for (let category of serviceCategories) {
//         if (category.classList.contains("makadara")) {
//           category.style.display = "flex";
//         } else {
//           category.style.display = "none";
//         }
//       }
//     } else if (listName === "kenyatta hospital") {
//       for (let category of serviceCategories) {
//         if (category.classList.contains("kenyatta")) {
//           category.style.display = "flex";
//         } else {
//           category.style.display = "none";
//         }
//       }
//     } else if (listName === "Kibera-south hospital") {
//       for (let category of serviceCategories) {
//         if (category.classList.contains("kibra")) {
//           category.style.display = "flex";
//         } else {
//           category.style.display = "none";
//         }
//       }
//     }
//   });
// }
