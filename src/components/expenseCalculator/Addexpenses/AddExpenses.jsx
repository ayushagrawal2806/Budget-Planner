import { useContext,  useState } from 'react'
import './AddExpenses.css'
import ExpenseContext from '../context/context';

const AddExpenses = () => {
  const { expense, setExpense , spend , setSpend} = useContext(ExpenseContext);
  const [name , setName] = useState("")
  const [amount , setAmount] = useState("");
  return (
    <div className="addExpenses">
      <h1>Add Expenses</h1>
      <div className="inputs">
        <div className="name-input">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' placeholder='Enter your name' value ={name} onChange={(e)=> setName(e.target.value) }/>
        </div>
        <div className="amount-input">
          <label htmlFor="cost">Cost</label>
          <input type="number" id='cost' placeholder='Enter amount' value = {amount} onChange={(e)=> setAmount(Number(e.target.value)) }/>
        </div>
      </div>
      <button className='save' onClick={() => {
        if(name == ""){
          alert("Name Feild is Empty")
        }
        else if(amount == 0){
          alert("Amount Feild is Empty")
        }
        else{
          setExpense([...expense , {name , amount}]);
          setSpend(spend + amount);
          setName("");
          setAmount("");
        }
      } }>Save</button>
    </div>
  )
}

export default AddExpenses