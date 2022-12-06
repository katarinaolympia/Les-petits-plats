function searchRecipes(userInput) { 
    return new Promise((resolve,reject) => {

        userInput = normalizeString(userInput)

        function recipesName(){
        return new Promise((resolve, reject) => {
            const resultRecipesName = recipes.filter((recipe) => {
                if(recipe.name.toLowerCase().includes(userInput) === true) {
                    return recipe
                }
            })
            return resolve(resultRecipesName)
        })}
    

        function recipesIngredients() {
            return new Promise((resolve, reject) => {
                const resultRecipesIngredients = recipes.filter((recipe) => {
                    // Variable false par défaut
                    let isIngredients = false
                    
                    recipe.ingredients.forEach((recipeIngredient) => {
                        if(recipeIngredient.ingredient.toLowerCase().includes(userInput) === true) {
                            isIngredients = true
                        }
                    })

                    if(isIngredients === true) {
                        return recipe
                    }
                })

                return resolve(resultRecipesIngredients)
            })
        }

        function recipesDescription() {
            return new Promise((resolve, reject) => {
                const resultRecipesDescription = recipes.filter((recipe) => {
                    if(recipe.description.toLowerCase().includes(userInput) === true) {
                        return recipe
                    }
                })

                return resolve(resultRecipesDescription)
            })
        }
        
        Promise.all([recipesName(), recipesIngredients(), recipesDescription()]).then((result) => {
            // Objets itérables contenant les promesses
            result = [...result[0], ...result[1], ...result[2]]
            
            if(result.length === 0) {
                
                return resolve('Pas de recettes trouvées')
            }

            // Création d'un nouveau tableau pour supprimer les doublons
            const jsonObject = result.map(JSON.stringify) // Retourne un tableau avec les valeurs des objets itérables converti en string
            
            const uniqueSet = new Set(jsonObject) // Nouvelle collection de valeurs uniques (suppression des doublons)
          
            result = Array.from(uniqueSet).map(JSON.parse) // Converti les éléments du set dans un nouveau tableau
           
            return displayRecipes(result)
        })

    })
}