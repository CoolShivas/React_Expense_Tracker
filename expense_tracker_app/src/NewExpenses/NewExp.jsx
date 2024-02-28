import styles from "./NewExp.module.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";


const NewExp = ({ handleOnClickAddABC }) => {

    const saveDetailsOfNewExp = (enteredData) => {
        const newExpData = {
            ...enteredData,
            id: Math.random().toString(),
        }
        handleOnClickAddABC(newExpData)
    }

    const [displayEditor, setDisplayEditor] = useState(false);

    const handlerStartEditor = () => {
        setDisplayEditor(true);
    }

    const handlerStopEditor = () => {
        setDisplayEditor(false);
    }

    return <div>
        {!displayEditor && <center><button onClick={handlerStartEditor} className={styles.editorNewExpBtn}> Add New Expenses </button></center>}

        {displayEditor && <ExpenseForm saveDetailsOfNewExpABC={saveDetailsOfNewExp} handlerStopEditorABC={handlerStopEditor}></ExpenseForm>}
    </div>
}

export default NewExp;