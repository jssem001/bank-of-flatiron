import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function AddTransactionForm({onFormSubmit}) {
  const [date, setDate] = useState(""); const [desc, setDesc] = useState("");
  const [category, setCategory] = useState(""); const [amount, setAmount] = useState("");

  function handleDescChange(event){
    setDesc(event.target.value);
  }
  function handleDateChange(event){
    setDate(event.target.value);
  }
  function handleCatChange(event){
    setCategory(event.target.value);
  }
  function handleAmountChange(event){
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8001/transactions', {
         method: 'POST',
         body: JSON.stringify({
           "id": uuid(),
           "date": date,
           "description": desc,
           "category": category,
           "amount": amount,
         }),
         headers: {
           'Content-type': 'application/json',
         },
       })   
         .then((response) => response.json())
         .then((data) => onFormSubmit(data.transactions));        
  }
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} onChange={handleDateChange}/>
          <input type="text" name="description" placeholder="Description" value={desc} onChange={handleDescChange}/>
          <input type="text" name="category" placeholder="Category" value={category} onChange={handleCatChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={handleAmountChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
