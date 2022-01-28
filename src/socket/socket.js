import socketClient from "socket.io-client";

// var socket = socketClient({
//   autoConnect: true,
// });

const socket = socketClient("http://localhost:4000");

export default socket;
