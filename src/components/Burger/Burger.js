import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {


    let transfromedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey + i} type={igkey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transfromedIngredients.length === 0) {
        transfromedIngredients = <p> Please start adding  ingredients</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transfromedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
};

export default burger;  