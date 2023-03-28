import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const [count,setcount] = React.useState(0);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    setcount(count+1);
    const expenseData = {
      ...enteredExpenseData,
      //id: Math.random().toString(),
      id : count,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense