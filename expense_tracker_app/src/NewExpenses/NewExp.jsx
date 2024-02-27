import ExpenseForm from "./ExpenseForm";
import styles from "./NewExp.module.css";

const NewExp = () => {
    return <div className={styles.new_expense}>
        <ExpenseForm></ExpenseForm>
    </div>
}

export default NewExp;