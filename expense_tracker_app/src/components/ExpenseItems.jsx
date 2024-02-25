const ExpenseItems = (props) => {

    // const date = new Date(2021, 2, 12);
    // const title = "auto insurance";
    // const amount = 2561;

    return <>
        <div> {props.dateABC.toISOString()} </div>
        <div> {props.titleABC} </div>
        <div> {props.amountABC} </div>
    </>
}

export default ExpenseItems;