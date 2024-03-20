import { useContext } from 'react'
import './Expenses.css'
import ExpenseContext from '../context/context'

const Expenses = () => {
  const {expense , setExpense , spend , setSpend} = useContext(ExpenseContext);
  const closeBtn = (id) => {
    const filtered = expense.filter((_,index) => id != index);
    setExpense(filtered);
  }
  
  return (
    <div className="expenses">
      <h1>Expenses</h1>

      <div className="results">

        {
          (expense.length) ? 
          expense.map((element , index) => <div className="data" key={index}>
          <p className='name'>{element.name}</p>
          <p className='amount'>{element.amount}</p>
          <button className='close' onClick={() => {
            localStorage.removeItem("items")
            localStorage.removeItem("spend")
            setSpend(spend - element.amount);
            closeBtn(index)
          }}>&times;</button>
          </div>) 
          : <h1 className='hidden'>Add Data To List . . . . .</h1>

        }

      </div>
    </div>
  )
}

export default Expenses


