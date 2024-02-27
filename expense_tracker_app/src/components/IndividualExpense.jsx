import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";

const IndividualExpense = ({ expensesABC, handleOnClickDeleteABC }) => {
  return <>
    <ExpenseFilter></ExpenseFilter>
    {expensesABC.map((arr) => {
      return <ExpenseItems
        key={arr.title}
        titleABC={arr.title}
        amountABC={arr.amount}
        dateABC={arr.date}
        handleOnClickDeleteXYZ={handleOnClickDeleteABC}
      ></ExpenseItems>
    })}
  </>
}

export default IndividualExpense;