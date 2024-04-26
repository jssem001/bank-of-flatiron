import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  var [transactions,setTransactions] = useState([])

  useEffect(()=> {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => { 
        setTransactions(data)
      });

  },[])  

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList trans={transactions}/>
    </div>
  );
}

export default AccountContainer;
