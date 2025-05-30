import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {

    const dropDownChangeHandler = (event) => {
        console.log(event.target.value);
        props.handlerForFilteringYearABC(event.target.value);
    }

    return <div className={styles.expense_filter}>
        <h2 className={styles.headingSecond}> Filter Year </h2>
        <select name="selectedYr" id={styles.selYear} onChange={dropDownChangeHandler} value={props.choosenYear}>
            <option value="2025"> 2025 </option>
            <option value="2024"> 2024 </option>
            <option value="2023"> 2023 </option>
            <option value="2022"> 2022 </option>
            <option value="2021"> 2021 </option>
            <option value="2020"> 2020 </option>
            <option value="2019"> 2019 </option>
            <option value="2018"> 2018 </option>
        </select>
    </div>
}

export default ExpenseFilter;