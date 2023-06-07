const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.186.242",// IP address here,
    port: 50541// PORT number here,
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