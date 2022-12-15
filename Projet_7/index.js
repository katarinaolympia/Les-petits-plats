
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

const ingredientsSelect = document.querySelector("#select_ingredients")
ingredientsSelect.addEventListener("click",() => {
    const inputDropdownIngredients = document.querySelector("#dropdown_ingredients")
    const arrowIngredients = document.querySelector("#arrow_dropdown_ingredients")
    const arrowSelectIngredients = document.querySelector("#arrow_button_ingredient")
    const menuIngredients = document.querySelector("#menu_ingredients")
    const recipeContainer = document.querySelector(".recipe_container")
    const appareilsSelect = document.querySelector("#select_appareils")

    ingredientsSelect.style.display = "none"
    arrowSelectIngredients.style.display = "none"
    inputDropdownIngredients.style.display = "block"
    arrowIngredients.style.display = "block"
    menuIngredients.classList.toggle("menu_open")
    menuIngredients.style.backgroundColor = "#3282F7"
    recipeContainer.style.marginTop = "40px"
})

const ingredientsSelectArrow = document.querySelector("#arrow_dropdown_ingredients")
ingredientsSelectArrow.addEventListener("click", () => {
    const inputDropdownIngredients = document.querySelector("#dropdown_ingredients")
    const ingredientsDropdown = document.querySelector("#select_ingredients")
    const menuIngredients = document.querySelector("#menu_ingredients")
    const arrowSelectIngredients = document.querySelector("#arrow_button_ingredient")

    ingredientsDropdown.style.display = "block"
    arrowSelectIngredients.style.display = "block"
    arrowSelectIngredients.classList.add("arrow_initial_position")
    inputDropdownIngredients.style.display = "none"
    ingredientsSelectArrow.style.display = "none"
    menuIngredients.classList.toggle("menu_open")
})

const appareilsSelect = document.querySelector("#select_appareils")
appareilsSelect.addEventListener("click",() => {
    const inputDropdownAppareils = document.querySelector("#dropdown_appareils")
    const arrowInputAppareils = document.querySelector("#arrow_dropdown_appareils")
    const arrowSelectAppareils = document.querySelector("#arrow_button_appareils")
    const menuAppareils = document.querySelector("#menu_appareils")
    const recipeContainer = document.querySelector(".recipe_container")
    
    appareilsSelect.style.display = "none"
    arrowSelectAppareils.style.display = "none"
    inputDropdownAppareils.style.display = "block"
    arrowInputAppareils.style.display = "block"
    menuAppareils.classList.toggle("menu_open")
    menuAppareils.style.backgroundColor = "#68D9A4"
    recipeContainer.style.marginTop = "40px"
    
})

const appareilsSelectArrow = document.querySelector("#arrow_dropdown_appareils")
appareilsSelectArrow.addEventListener("click", () => {
    const inputDropdownAppareils = document.querySelector("#dropdown_appareils")
    const arrowInputAppareils = document.querySelector("#arrow_dropdown_appareils")
    const appareilsSelect = document.querySelector("#select_appareils")
    const arrowSelectAppareils = document.querySelector("#arrow_button_appareils")
    const menuAppareils = document.querySelector("#menu_appareils")

    appareilsSelect.style.display = "block"
    arrowSelectAppareils.style.display = "block"
    arrowSelectAppareils.classList.add("arrow_initial_position")
    inputDropdownAppareils.style.display = "none"
    arrowInputAppareils.style.display = "none"
    menuAppareils.classList.toggle("menu_open")
})

const ustensilsSelect = document.querySelector("#select_ustensils")
ustensilsSelect.addEventListener("click",() => {
    const inputDropdownUstensils = document.querySelector("#dropdown_ustensils")
    const arrowInputUstensils = document.querySelector("#arrow_dropdown_ustensils")
    const menuUstensils = document.querySelector("#menu_ustensils")
    const arrowSelectUstensils = document.querySelector("#arrow_button_ustensils")
    const recipeContainer = document.querySelector(".recipe_container")

    ustensilsSelect.style.display = "none"
    arrowSelectUstensils.style.display = "none"
    inputDropdownUstensils.style.display = "block"
    arrowInputUstensils.style.display = "block"
    menuUstensils.classList.toggle("menu_open")
    menuUstensils.style.backgroundColor = "#ED6454"
    recipeContainer.style.marginTop = "40px"
})

const ustensilsArrow = document.querySelector("#arrow_dropdown_ustensils")
ustensilsArrow.addEventListener("click", () => {
    const inputDropdownUstensils = document.querySelector("#dropdown_ustensils")
    const arrowInputUstensils = document.querySelector("#arrow_dropdown_ustensils")
    const menuUstensils = document.querySelector("#menu_ustensils")
    const ustensilsSelect = document.querySelector("#select_ustensils")
    const arrowSelectUstensils = document.querySelector("#arrow_button_ustensils")

    ustensilsSelect.style.display = "block"
    arrowSelectUstensils.style.display = "block"
    arrowSelectUstensils.classList.add("arrow_initial_position")
    inputDropdownUstensils.style.display = "none"
    arrowInputUstensils.style.display = "none"
    menuUstensils.classList.toggle("menu_open")
})