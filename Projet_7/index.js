
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

const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select")
    const arrow = dropdown.querySelector(".arrow")
    const menu = dropdown.querySelector(".menu")
    const options = dropdown.querySelector(".menu_li")
    
    select.addEventListener("click", () => {
        arrow.classList.toggle("arrow_rotate")
        menu.classList.toggle("menu_open")
        dropdown.style.marginRight = "40px"
    })
})