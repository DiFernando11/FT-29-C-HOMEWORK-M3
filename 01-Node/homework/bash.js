const commands = require('./commands/index.js');
const print = (output) => {
process.stdout.write(output);
process.stdout.write("\nprompt > ")
}

process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  let args = data.toString().trim().split(" "); // remueve la nueva línea
  const cmd = args.shift();
(commands[cmd]) ? commands[cmd](args, print) :  print("command not found");
});
