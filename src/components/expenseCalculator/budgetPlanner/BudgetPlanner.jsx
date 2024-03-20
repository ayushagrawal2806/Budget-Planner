import { useContext } from 'react'
import './BudgetPlanner.css'
import ExpenseContext from '../context/context'

const BudgetPlanner = () => {
  const {spend , budget} = useContext(ExpenseContext);
  return (
    <div className="budget-cont">
      <h1>My Budget Planner</h1>
      <div className="boxes">
        <div className="budget">
          <h4>Budget: Rs.{budget}</h4>
        </div>
        <div className="remaining">
          <h4>Remaining: Rs.{budget - spend}</h4>
        </div>
        <div className="spent">
          <h4>Spend so far: {spend}</h4>
        </div>
      </div>
    </div>

  )
}

export default BudgetPlanner