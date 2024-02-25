const ExpenseItems = () => {

    const date = new Date(2021, 2, 12);
    const title = "auto insurance";
    const amount = 2561;

    return <>
        <div> {date.toISOString()} </div>
        <div> {title} </div>
        <div> {amount} </div>
    </>
}

export default ExpenseItems;