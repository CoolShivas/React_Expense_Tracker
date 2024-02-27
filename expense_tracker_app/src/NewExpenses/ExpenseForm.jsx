

const ExpenseForm = () => {

    const handlerOnTitle = (event) => {
        console.log(event.target.value);
    }

    const handlerOnAmount = (event) => {
        console.log(event.target.value);
    }

    const handlerOnDate = (event) => {
        console.log(event.target.value);
    }

    const handlerOnSubmitForm = () => {
        console.log("title , amount and date is eneter")
    }

    return <form action="#" onSubmit={handlerOnSubmitForm}>
        <div className="new_expense_controls">
            <div className="new_expense_control">
                <label htmlFor="expenseTitle"> Expense Title </label>
                <input type="text" id="expenseTitle" onChange={handlerOnTitle} />
            </div>

            <div className="new_expense_control">
                <label htmlFor="expenseAmount"> Expense Amount </label>
                <input type="number" id="expenseAmount" min={0.01} step={0.01} onChange={handlerOnAmount} />
            </div>

            <div className="new_expense_control">
                <label htmlFor="expenseDate"> Expense Date </label>
                <input type="date" id="expenseDate" min="2019-01-01" max="2022-12-31" onChange={handlerOnDate} />
            </div>

            <div className="new_expense_actions">
                <button type="submit"> Add Expense </button>
            </div>
        </div>
    </form>

}

export default ExpenseForm;