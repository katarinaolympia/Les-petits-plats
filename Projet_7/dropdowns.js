getIngredients(recipes)
getAppliances(recipes)
getUstensils(recipes)

// Dropdown : couleurs des filtres

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

// Dropdown : affichage DOM

function getIngredients(recipes) {

    const ingredients = recipes.map((recipe) => {
        return recipe.ingredients

        .map((ingredient) => {
            return ingredient.ingredient.toLowerCase()
        })
        
    })

    const newIngredientsArray = ingredients.flat(50) 
    const ingredientsArray = Array.from(new Set(newIngredientsArray))

    let html = ""
    ingredientsArray.forEach((ingredient) => {
        html += `<li class="menu_li">${ingredient.charAt(0).toUpperCase()}${ingredient.slice(1)}</li>`

    })

    document.querySelector("#menu_ingredients").innerHTML = html
}

function getAppliances(recipes) {
   
    const appliances = recipes.map((recipe) => {
        return recipe.appliance.toLowerCase()
    })

    const appliancesArray = Array.from(new Set(appliances))
    
    let html = ""
    appliancesArray.forEach((appliance) => {
        html += `<li class="menu_li">${appliance.charAt(0).toUpperCase()}${appliance.slice(1)}</li>`
    })

    document.querySelector("#menu_appareils").innerHTML = html
}

function getUstensils(recipes) {
    
    const ustensils = recipes.map((recipe) => {
        return recipe.ustensils
    })

    const newUstensilsArray = ustensils.flat(50)
    const ustensilsArray = Array.from(new Set(newUstensilsArray))

    let html = ""
    ustensilsArray.forEach((ustensil) => {
        html += `<li class="menu_li">${ustensil.charAt(0).toUpperCase()}${ustensil.slice(1)}</li>`
    })

    document.querySelector("#menu_ustensils").innerHTML = html
}