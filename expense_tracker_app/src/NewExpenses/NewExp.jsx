import ExpenseForm from "./ExpenseForm";


const NewExp = ({ handleOnClickAddABC }) => {

    const saveDetailsOfNewExp = (enteredData) => {
        const dataNew = {
            ...enteredData,
            id: Math.random().toString(),
        }
        handleOnClickAddABC(dataNew)
    }

    return <div>
        <ExpenseForm saveDetailsOfNewExpABC={saveDetailsOfNewExp}></ExpenseForm>
    </div>
}

export default NewExp;