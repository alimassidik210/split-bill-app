import React, { useState } from "react";
import FreindList from "./components/FreindList";
import FormAddFriend from "./components/FormAddFriend";
import FromSplitBill from "./components/FromSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handelAddFriend(friend) {
    setFriends([...friends, friend]);
  }

  function handleSelectedFriend(x) {
    setSelectedFriend((selected) => (selected?.id === x.id ? null : x));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return { ...friend, balance: friend.balance + value };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  function handleDeleteFriend(id) {
    setFriends((friends) => friends.filter((friend) => friend.id !== id));
  }

  return (
    <>
      <h1 className="text-4xl text-center capitalize mb-3">split bill app</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-96 gap-6 sm:mt-10 sm:mx-auto sm:max-w-6xl">
        <div className="flex flex-col gap-5 border-t-4 pt-4">
          <FreindList
            friends={friends}
            onSelected={handleSelectedFriend}
            onDeleteFriend={handleDeleteFriend}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddfriend={handelAddFriend} />}
          <div className="flex justify-end items-center gap-3 ">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="5"
              className="bg-gray-500 p-4 text-white rounded-md"
            >
              Ayo tembah teman Alhamdulillah ala kulli hal 🤲
            </marquee>
            <button
              className={`${
                showAddFriend ? "bg-red-700 p-4" : "bg-green-700 p-2"
              } text-sm rounded-md  text-white`}
              onClick={() => {
                setShowAddFriend(!showAddFriend);
                setSelectedFriend(null);
              }}
            >
              {showAddFriend ? "Tutup" : "Tambah Teman"}
            </button>
          </div>
        </div>
        {selectedFriend !== null && (
          <FromSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}
