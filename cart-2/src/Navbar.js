import React from "react";

// since we dont have state in this component so we have changed this component to functional component
// In react by default this fn takes props as the argument 
const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="data:image/png;base64,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" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};


export default Navbar;