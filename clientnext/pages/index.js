import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:8000", { transports: ["websocket"] });

export default function Home() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const handlepost = async (e) => {
    e.preventDefault();
    socket.emit("room", { username: 'ali', post: name });
  };
  socket.on("message", (data) => {
    setList([...list, data]);
  });
  return (
    <div>
      test
      {/* <br />
      
      <button onClick={handlepost}>send comment</button>
      {JSON.stringify(list)} */}



      <div className="chat-container">
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> ChatCord
        </h1>
        <a id="leave-btn" className="btn">
          Leave Room
        </a>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h3>
            <i className="fas fa-comments"></i> Room Name:
          </h3>
          <h2 id="roomName"></h2>
          <h3>
            <i className="fas fa-users"></i> Users
          </h3>
          <ul id="users"></ul>
        </div>
        <div className="chat-messages">
          
          {list.map((p) => (
            <div className="message">
              <p className="meta">{p.username}</p>
              <p>{p.post}</p>
              </div>
          ))}
        </div>
      </main>
      <div className="chat-form-container">
        <form id="chat-form" onSubmit={handlepost}>
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <button>send comment</button>
        </form>
        {/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
          
      </div>
    </div>





    </div>
  );
}
