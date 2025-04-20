import { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ saveDetailsOfNewExpABC, handlerStopEditorABC }) => {

    const [valTitle, setTitle] = useState('');
    const [valAmount, setAmount] = useState('');
    const [valDate, setDate] = useState('');

    const handlerOnTitle = (event) => {
        setTitle(event.target.value);
    }

    const handlerOnAmount = (event) => {
        setAmount(event.target.value);
    }

    const handlerOnDate = (event) => {
        setDate(event.target.value);
    }

    const handlerOnSubmitForm = (event) => {
        event.preventDefault();

        const newExpData = {
            title: valTitle,
            amount: valAmount,
            date: new Date(valDate),
        }
        saveDetailsOfNewExpABC(newExpData);
        setTitle('');
        setAmount('');
        setDate('');

    }


    return <form action="#" onSubmit={handlerOnSubmitForm}>
        <div className={styles.new_expense_controls}>
            <div className={styles.new_expense_control}>
                <label> Expense Title </label>
                <input type="text" onChange={handlerOnTitle} value={valTitle} />
            </div>

            <div className={styles.new_expense_control}>
                <label> Expense Amount </label>
                <input type="number" min="0.1" step="0.1" onChange={handlerOnAmount} value={valAmount} />
            </div>

            <div className={styles.new_expense_control}>
                <label> Expense Date </label>
                <input type="date" min="2018-01-01" max="2025-12-31" onChange={handlerOnDate} value={valDate} />
            </div>

            <div className={styles.new_expense_actions}>
                <button type="submit"> Add Expense </button>
                <button type="button" onClick={handlerStopEditorABC}> Cancel </button>
            </div>

        </div>
    </form>
}

export default ExpenseForm;