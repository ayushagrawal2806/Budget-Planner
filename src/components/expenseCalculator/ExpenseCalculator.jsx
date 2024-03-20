import BudgetPlanner from './budgetPlanner/BudgetPlanner'
import Expenses from './expenses/Expenses'
import AddExpenses from './Addexpenses/AddExpenses'
import ExpenseContextProvider from './context/ExpenseContextProvider'
import Budget from './budget/budget'


const ExpenseCalculator = () => {
 
  return (
    <ExpenseContextProvider>
      <Budget />
      <BudgetPlanner />
      <Expenses />
      <AddExpenses />
    </ExpenseContextProvider>
  )
}

export default ExpenseCalculator