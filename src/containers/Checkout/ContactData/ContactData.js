import React, { Component } from 'react';

import axios from '../../../axios-orders'
import Classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {

    inputRef = (ElType, type, placeholder, value) => {
        const Helper = {
            elementType: ElType,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: value
        }
        return Helper;
    }

    state = {
        orderForm: {
            name: this.inputRef('input', 'text', 'name', ''),
            street: this.inputRef('input', 'text', 'street', ''),
            zipCode: this.inputRef('input', 'text', 'Zip Code', ''),
            city: this.inputRef('input', 'text', 'City', ''),
            email: this.inputRef('input', 'text', 'E-mail', ''),
            deliveryMethode: {
                elementType: 'select',
                elementConfig: [
                    { value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }
                ],
                value: ''
            }
        },
        loading: false
    }


    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,

        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: true });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: true });
            })
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        console.log(formElementArray)
        let form = (
            <form>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} />
                ))}
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={Classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;