import React from "react";
import Decrease from './minus.png'; 
import Increase from './plus.png'; 
import Delete from './delete.png'; 

class CartItem extends React.Component{
    // In react this is how we define the state
    constructor(){
        // Since we are inheriting the Component class (which is our parent class) so we need to call the constuctor of parent class
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
    }
    // This is how we declare state 
    // here we have used arrow fn bcz arrow fn binds to a instance of a class 
    increaseQuantity = ()=>{
        // setState fn comes from Component class in react
        // this fn takes the value or property which is needed to be changed
        // It gives us an object
        // It only changes the quantity which is tell in this fn not other , it is also known as shallow merging
        // this.setState({
        //     qty : this.state.qty + 1
        // })

        // Here prevState is the just prev state of a component 
        this.setState((prevState)=>{
            return {
                qty : prevState.qty + 1
            }
        }, ()=>{
            console.log('this.state', this.state);
        });
        // This console call is asynchronous
        console.log(this.state);
    }

    decreaseQuantity = ()=>{
        const {qty} = this.state;

        if (qty == 0) {
            return;
        }

        this.setState((prevState)=>{
            return {
                qty : prevState.qty - 1
            }
        });
        console.log(this.state);
    }
    render(){
        // In this step we are doing object de structuring
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{ title }</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="decrease" className="action-icons" src={Decrease} title="minus icons" onClick={this.decreaseQuantity} />
                        <img alt="increase" className="action-icons" src={Increase} title="minus icons" onClick={this.increaseQuantity} />
                        <img alt="delete" className="action-icons" src={Delete} title="minus icons" />
                    </div>
                </div>
            </div>
        )
    }
}

// This is how we give style in jsx
const styles = {
    image: {
        height : 110, 
        width : 110,
        // We use camel case in naming the properties in jsx
        borderRadius : 4
    }
}

export default CartItem;