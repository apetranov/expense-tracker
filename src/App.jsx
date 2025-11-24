import { useState } from 'react'
import './App.css'

function App() {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("")
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [id, setId] = useState(0);

  const handleExpenses = () => {
     let expense = {
        "id": id,
        "title": expenseTitle,
        "amount": expenseAmount,
        "date": date
    }

    let arrCopy = [...expenses];

    arrCopy.push(expense);
    
    setId(id+1);
    setExpenses(arrCopy);
    setTotal(total + parseFloat(expenseAmount));
  }

  const handleExpenseTitle = (e) => {
    setExpenseTitle(e.target.value);
  }

  const handleExpenseAmount = (e) => {
    setExpenseAmount(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleAdd = () => {
    if (!expenseTitle) {
      alert("Expense title is blank!!!");
      return;
    } else if (!expenseAmount) {
      alert("Expense amount is blank!!!");
      return;
    } else if (!date) {
      alert("Date is blank!!!");
      return;
    }

    if (parseFloat(expenseAmount) <= 0) {
      alert("Expense amount must be greater than 0!!!");
      return;
    }

    console.log("Expense title", expenseTitle);
    console.log("Expense amount", parseFloat(expenseAmount) + 5.5);
    console.log("Date", date);

    handleExpenses();
    setDate("");
    setExpenseAmount("");
    setExpenseTitle("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
    <div className="flex flex-col shadow-2xl w-[80%] sm:w-[50%] md:w-[30%] max-h-[90vh] rounded-lg bg-white">
      
      {/* Inputs + Add button */}
      <div className="space-y-3 flex flex-col justify-center items-center p-5 w-full">
        <input
          value={expenseTitle}
          onChange={handleExpenseTitle}
          className="outline-1 w-full"
          placeholder="Expense title..."
          type="text"
        />
        <input
          value={expenseAmount}
          onChange={handleExpenseAmount}
          placeholder="Expense amount..."
          className="outline-1 w-full"
          type="number"
        />
        <input
          value={date}
          onChange={handleDate}
          className="outline-1 w-full"
          type="date"
        />
        <button
          onClick={handleAdd}
          className="rounded-lg hover:cursor-pointer hover:bg-green-600 bg-green-400 text-white font-semibold px-12 py-1"
        >
          Add
        </button>
      </div>

      {/* Scrollable expenses list */}
      <div className="flex-1 overflow-auto p-5 space-y-5 w-full">
        {expenses.map((exp) => (
          <div className="flex flex-col justify-between border-b pb-2 w-full" key={exp.id}>
            <div className="flex flex-row space-x-2 font-semibold w-full">
              <h1 className="text-xl truncate flex-1">💰 {exp.title}</h1>
            </div>
            <div className="flex flex-row justify-between w-full">
              <h1 className="text-green-600 truncate flex-1">${exp.amount}</h1>
              <h1 className="truncate flex-1 text-right">🗓️ {exp.date}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Total at the bottom */}
      <div className="w-full">
        <h1 className="bg-green-500 text-white text-center font-bold text-2xl p-5 truncate">
          Total: ${total}
        </h1>
      </div>
    </div>
  </div>
)
}

export default App
