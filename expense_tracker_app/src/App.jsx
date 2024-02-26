import Card from "./UI/Card";
import AppName from "./components/AppName";
import IndividualExpense from "./components/IndividualExpense";

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
    {
      id: "e5",
      title: "farmer insurance",
      amount: 350,
      date: new Date(2024, 12, 29),
    },
  ];
  return <Card>
    <AppName></AppName>
    {/* <ExpenseItems
      titleABC={expenses[0].title}
      amountABC={expenses[0].amount}
      dateABC={expenses[0].date}
    ></ExpenseItems> */}

    <IndividualExpense
      expensesABC={expenses}
    ></IndividualExpense>
  </Card>
}
export default App;