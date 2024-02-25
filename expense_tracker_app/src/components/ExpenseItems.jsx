import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItems.module.css";

const ExpenseItems = (props) => {

    // const date = new Date(2021, 2, 12);
    // const title = "auto insurance";
    // const amount = 2561;

    return <div className={styles.expense_item}>
        <div>
            <ExpenseDate
                dateXYZ={props.dateABC}
            ></ExpenseDate>
        </div>
        <div className={styles.expense_item__description}>
            {props.titleABC}
        </div>
        <div className={styles.expense_item__amount}>
            {props.amountABC}
        </div>
    </div>
}

export default ExpenseItems;