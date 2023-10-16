import './assets/style.css';
import Product from './components/Product';
import NewExpense from './components/NewExpense';
import { useState } from 'react';
function App() {


  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const[oldExpenses,setExpenses] = useState(expenses)

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses([expense, ...oldExpenses]);
    console.log(oldExpenses);
  }

  console.log(oldExpenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <div className="App container expenses">
            {oldExpenses.map((item) => {
              return (

                <div>  
                    <Product
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    />
                </div>

              );
            } )}


      </div>
    </div>  
  );
}

export default App;
