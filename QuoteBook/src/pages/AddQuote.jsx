import { useState } from "react";

function AddQuote() {
  const [quote, setQuote] = useState("");

  const handleAdd = () => {
    console.log("Quote:", quote);
  };

  return (
    <div className="card form-card">
      <h2 className="page-title">Add Quote</h2>

      <textarea
        className="input textarea"
        placeholder="Write your quote here..."
        onChange={(e) => setQuote(e.target.value)}
      />

      <button className="btn" onClick={handleAdd}>
        Add Quote
      </button>
    </div>
  );
}

export default AddQuote;