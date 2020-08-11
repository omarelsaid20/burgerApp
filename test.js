state = {
    ingredients: {
        salad: 0,
        bacon: 1,
        cheese: 1,
        meat: 1
    },
    totalPrice: 4,
    purchasable: false
}


const SomeCalc = function(){
    const ingredients = {
        ...this.state.ingredients
    };
    const sum = Object.keys(ingredients).map(igKey => {
        return ingredients[igKey]
    }).reduce((sum, el, index, arr) => {
        return sum + el;
    }, 0)
}

SomeCalc()