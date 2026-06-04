const selectlist = document.querySelectorAll(".list1");

const serviceCategories = document.querySelectorAll(".sect");

for (let list of selectlist) {
  if (list.textContent.toLocaleLowerCase() === "mbagathi hospital") {
    list.classList.add("selected");
  }
  list.addEventListener("click", function () {
    
    for (let list of selectlist) {
      if (list.classList.contains("selected")) {
        list.classList.remove("selected");
      }
    }
    list.classList.add("selected")
    const listName=list.textContent.toLocaleLowerCase()
    if (listName==="mbagathi"){
        for(let category of serviceCategories){
            if(category.classList.contains("mbagathi")){
                    category.computedStyleMap.display = "flex"
            }
        }
    }


  });
}
// tab.classList.add("active");
//     const tabName=tab.textContent.toLowerCase()
//     if(tabName==="margherita"){
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
 


