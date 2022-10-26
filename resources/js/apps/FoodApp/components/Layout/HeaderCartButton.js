import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnMoved, setBtnMoved] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((accumulator, item) => {
        return accumulator + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnMoved ? styles.bump : ""}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnMoved(true);

        const timer = setTimeout(() => {
            setBtnMoved(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
