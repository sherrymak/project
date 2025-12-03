import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#222", color: "white" }}>
      <Link to="/drivers" style={{ marginRight: 20, color: "white" }}>Drivers</Link>
      <Link to="/cars" style={{ marginRight: 20, color: "white" }}>Cars</Link>
      <Link to="/payments" style={{ color: "white" }}>Payments</Link>
    </nav>
  );
}
