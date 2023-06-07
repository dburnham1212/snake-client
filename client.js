const net = require("net");
const { IP, PORT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, Z, X, C, V } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: ABC");// send name to server
    // setInterval(() => {
    //   conn.write("Move: up");// send movement to server
    // }, 50);
  });
  
  //Handles incoming data and logs it for the player
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };