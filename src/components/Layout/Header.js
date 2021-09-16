import { Fragment } from "react";
import Headercartbutton from "./Headercartbutton";
import MealsImage from "../../assests/meals.jpg";
import classes from "./Header.module.css";
const Header=props=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Ganesh Foods</h1>
                <Headercartbutton/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage}/>
            </div>
        </Fragment>
    );
};
export default Header;