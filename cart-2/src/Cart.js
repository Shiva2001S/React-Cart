import React from "react";
import CartItem from './CartItem'

const Cart = (props) => {

    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                {/* Here key is passed to differentiate each product item from one another */ }
                return <CartItem product={product}
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}
                //  We can pass anything to props 
                // func={()=>console.log('absdcj')}
                // isLoggedin={false}
                // jsx={<h1>Test</h1>}
                />
            })}
        </div>
    );
}

export default Cart;