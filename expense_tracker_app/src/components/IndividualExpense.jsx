import ExpenseItems from "./ExpenseItems";

const IndividualExpense = ({ expensesABC }) => {
  return <>
    {expensesABC.map((arr) => {
      return <ExpenseItems
        key={arr.title}
        titleABC={arr.title}
        amountABC={arr.amount}
        dateABC={arr.date}
      ></ExpenseItems>
    })}


    {/* <ExpenseItems
      titleABC={expenses[2].title}
      amountABC={expenses[2].amount}
      dateABC={expenses[2].date}
    ></ExpenseItems>

    <ExpenseItems
      titleABC={expenses[3].title}
      amountABC={expenses[3].amount}
      dateABC={expenses[3].date}
    ></ExpenseItems> */}

  </>
}

export default IndividualExpense;