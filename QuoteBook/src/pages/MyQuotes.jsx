function MyQuotes() {
  const myQuotes = [
    { text: "Men yozgan maqol 1" },
    { text: "Men yozgan maqol 2" },
  ];

  return (
    <div>
      <h2 className="page-title">My Quotes</h2>

      <div className="quotes-grid">
        {myQuotes.map((q, i) => (
          <div className="card quote-card" key={i}>
            <p className="quote-text">“{q.text}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyQuotes;