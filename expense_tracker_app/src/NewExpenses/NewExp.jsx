import ExpenseForm from "./ExpenseForm";


const NewExp = ({ handleOnClickAddABC }) => {

    const saveDetailsOfNewExp = (enteredData) => {
        const newExpData = {
            ...enteredData,
            id: Math.random().toString(),
        }
        handleOnClickAddABC(newExpData)
    }

    return <div>
        <ExpenseForm saveDetailsOfNewExpABC={saveDetailsOfNewExp}></ExpenseForm>
    </div>
}

export default NewExp;