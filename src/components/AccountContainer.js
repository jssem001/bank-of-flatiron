import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";


function AccountContainer() {

  var [transactions,setTransactions] = useState([])
  //GET request
  useEffect(()=> {
    fetch('https://bank-of-flatiron-asaw.onrender.com/transactions')
      .then((response) => response.json())
      .then((data) => { 
        setTransactions(data)
      });

  },[])
  // Form for transactions 
  const [newTrans, setNewTrans] = useState(transactions);

  function handleFormSubmit(addTrans) {
    setNewTrans([...newTrans, addTrans]);
  }

  return (
    <div>
      <TransactionsList trans={transactions} onFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default AccountContainer;
