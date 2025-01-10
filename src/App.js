import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    date: new Date(2024, 10, 22),
    title: 'New Book',
    price: 30.99
  },
  {
    id: Math.random().toString(),
    date: new Date(2024, 10, 22),
    title: 'Opel Omega 1993 2.0 DOCH',
    price: 14.99
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses = {expenses} /> 
    </div>
  );
}

export default App;
