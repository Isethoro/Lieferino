function getBurgerTemplate(indexBurger) {
    return `<div" class="dish_Cards"><h3 class="burgers">${myDishes.burger[indexBurger].name}</h3><h4>${myDishes.burger[indexBurger].description}</h4><h4>${myDishes.burger[indexBurger].price.toFixed(2)}€</h4></div>`
}

function getPizzaTemplate(indexPizza) {
    return `<div" class="dish_Cards"><h3 class="pizzas">${myDishes.pizza[indexPizza].name}</h3><h4>${myDishes.pizza[indexPizza].description}</h4><h4>${myDishes.pizza[indexPizza].price.toFixed(2)}€</h4></div>`
}

function getBeilagenTemplate(indexBeilagen) {
    return `<div" class="dish_Cards"><h3 class="beilagen">${myDishes.beilagen[indexBeilagen].name}</h3><h4>${myDishes.beilagen[indexBeilagen].description}</h4><h4>${myDishes.beilagen[indexBeilagen].price.toFixed(2)}€</h4></div>`
}