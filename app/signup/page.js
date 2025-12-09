"use client";

import { useState } from "react";
const Page = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Page;
