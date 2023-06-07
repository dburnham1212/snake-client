// setup interface to handle user input from stdin
const { IP, PORT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, Z, X, C, V } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // on any input from stdin (standard input), output a "." to stdout
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //input
  if(key === MOVE_UP_KEY){
    console.log("w key pressed");
    connection.write("Move: up");// send movement to server
  } else if(key === MOVE_LEFT_KEY){
    console.log("a key pressed");
    connection.write("Move: left");// send movement to server
  } else if(key === MOVE_DOWN_KEY){
    console.log("s key pressed");
    connection.write("Move: down");// send movement to server
  } else if(key === MOVE_RIGHT_KEY){
    console.log("d key pressed");
    connection.write("Move: right");// send movement to server
  } 
  //canned user messages
  if(key === "z"){
    console.log("z key pressed");
    connection.write(`Say: ${Z}`);// send movement to server
  } else if(key === "x"){
    console.log("x key pressed");
    connection.write(`Say: ${X}`);// send movement to serverw
  } else if(key === "c"){
    console.log("c key pressed");
    connection.write(`Say: ${C}`);// send movement to server
  } else if(key === "v") {
    console.log("v key pressed");
    connection.write(`Say: ${V}`);// send movement to server
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };