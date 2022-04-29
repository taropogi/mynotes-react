import React, { useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
        //  cartCtx.addItem(props.item);
    };

    return (
        <form className={styles.form} onSubmit={submitFormHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount" + Math.random(),
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <h1>Amount not valid</h1>}
        </form>
    );
};

export default MealItemForm;
