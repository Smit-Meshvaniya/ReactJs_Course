import React, { useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");

  const datacollection = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grapes" },
    { id: 5, name: "Watermelon" },
  ];

  const filterdata = datacollection.filter((i) => i.name === search);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <ul>
        <h3>Total Items:</h3>
        <li>Watermelon</li>
        <li>Grapes</li>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
        <h3>Output:</h3>

        {filterdata.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
