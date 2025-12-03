import { useEffect, useState } from "react";
import API from "../api";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({ plateNumber: "", route: "" });

  const fetchCars = async () => {
    const res = await fetch(`${API}/cars`);
    setCars(await res.json());
  };

  const addCar = async () => {
    await fetch(`${API}/cars`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchCars();
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Car</h2>
      <input
        placeholder="Plate Number"
        onChange={(e) => setForm({ ...form, plateNumber: e.target.value })}
      />
      <input
        placeholder="Route"
        onChange={(e) => setForm({ ...form, route: e.target.value })}
      />
      <button onClick={addCar}>Save</button>

      <h2>Cars List</h2>
      {cars.map((c) => (
        <p key={c._id}>{c.plateNumber} — {c.route}</p>
      ))}
    </div>
  );
}
