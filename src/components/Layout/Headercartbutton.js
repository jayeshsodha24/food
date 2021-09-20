import { useContext } from "react";
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/CartContext';
import classes from './Headercartbutton.module.css';
const Headercartbutton=props=>
{
    const Cartctx=useContext(CartContext);
    const numberOfCartItems=Cartctx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Yout Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
export default Headercartbutton;