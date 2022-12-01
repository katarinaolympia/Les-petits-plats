getIngredients(recipes)
// displayIngredients(recipes)


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

// Dropdowns : règles générales

const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select")
    const buttons = dropdown.querySelector(".dropdown_buttons")
    const arrow = dropdown.querySelector(".arrow")
    const menu = dropdown.querySelector(".menu")
    const options = dropdown.querySelectorAll(".menu li")
    
    select.addEventListener("click", () => {
        buttons.classList.toggle("dropdown_buttons_selected")
        arrow.classList.toggle("arrow_rotate")
        menu.classList.toggle("menu_open")
    })
})

const selectIngredients = document.querySelector("#select_ingredients")
selectIngredients.addEventListener("click", () => {
    const dropDownIngredients = document.querySelector("#menu_ingredients")
    dropDownIngredients.style.backgroundColor = "#3282F7"
})

const selectAppareils = document.querySelector("#select_appareils")
selectAppareils.addEventListener("click", () => {
    const dropDownAppareils = document.querySelector("#menu_appareils")
    dropDownAppareils.style.backgroundColor = "#68D9A4"
})

const selectUstensils = document.querySelector("#select_ustensils")
selectUstensils.addEventListener("click", () => {
    const dropDownUstensils = document.querySelector("#menu_ustensils")
    dropDownUstensils.style.backgroundColor ="#ED6454"
})

// Dropdown : règles individuelles

function getIngredients(recipes) {
    
    recipes.forEach((recipe) => {
        const recipesIngredients = `${recipe.ingredients.map((ingredient) => {
        return `${ingredient.ingredient}`
        }).join("")}`
        
        console.log(recipesIngredients)
        
    })
    
}

// Récupérer, filtrer







