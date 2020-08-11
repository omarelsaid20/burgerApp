import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        //active={true} but it passing true by defualt
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" >Burger Builder</NavigationItem> 
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    );
};

export default navigationItems;