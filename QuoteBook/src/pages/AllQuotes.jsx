function AllQuotes() {
  const quotes = [
    { text: "Bilim kuchdir", user: "Ali" },
    { text: "Sabr qil", user: "Vali" },


  ];

  return (
    <div>
      <h2 className="page-title">All Quotes</h2>

      <div className="quotes-grid">
        {quotes.map((q, i) => (
          <div className="card quote-card" key={i}>
            <p className="quote-text">“{q.text}”</p>
            <small className="quote-user">— {q.user}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllQuotes;