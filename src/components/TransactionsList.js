import React,{useState} from "react";
import Transaction from "./Transaction";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function TransactionsList({trans, onFormSubmit}) {
  const [typedSearch, setTypedSearch] = useState("");

  const transToDisplay = trans
    .filter((tran) => tran.category.toLowerCase().includes(typedSearch.toLowerCase()) ||
     tran.description.toLowerCase().includes(typedSearch.toLowerCase()))
    
  return (
    <div>
      <Search search={typedSearch} onSearchChange={setTypedSearch}/>
      <AddTransactionForm onFormSubmit={onFormSubmit}/>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {/* Included the Transaction component */}
          { transToDisplay.map((posted)=>(
            <Transaction key={posted.id} date={posted.date} desc={posted.description} 
            categ={posted.category} amount={posted.amount} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
