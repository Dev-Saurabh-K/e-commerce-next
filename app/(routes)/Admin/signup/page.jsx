"use client";
import axios from "axios";
import { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/admin/signup", form);
      console.log(res.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Page;
