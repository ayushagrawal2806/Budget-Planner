import { useContext, useState } from 'react'
import './budget.css'
import ExpenseContext from '../context/context';

const Budget = () => {
    const [value , setValue] = useState("");
    const {setBudget} = useContext(ExpenseContext);

    const updateBudget = () => {
        if(value == ""){
            alert("Enter some value")
        } else{
            setBudget(value);
            setValue("");
        }
        
    }
  return (
    <div className="set-budget">
        <h1>Set Budget</h1>
        <div className="input">
            <input type="number" placeholder="Enter your new Budget" value={value} onChange={(e) => setValue(e.target.value) }/>
        </div>
        <button onClick={updateBudget}>Change Budget</button>
    </div>
  )
}

export default Budget