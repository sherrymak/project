import { useEffect, useState } from "react";
import API from "../api";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "" });

  const fetchDrivers = async () => {
    const res = await fetch(`${API}/drivers`);
    setDrivers(await res.json());
  };

  const addDriver = async () => {
    await fetch(`${API}/drivers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchDrivers();
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Driver</h2>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button onClick={addDriver}>Save</button>

      <h2>Drivers List</h2>
      {drivers.map((d) => (
        <p key={d._id}>{d.name} — {d.phone}</p>
      ))}
    </div>
  );
}
