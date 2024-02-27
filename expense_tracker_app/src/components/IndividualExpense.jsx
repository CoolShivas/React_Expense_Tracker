import { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";

const IndividualExpense = ({ expensesABC, handleOnClickDeleteABC }) => {

  const [filteredYear, setFilteredYear] = useState('2024');

  const handlerForFilteringYear = (yearSelChoose) => {
    console.log(yearSelChoose);
    setFilteredYear(yearSelChoose);
  }

  const filteringYearForData = expensesABC.filter((drr) => drr.date.getFullYear().toString() === filteredYear)

  return <>
    <ExpenseFilter choosenYear={filteredYear} handlerForFilteringYearABC={handlerForFilteringYear}></ExpenseFilter>
    {filteringYearForData.map((arr) => {
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