// const { Socket } = require("socket.io-client");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// var ROOMS = [{
//   name: 'Why NFT',
//   participants: 0,
//   id: 1,
//   sockets: [],
//   full: false
// }, {
//   name: 'Why Web3',
//   participants: 0,
//   id: 2,
//   sockets: [],
//   full: false
// }, {
//   name: 'The Great Resignation',
//   participants: 0,
//   id: 3,
//   sockets: [],
//   full: false
// }];


// io.on("connection", (socket) => {
//   console.log("user xyz");
//   socket.on("join-room",  id => {
//     ROOMS.forEach(room => {
//       if (room.id === id) {

//         if (room.sockets.indexOf(socket.id) == (-1)) {
//           room.sockets.push(socket.id);
//           room.participants++;
//           // if(room.participants == 2 ){
//           //     room.full = true
//           // }else if( room.participants < 2) {
//           //     room.full = false
//           // }
//           io.emit('channel', room);
//       }






//       } else {
//         let index = room.sockets.indexOf(socket.id);
//         if (index != (-1)) {
//             room.sockets.splice(index, 1);
//             room.participants--;
//             // if(room.participants == 2 ){
//             //     room.full = true
//             // }else if( room.participants < 2) {
//             //     room.full = false
//             // }
//             io.emit('channel', room);
//         }
//     }



//     })
//     socket.on('send-message', message => {
//       io.emit('message', message);
//     });

//     socket.on('disconnect', () => {
//       ROOMS.forEach(c => {
//           let index = c.sockets.indexOf(socket.id);
//           if (index != (-1)) {
//               c.sockets.splice(index, 1);
//               c.participants--;
//               io.emit('channel', c);
//           }
//       });
//   });




//     console.log('hallo', data)
//     io.emit("message", data);
//   });
// });









io.on("connection", (socket) => {
  console.log("user xyz");
  console.log(socket)
  socket.on("room", function (data) {
    console.log('hallo', data)
    io.emit("message", data);
  });
});
server.listen(8000);
