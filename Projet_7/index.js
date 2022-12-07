
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

const ingredientsDropdown = document.querySelector("#select_ingredients")
ingredientsDropdown.addEventListener("click",() => {
    const inputDropdown = document.querySelector("#dropdown_ingredients")
    const arrow = document.querySelector("#arrow_dropdown_ingredients")
    const menu = document.querySelector("#menu_ingredients")
    const nextButton = document.querySelector("#button_appareils")
    const ustensilsArrow = document.querySelector("#arrow_dropdown_ustensils")
    const buttonArrow = document.querySelector("#arrow_button_ingredient")
    const recipeContainer = document.querySelector(".recipe_container")

    ingredientsDropdown.style.display = "none"
    buttonArrow.classList.add("hidden")
    inputDropdown.style.display = "block"
    arrow.style.display = "block"
    menu.classList.toggle("menu_open")
    menu.classList.add("modify_position_menu_open")
    nextButton.classList.add("modify_position")
    ustensilsArrow.style.display = "none"
    recipeContainer.style.marginTop = "100px"
})

const ingredientsArrow = document.querySelector("#arrow_dropdown_ingredients")
ingredientsArrow.addEventListener("click", () => {
    const inputDropdown = document.querySelector("#dropdown_ingredients")
    const menu = document.querySelector("#menu_ingredients")
    const nextButton = document.querySelector("#button_appareils")
    const ingredientsDropdown = document.querySelector("#select_ingredients")
    const buttonArrow = document.querySelector("#arrow_button_ingredient")

    ingredientsDropdown.style.display = "block"
    buttonArrow.classList.remove("hidden")
    buttonArrow.classList.add("arrow_initial_position")
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
    const buttonArrow = document.querySelector("#arrow_button_appareils")
    const ustensilsArrow = document.querySelector("#arrow_dropdown_ustensils")

    appareilsDropdown.style.display = "none"
    buttonArrow.classList.add("hidden")
    inputDropdown.style.display = "block"
    arrow.style.display = "block"
    menu.classList.toggle("menu_open")
    menu.classList.add("modify_position_menu_open")
    nextButton.classList.add("modify_position")
    ustensilsArrow.style.display = "none"
})

const appareilsArrow = document.querySelector("#arrow_dropdown_appareils")
appareilsArrow.addEventListener("click", () => {
    const inputDropdown = document.querySelector("#dropdown_appareils")
    const menu = document.querySelector("#menu_appareils")
    const nextButton = document.querySelector("#button_ustensils")
    const appareilsDropdown = document.querySelector("#select_appareils")
    const buttonArrow = document.querySelector("#arrow_button_appareils")

    appareilsDropdown.style.display = "block"
    buttonArrow.classList.remove("hidden")
    buttonArrow.classList.add("arrow_initial_position")
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
    const buttonArrow = document.querySelector("#arrow_button_ustensils")

    ustensilsDropdown.style.display = "none"
    buttonArrow.classList.add("hidden")
    inputDropdown.style.display = "block"
    arrow.style.display = "block"
    menu.classList.toggle("menu_open")
    menu.classList.add("modify_position_menu_open")
})

const ustensilsArrow = document.querySelector("#arrow_dropdown_ustensils")
ustensilsArrow.addEventListener("click", () => {
    const inputDropdown = document.querySelector("#dropdown_ustensils")
    const menu = document.querySelector("#menu_ustensils")
    const ustensilsDropdown = document.querySelector("#select_ustensils")
    const buttonArrow = document.querySelector("#arrow_button_ustensils")

    ustensilsDropdown.style.display = "block"
    buttonArrow.classList.remove("hidden")
    buttonArrow.classList.add("arrow_initial_position")
    inputDropdown.style.display = "none"
    appareilsArrow.style.display = "none"
    menu.classList.toggle("menu_open")
})