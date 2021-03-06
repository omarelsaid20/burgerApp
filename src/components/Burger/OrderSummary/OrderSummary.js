import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
}

    render() {

        const ingredientsSummary = Object.keys(this.props.ingredients).map(igKeys => {
            return (
                <li key={igKeys}>
                    <span>{igKeys}</span>: {this.props.ingredients[igKeys]}
                </li>
            );
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued} >CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;