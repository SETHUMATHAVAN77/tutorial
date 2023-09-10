import React, { useState } from "react";

const Filters = () => {
  const [selectedItems, setSelectedItems] = useState(1);
  return (
    <section className="my-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around">
      <button
        className={`btnStyle ${
          selectedItems === 1 ? " bg-green-400 text-white " : "text-slate-500"
        }`}
        onClick={() => setSelectedItems(1)}
      >
        Latest
      </button>
      <button
        className={`btnStyle ${
          selectedItems === 2 ? " bg-green-400 text-white " : "text-slate-500"
        }`}
        onClick={() => setSelectedItems(2)}
      >
        BestSellers
      </button>
      <button
        className={`btnStyle ${
          selectedItems === 3 ? " bg-green-400 text-white " : "text-slate-500"
        }`}
        onClick={() => setSelectedItems(3)}
      >
        Special
      </button>
    </section>
  );
};

export default Filters;
