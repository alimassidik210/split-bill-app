import React, { useState } from "react";

export default function FromSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const [buyer, setBuyer] = useState("user");

  const friendBill = amount ? amount - myBill : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(buyer === "user" ? friendBill : -myBill);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-2 text-sm capitalize gap-3 sm:h-96 bg-emerald-500 p-4 rounded-md"
    >
      <h3 className="sm:col-span-2 text-xl sm:text-xl mt-3 mb-3">
        tagihan kamu bareng {selectedFriend.name}
      </h3>
      <label>🍻total tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label>💰tagihan kamu</label>
      <input type="text" onChange={(e) => setMyBill(e.target.value)} />
      <label>💲tagihan {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />
      <label>🤝Siapa yang nalangin</label>
      <select value={buyer} onChange={(e) => setBuyer(e.target.value)}>
        <option value="user">kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="sm:col-span-2 bg-gray-800 p-2 rounded-md hover:opacity-80 text-white mt-2">
        tambah
      </button>
    </form>
  );
}
