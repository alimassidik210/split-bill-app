import React, { useState } from "react";

export default function FormAddFriend({ onAddfriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddfriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-4 gap-2 sm:gap-4 bg-gray-100 text-sm p-3"
    >
      <label className="sm:col-span-1"> 🤞Nama </label>
      <input
        type="text"
        className="sm:col-span-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="sm:col-span-1">📸Gambar </label>
      <input
        type="text"
        className="sm:col-span-3"
        value={image}
        disabled
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="sm:col-start-2 sm:col-span-3 bg-gray-700  text-white p-2 rounded-md  hover:opacity-50 ">
        Tambah
      </button>
    </form>
  );
}
