import React from "react";
import Friend from "./Friend";

export default function FreindList({
  friends,
  onSelected,
  selectedFriend,
  onDeleteFriend,
}) {
  return (
    <ul className="">
      {friends.map((friend, index) => (
        <Friend
          friend={friend}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
          key={index}
          onDeleteFriend={onDeleteFriend}
        />
      ))}
    </ul>
  );
}
