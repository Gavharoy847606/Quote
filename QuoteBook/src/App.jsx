import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import MyQuotes from "./pages/MyQuotes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">Quote App</h1>
          <div className="nav-links">
            <Link to="/">All Quotes</Link>
            <Link to="/add">Add Quote</Link>
            <Link to="/my">My Quotes</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<AllQuotes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<AddQuote />} />
            <Route path="/my" element={<MyQuotes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;