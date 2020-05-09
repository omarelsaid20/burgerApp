import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        //active={true} but it passing true by defualt
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem> 
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
};

export default navigationItems;