import ExpenseAmount from "./ExpenseAmount";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItems.module.css";
import { useState } from "react";


const ExpenseItems = (props) => {

    const [valAddAmount, setAddAmount] = useState(props.amountABC)

    const handleOnClickAdd = () => {
        console.log("Adding the amount");
        const addAmt = 100;
        setAddAmount(addAmt);
    }

    return <div className={styles.expense_item}>
        <div>
            <ExpenseDate
                dateXYZ={props.dateABC}
            ></ExpenseDate>
        </div>
        <div className={styles.expense_item__description}>
            {/* {props.titleABC} */}

            <ExpenseTitle
                titleXYZ={props.titleABC}
            ></ExpenseTitle>

        </div>
        <div className={styles.expense_item__amount}>
            {/* ₹ {props.amountABC} */}

            <ExpenseAmount
                // amountXYZ={props.amountABC}
                amountXYZ={valAddAmount}
                onChange={handleOnClickAdd}
            ></ExpenseAmount>
        </div>

        <button
            type="button"
            onClick={() => props.handleOnClickDeleteXYZ(props.titleABC)}
        >
            DELETE
        </button>

        <button
            onClick={handleOnClickAdd}
        >
            ADD
        </button>
    </div>
}

export default ExpenseItems;