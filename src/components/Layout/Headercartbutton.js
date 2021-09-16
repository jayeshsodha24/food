import { Fragment } from "react";
import CartIcon from '../Cart/CartIcon';
import classes from './Headercartbutton.module.css';
const Headercartbutton=props=>
{
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Yout Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};
export default Headercartbutton;