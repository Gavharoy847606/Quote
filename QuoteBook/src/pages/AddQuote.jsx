import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddQuote() {
  const [quote, setQuote] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!quote || !user) return alert("Fill all fields!");

    const newQuote = { text: quote, user: user };

    const oldQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    const updatedQuotes = [...oldQuotes, newQuote];

    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));

    navigate("/");
  };

  return (
    <div className="card form-card">
      <h2 className="page-title">Add Quote</h2>

      <input
        className="input"
        placeholder="Your name"
        onChange={(e) => setUser(e.target.value)}
      />

      <textarea
        className="input textarea"
        placeholder="Write your quote..."
        onChange={(e) => setQuote(e.target.value)}
      />

      <button className="btn" onClick={handleAdd}>
        Add Quote
      </button>
    </div>
  );
}

export default AddQuote;