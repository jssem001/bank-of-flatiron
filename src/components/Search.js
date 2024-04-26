import React, {useState} from "react";

function Search({trans}) {
  const [typedSearch, setTypedSearch] = useState("All");

  function handleCategoryChange(event) {
    setTypedSearch(event.target.value);
  }

  const transToDisplay = trans.filter((tran) => {
    if (typedSearch === "All"){
      return true;
    }

    return tran.category === typedSearch;
  });
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>

  );
}

export default Search;
