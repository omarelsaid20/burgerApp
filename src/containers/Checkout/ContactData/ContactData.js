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
            value: value,
            validation: {
                required: true
            },
            valid: false
        }
        return Helper;
    }

    state = {
        orderForm: {
            name:     this.inputRef('input', 'text', 'name', ''),
            street:   this.inputRef('input', 'text', 'street', ''),
            zipCode:  this.inputRef('input', 'text', 'Zip Code', ''),
            city:     this.inputRef('input', 'text', 'City', ''),
            email:    this.inputRef('input', 'text', 'E-mail', ''),
            deliveryMethode: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: '',
                validation: {
                    reauired: true
                },
                valid: false
            }
        },
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        };

        return isValid;
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormOrder = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedFormOrder[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        console.log(updatedFormElement);
        updatedFormOrder[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updatedFormOrder });
    };

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            //clicked={this.orderHandler} using onSubmit insteat of onClicked
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!this.state.valid}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType='Success' >ORDER</Button>
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