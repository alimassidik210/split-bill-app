import React from "react";
import { formantCurrency } from "../utils/formtCurrency";
import { FaTrash } from "react-icons/fa";

export default function Friend({
  friend,
  onSelected,
  selectedFriend,
  onDeleteFriend,
}) {
  const isSelected = selectedFriend?.id === friend?.id;
  return (
    <li
      className={`grid grid-cols-7 gap-3 text-sm sm:text-md items-center mb-5 p-3 ${
        isSelected && "bg-gray-200  rounded-md"
      }`}
    >
      <img src={friend.image} alt={friend.name} className="rounded-full" />
      <div className="col-span-4">
        <h3 className="">{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="text-red-700">
            {friend.name} berhutang {formantCurrency(Math.abs(friend.balance))}{" "}
            kepadamu
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-700">
            kamu berhutang {formantCurrency(Math.abs(friend.balance))} kepada{" "}
            {friend.name}
          </p>
        )}
        {friend.balance === 0 && (
          <p className="text-slate-700">
            kamu dan {friend.name} tidak ada hutang
          </p>
        )}
      </div>
      <div className="flex gap-2 items-center  justify-center col-span-2">
        <button
          className="bg-gray-600  text-white p-2 rounded-md"
          onClick={() => onSelected(friend)}
        >
          {isSelected ? "Tutup" : "Pilih"}
        </button>
        <FaTrash
          onClick={() => onDeleteFriend(friend.id)}
          className="text-red-700 text-2xl"
        />
      </div>
    </li>
  );
}
