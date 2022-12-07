
// Événement d'appel à la programmation fonctionnelle de recherche de recettes

const searchInput = document.querySelector("#search")

const searchEvent = searchInput.addEventListener("input", (e) => {
    const contentInput = e.target.value.toLowerCase()
    if(contentInput.length > 2) {
        return searchRecipes(contentInput)
    }

    if(contentInput.length < 2) {
        return displayRecipes(recipes)
    }
})

// Dropdowns : événement d'appel

// const dropdowns = document.querySelectorAll(".dropdown")

// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector(".select")
//     const menu = dropdown.querySelector(".menu")
    
//     select.addEventListener("click", () => {
//         menu.classList.toggle("menu_open")
       
//     })
// })

const ingredientsDropdown = document.querySelector("#select_ingredients")
ingredientsDropdown.addEventListener("click",() => {
    const inputDropdown = document.querySelector("#dropdown_ingredients")
    const arrow = document.querySelector("#arrow_dropdown_ingredients")
    const menu = document.querySelector("#menu_ingredients")
    const nextButton = document.querySelector("#button_appareils")

    inputDropdown.style.display = "block"
    arrow.style.display = "block"
    menu.classList.toggle("menu_open")
    nextButton.classList.add("modify_position")
})

const ingredientsArrow = document.querySelector("#arrow_dropdown_ingredients")
ingredientsArrow.addEventListener("click", () => {
    const inputDropdown = document.querySelector("#dropdown_ingredients")
    const menu = document.querySelector("#menu_ingredients")
    const nextButton = document.querySelector("#button_appareils")

    inputDropdown.style.display = "none"
    ingredientsArrow.style.display = "none"
    menu.classList.toggle("menu_open")
    nextButton.classList.remove("modify_position")
})

const appareilsDropdown = document.querySelector("#select_appareils")
appareilsDropdown.addEventListener("click",() => {
    const inputDropdown = document.querySelector("#dropdown_appareils")
    const arrow = document.querySelector("#arrow_dropdown_appareils")
    const menu = document.querySelector("#menu_appareils")
    const nextButton = document.querySelector("#button_ustensils")

    inputDropdown.style.display = "block"
    arrow.style.display = "block"
    menu.classList.toggle("menu_open")
    nextButton.classList.add("modify_position")
})

const appareilsArrow = document.querySelector("#arrow_dropdown_appareils")
appareilsArrow.addEventListener("click", () => {
    const inputDropdown = document.querySelector("#dropdown_appareils")
    const menu = document.querySelector("#menu_appareils")
    const nextButton = document.querySelector("#button_ustensils")

    inputDropdown.style.display = "none"
    appareilsArrow.style.display = "none"
    menu.classList.toggle("menu_open")
    nextButton.classList.remove("modify_position")
})

const ustensilsDropdown = document.querySelector("#select_ustensils")
ustensilsDropdown.addEventListener("click",() => {
    const inputDropdown = document.querySelector("#dropdown_ustensils")
    const arrow = document.querySelector("#arrow_dropdown_ustensils")
    const menu = document.querySelector("#menu_ustensils")

    inputDropdown.style.display = "block"
    arrow.style.display = "block"
    menu.classList.toggle("menu_open")
})

const ustensilsArrow = document.querySelector("#arrow_dropdown_ustensils")
ustensilsArrow.addEventListener("click", () => {
    const inputDropdown = document.querySelector("#dropdown_ustensils")
    const menu = document.querySelector("#menu_ustensils")

    inputDropdown.style.display = "none"
    appareilsArrow.style.display = "none"
    menu.classList.toggle("menu_open")
})