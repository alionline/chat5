import React, { useState } from "react";
import { io } from "socket.io-client";
import {useRouter} from "next/router";
const socket = io("http://localhost:8000", { transports: ["websocket"] });

export default function ChatRoomWeb3() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [list, setList] = useState([]);
  const { query } = useRouter();

  const username = query.username;


  const handlepost = async (e) => {
    e.preventDefault();
    // socket.emit('send-message', { room_id, name, senderName: socket.id, id: Date.now() });
    socket.emit("room", { room: 2, username: username, post: name });
  };


  socket.on("message", (data) => {
    setList([...list, data]);
  });

//   socket.on('channel', channel => {
            
//     let channels = this.state.channels;
//     channels.forEach(c => {
//         if (c.id === channel.id) {
//             c.participants = channel.participants;
//         }
//     });
//     this.setState({ channels });
// });

  return (
    <div>

      <div className="chat-container">
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> Chat
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
          <h2 id="roomName">
              Why Web3?
          </h2>
          <h3>
            <i className="fas fa-users"></i> Users
          </h3>
          <ul id="users"></ul>
        </div>
        <div className="chat-messages">
          
          {list.filter(function (message) {
              return message.room == 2;
            }).map((p) => (
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
