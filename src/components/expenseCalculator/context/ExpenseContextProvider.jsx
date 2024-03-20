
import { useEffect, useState } from 'react';
import ExpenseContext from './context'
// eslint-disable-next-line react/prop-types
const ExpenseContextProvider = ({children}) => {
  const [spend , setSpend] = useState(0);
  const [expense , setExpense] = useState([]);
  const [budget , setBudget] = useState(2000)

  useEffect(() => {

    if(localStorage.getItem("items")){
      setExpense(JSON.parse(localStorage.getItem("items")))
    }

    if(JSON.parse(localStorage.getItem("budget"))){
      setBudget(JSON.parse(localStorage.getItem("budget")))
    }

    
    if(JSON.parse(localStorage.getItem("spend"))){
      setSpend(JSON.parse(localStorage.getItem("spend")))
    }
    
  } , [])
  
  useEffect(() => {

   if(expense.length){
    localStorage.setItem("items" , JSON.stringify([...expense]));
   }
   if(budget != 2000){
    localStorage.setItem("budget" , JSON.stringify(budget));
   }

   if(spend != 0){
    localStorage.setItem("spend" , JSON.stringify(spend));
   }

   
  } , [expense , spend , budget])


  return (
   <ExpenseContext.Provider value={{spend , setSpend , expense , setExpense , budget , setBudget}}>
    {children}
   </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider;