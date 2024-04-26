import React from "react";

function Transaction({date,desc,categ,amount}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{desc}</td>
      <td>{categ}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
