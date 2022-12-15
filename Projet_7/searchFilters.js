getIngredients(recipes)
getAppliances(recipes)
getUstensils(recipes)

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

    ingredientsArray.sort(function(a,b) {
        if(a < b) {
            return -1
        } else {
            return 1
        }
    })

    return displayIngredients(ingredientsArray)
}

function displayIngredients(ingredientsArray) {

    let html = ""
    ingredientsArray.forEach((ingredient) => {
        html += `<span class="menu_li li_ingredients">${ingredient.charAt(0).toUpperCase()}${ingredient.slice(1)}</span>`

    })

    document.querySelector("#menu_ingredients").insertAdjacentHTML("afterbegin",html)
}

function getAppliances(recipes) {
   
    const appliances = recipes.map((recipe) => {
        return recipe.appliance.toLowerCase()
    })

    const appliancesArray = Array.from(new Set(appliances))

    appliancesArray.sort(function(a,b) {
        if(a < b) {
            return -1
        } else {
            return 1
        }
    })
    
    return displayAppliances(appliancesArray)
    
}

function displayAppliances(appliancesArray) {

    let html = ""
    appliancesArray.forEach((appliance) => {
        html += `<li class="menu_li li_appareils">${appliance.charAt(0).toUpperCase()}${appliance.slice(1)}</li>`
    })

    document.querySelector("#menu_appareils").innerHTML = html
}

function getUstensils(recipes) {
    
    const ustensils = recipes.map((recipe) => {
        return recipe.ustensils
    })

    const newUstensilsArray = ustensils.flat(50)
    const ustensilsArray = Array.from(new Set(newUstensilsArray))

    ustensilsArray.sort(function(a,b) {
        if(a < b) {
            return -1
        } else {
            return 1
        }
    })

    return displayUstensils(ustensilsArray)

}

function displayUstensils(ustensilsArray) {

    let html = ""
    ustensilsArray.forEach((ustensil) => {
        html += `<li class="menu_li li_ustensils">${ustensil.charAt(0).toUpperCase()}${ustensil.slice(1)}</li>`
    })

    document.querySelector("#menu_ustensils").innerHTML = html
}


// Apparition des widgets

let arrayOfSelectedIngredients = []
document.querySelector("#menu_ingredients").addEventListener("click",(e) => {
    const input = e.target.textContent

    if(arrayOfSelectedIngredients.includes(input) === false) {
            arrayOfSelectedIngredients.push(input)
            displayIngredientsWidgets(input)
    }

})

function displayIngredientsWidgets(ingredient) {

    html = `<button class="widget ingredient_widget">${ingredient.charAt(0).toUpperCase()}${ingredient.slice(1)}
    <svg class="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="white"/>
    </svg>
    </button>`
    
    document.querySelector(".input_tags").insertAdjacentHTML('beforeend', html)
}

let arrayOfSelectedAppliances = []
document.querySelector("#menu_appareils").addEventListener("click", (e) => {
    const input = e.target.textContent

    if(arrayOfSelectedAppliances.includes(input) === false) {
        arrayOfSelectedAppliances.push(input)
        displayAppliancesWidgets(input)
    }
})

function displayAppliancesWidgets(appliance) {

    let html = `<button class="widget appliance_widget">${appliance.charAt(0).toUpperCase()}${appliance.slice(1)}<svg class="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="white"/>
    </svg>
    </button>`
       
    document.querySelector(".input_tags").insertAdjacentHTML('beforeend', html)
}

let arrayOfSelectedUstensils = []
document.querySelector("#menu_ustensils").addEventListener("click", (e) => {
    const input = e.target.textContent

    if(arrayOfSelectedUstensils.includes(input) === false) {
        arrayOfSelectedUstensils.push(input)
        displayUstensilsWidgets(input)
    }
})

function displayUstensilsWidgets(ustensil) {

    let html = `<button class="widget ustensil_widget">${ustensil.charAt(0).toUpperCase()}${ustensil.slice(1)}<svg class="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="white"/>
    </svg>
    </button>`

    document.querySelector(".input_tags").insertAdjacentHTML('afterbegin', html)
}

// Fermeture widgets

const inputTags = document.querySelectorAll(".input_tags")
inputTags.forEach((btn) => btn.addEventListener("click", (e) => {
    console.log("clické")
    
    
}))


// Input dropdown

let arrayOfInputIngredients = []
document.querySelector("#dropdown_ingredients").addEventListener("keyup",(e) => {
    const input = e.target.value.toLowerCase()
    
    const ingredients = document.querySelectorAll(".li_ingredients")
    
    ingredients.forEach((element) => {
        
        const ingredient = element.textContent.toLowerCase()
        arrayOfInputIngredients.push(ingredient)
    })

    if(arrayOfInputIngredients.includes(input) === true) {

        displayIngredientsWidgets(input)
    }

})

let arrayOfInputAppliances = []
document.querySelector("#dropdown_appareils").addEventListener("keyup",(e) => {
    const input = e.target.value.toLowerCase()
    const appareils = document.querySelectorAll(".li_appareils")

    appareils.forEach((element) => {
        const appareil = element.textContent.toLowerCase()

        arrayOfInputAppliances.push(appareil)
        
    })

    if(arrayOfInputAppliances.includes(input) === true) {

        displayAppliancesWidgets(input)
    }
})

let arrayOfInputUstensils = []
document.querySelector("#dropdown_ustensils").addEventListener("keyup",(e) => {
    const input = e.target.value.toLowerCase()
    const ustensils = document.querySelectorAll(".li_ustensils")

    ustensils.forEach((element) => {
        const ustensil = element.textContent.toLowerCase()

        arrayOfInputUstensils.push(ustensil)
        
    })

    if(arrayOfInputUstensils.includes(input) === true) {

        displayUstensilsWidgets(input)
    }
})

// 