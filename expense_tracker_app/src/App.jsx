import AppName from "./components/AppName";
import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "auto insurance",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "bike insurance",
      amount: 194.12,
      date: new Date(2021, 1, 28),
    },
    {
      id: "e3",
      title: "car insurance",
      amount: 2594.12,
      date: new Date(2022, 5, 1),
    },
    {
      id: "e4",
      title: "dumper insurance",
      amount: 1294.12,
      date: new Date(2023, 9, 21),
    },
  ];
  return <>
    <AppName></AppName>
    <ExpenseItems
      titleABC={expenses[0].title}
      amountABC={expenses[0].amount}
      dateABC={expenses[0].date}
    ></ExpenseItems>

    <ExpenseItems
      titleABC={expenses[1].title}
      amountABC={expenses[1].amount}
      dateABC={expenses[1].date}
    ></ExpenseItems>

    <ExpenseItems
      titleABC={expenses[2].title}
      amountABC={expenses[2].amount}
      dateABC={expenses[2].date}
    ></ExpenseItems>

    <ExpenseItems
      titleABC={expenses[3].title}
      amountABC={expenses[3].amount}
      dateABC={expenses[3].date}
    ></ExpenseItems>
  </>
}
export default App;