import React, { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  return (
    <div class="join-container">
      <header class="join-header">
        <h1>
          <i class="fas fa-smile"></i> ChatCord
        </h1>
      </header>
      <main class="join-main">
        <form action="chat">
          <div class="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-control">
            <label for="room">Room</label>
            <a href={`/chatRoomNFT?username=${name}`} class="button">Why NFT</a>
            <a href={`/chatRoomWeb3?username=${name}`} class="button">Why Web3</a>
            <a href={`/chatRoomResign?username=${name}`} class="button">The Great Resignation</a>
          </div>
        </form>
      </main>
    </div>
  );
}
