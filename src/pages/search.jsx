import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value,setValue] = useState('dasd');

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "all";

  const goToFilteredItems = (newCategory) => {
    // Navigate with both query params and state
    navigate(`/search?category=${newCategory}`, {
      state: { from: "filtered-items-page" },
    });
  };
 
  return (
    <div>
      <div>Category: {category}</div>
      <input type="text" value= {value} onChange={(e)=>setValue(e.target.value)}/>
      <h3>{value}</h3>
      <button onClick={() => goToFilteredItems(value)}>Show Electronics</button>
    </div>
  );
};

export default Search;