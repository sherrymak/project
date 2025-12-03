import { useEffect, useState } from "react";
import API from "../api";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [form, setForm] = useState({ driverId: "", amount: "" });

  const fetchDrivers = async () => {
    const res = await fetch(`${API}/drivers`);
    setDrivers(await res.json());
  };

  const fetchPayments = async () => {
    const res = await fetch(`${API}/payments`);
    setPayments(await res.json());
  };

  const addPayment = async () => {
    await fetch(`${API}/payments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchPayments();
  };

  useEffect(() => {
    fetchDrivers();
    fetchPayments();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Payment</h2>

      <select onChange={(e) => setForm({ ...form, driverId: e.target.value })}>
        <option>Select Driver</option>
        {drivers.map((d) => (
          <option key={d._id} value={d._id}>{d.name}</option>
        ))}
      </select>

      <input
        placeholder="Amount"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <button onClick={addPayment}>Save</button>

      <h2>Payments List</h2>
      {payments.map((p) => (
        <p key={p._id}>
          {p.driverId?.name} — KES {p.amount}
        </p>
      ))}
    </div>
  );
}
