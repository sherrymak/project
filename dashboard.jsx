import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    const res = await fetch(`${API}/payments`);
    setPayments(await res.json());
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const total = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <h3>Total Collected Today: KES {total}</h3>

      <div style={{ marginTop: 20 }}>
        <h3>Recent Payments</h3>
        {payments.map((p) => (
          <p key={p._id}>
            {p.driverId?.name} — KES {p.amount}
          </p>
        ))}
      </div>
    </div>
  );
}
