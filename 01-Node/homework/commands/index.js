let fs = require("fs");
const { request } = require("http");

module.exports = {
  echo: (args, print) => {
    print(args.join(" "));
  },
  date: (args, print) => {
    print(Date());
  },
  ls: (args, print) => {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      print(files.join("\n"))

    });
  },
  pwd: (args, print) => {
    print(process.cwd());
  },
  cat: (args, print) =>{
    fs.readFile(args[0], "utf-8", function(err, data){
      if (err) throw err;
      print(data)
    })
  },
  head: (args, print) =>{
    fs.readFile(args[0], "utf-8", function(err, data){
      if (err) throw err;
      print(data.split("\n").splice(0,args[1]).join("\n"));
    })
  }, 
  tail:(args,print) =>{
    fs.readFile(args[0], "utf-8", function(err, data){
      if (err) throw err;
      print(data.split("\n").splice(-args[1]).join("\n"));
    })
  },
  curl:(args, print) => {
    request(args[0], function(err,data){
      if(err) throw err;
      print(data.body)
    })
  }
};
