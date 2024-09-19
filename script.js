// Show Dishes
// when to show them


// add to basket
// delete from basket 


function renderDishes(){
    renderBurgers();
    renderPizzas();
}

function renderBurgers(){
    let dishRef = document.getElementById("dishes");
    dishRef.innerHTML = "";

    for (let indexBurger = 0; indexBurger < myDishes.burger.length; indexBurger++) {
        dishRef.innerHTML += getBurgerTemplate(indexBurger);
    }
}