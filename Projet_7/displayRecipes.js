displayRecipes(recipes)

// Création du DOM

function displayRecipes(recipesArray) {
    let html = ""
    recipesArray.forEach((recipes) => {
        html += `
        <div class="recipe_card">
                    <a href="">
                        <img class="recipe_image" src="" alt="${recipes.name}">
                        <h2 id="recipes_name">${recipes.name}</h2>
                        <span class="title_aside">
                            <svg class="clock_icon" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                                </svg>
                            <span class="recipe_time">${recipes.time} min</span>
                        </span>
                        <div class="recipe">
                            <span class="container_ingredients">

                            ${recipes.ingredients.map((ingredient) => {
                                let quantity = ingredient.quantity
                                let unit = ingredient.unit
                                if(quantity === undefined) {
                                    quantity = ""
                                }
                                if(unit === undefined) {
                                    unit = ""
                                }
                                return `<span class="ingredients">${ingredient.ingredient}:<span class="ingredients_quantities"> ${quantity} ${unit}</span></span>`
                            }).join("")}

                            </span>
                            <span class="container_description">
                                <p class="description">${recipes.description}</p>
                            </span>
                        </div>
                    </a>
                </div>
        `
    })
    
    document.querySelector(".recipe_container").innerHTML = html
}