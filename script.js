// Show Dishes
// when to show them


// add to basket
// delete from basket 


function renderDishes(){
    renderBurgers();
    renderPizzas();
    renderBeilagen();
}

function renderBurgers(){
    let dishRef = document.getElementById("burgers");
    dishRef.innerHTML = "";

    for (let indexBurger = 0; indexBurger < myDishes.burger.length; indexBurger++) {
        dishRef.innerHTML += getBurgerTemplate(indexBurger);
    }
}

function renderPizzas(){
    let dishRef = document.getElementById("pizzas");
    dishRef.innerHTML = "";

    for (let indexPizza = 0; indexPizza < myDishes.pizza.length; indexPizza++) {
        dishRef.innerHTML += getPizzaTemplate(indexPizza);
    }
}

function renderBeilagen(){
    let dishRef = document.getElementById("beilagen");
    dishRef.innerHTML = "";

    for (let indexBeilagen = 0; indexBeilagen < myDishes.beilagen.length; indexBeilagen++) {
        dishRef.innerHTML += getBeilagenTemplate(indexBeilagen);
    }
}