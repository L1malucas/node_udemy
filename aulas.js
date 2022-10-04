//Arquivo único das aulas referentes ao curso nodejs com matheus battisti.
//Projetos serão desenvolvidos separadamente

//aula  1 - console log
//console.log('Hello world node');

// aula 2 - módulo file system
//const fs = require('fs');

//readFile ('local do arquivo', 'tipo do encode', função anonima)
// fs.readFile ('arquivo.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// })

// aula 3- export import - módulo interno (criado pelo usuário)

// function soma(a, b) {
//   console.log(a + b);
// }
// export default soma;

// import soma from "./aulas";

// aula 4 - core modules - módulos embutidos no node
// const path = require('path');
// const extension = path.extname("arquivo.pdf"); //extrai a extensao do arquivo passado como parametro
// console.log(extension);

//aula 5 - argumentos (process.argv e minimist)

//const minimist = require('minimist');

// limpar o console
// setTimeout(() => {
//   console.clear();
// }, 2000);

// input output
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question("What is your favorite food? ", (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
// });

// //inquirer
// const inquirer = require("inquirer");
// inquirer
//   .prompt([
//     {
//       name: "p1",
//       message: "pergunta 1",
//     },
//     {
//       name: "p2",
//       message: "pergunta 2",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//   })
//   .catch((err) => console.log(err));

// event emitter
// const eventemitter = require("events");
// const eventemitter = new EventEmitter();

// eventemitter.on("my_event", () => {
//   console.log("data received successfully.");
// });
// console.log("antes");
// eventemitter.emit("my_event");
// console.log("depois");

//tarefa 2 (uso de inquirer,chalk, promisse e catch)
// const chalk = require("chalk");
// const inquirer = require("inquirer");

// inquirer
//   .prompt([
//     {
//       name: "p1",
//       message: "qual seu nome?",
//     },
//     {
//       name: "p2",
//       message: "qual sua idade?",
//     },
//   ])
//   .then((answers) => {
//     console.log(chalk.bgYellow.black(answers));
//   })
//   .catch((err) => console.log(err));
