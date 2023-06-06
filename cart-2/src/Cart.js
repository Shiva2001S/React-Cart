import React from "react";
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor() {
        // Since we are inheriting the Component class (which is our parent class) so we need to call the constuctor of parent class
        super();
        // If we have multiple component then we can pass like this
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id : 1
                },
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id : 2
                },
                {
                    price: 100000,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id : 3
                }
            ]
        }
    }
    // since our state lies in this component so ony it can change it
    handleIncreaseQuantity = (product)=>{
        // This gives us the prev state of product object 
        const {products} = this.state;
        // It gives us the indx of product array which is needed to be changed
        const index = products.indexOf(product);

        products[index].qty += 1;

        // Now we are rendering the updated products object
        this.setState({
            products : products
            // Since key and values are same so we can also write it like this
            // products
        })
    }

    handleDecreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty == 0) {return;}

        products[index].qty -= 1;

        this.setState({
            products : products
        })
    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                    {products.map((product)=>{
                        {/* Here key is passed to differentiate each product item from one another */}
                        return <CartItem product={product}
                                         key={product.id}
                                         onIncreaseQuantity = {this.handleIncreaseQuantity}
                                         onDecreaseQuantity = {this.handleDecreaseQuantity}
                                        //  We can pass anything to props 
                                        // func={()=>console.log('absdcj')}
                                        // isLoggedin={false}
                                        // jsx={<h1>Test</h1>}
                         />
                    })}
            </div>
        );
    }
}

export default Cart;