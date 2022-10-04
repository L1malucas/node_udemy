const fs = require("fs");

if (!fs.existsSync("./pasta")) {
  console.log("nao existe");
  fs.mkdirSync("./pasta");
} else {
  console.log("existe");
}
