"use client";

import axios from "axios";

import { useState } from "react";

const page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", form);
      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data||error.message);
    }
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit}>
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

export default page;
