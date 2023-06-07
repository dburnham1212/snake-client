// setup interface to handle user input from stdin
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
  if(key === "w"){
    console.log("w key pressed");
    connection.write("Move: up");// send movement to server
  } else if(key === "a"){
    console.log("a key pressed");
    connection.write("Move: left");// send movement to server
  } else if(key === "s"){
    console.log("s key pressed");
    connection.write("Move: down");// send movement to server
  } else if(key === "d"){
    console.log("d key pressed");
    connection.write("Move: right");// send movement to server
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };