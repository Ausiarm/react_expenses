import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 6, 1),
  },
  {
    id: 2,
    title: "electricity",
    amount: 50,
    date: new Date(2022, 6, 2),
  },
  {
    id: 3,
    title: "water",
    amount: 45,
    date: new Date(2022, 6, 3),
  },
  {
    id: 4,
    title: "food",
    amount: 70,
    date: new Date(2022, 6, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
