import { Fragment } from "react";
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart=(props)=>{
    const CartItems=<ul className={classes['cart-items']}>{[
        {
            id:'c1',
            name:'Jayesh',
            aount:4,
            price:99.99
        },
    ].map((item)=><li>{item.name}</li>)}</ul>;
    return(
        <Modal onClose={props.onClose}>
        
            {CartItems}
            <div className={classes.total}>
                <span>TotalAmount</span>
                <span>99.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        
        </Modal>
        );
};
export default Cart;