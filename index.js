
const yargs= require("yargs");

const fs= require("fs");

const date=require("myModile") ;


// yargs.command({
//     command:"add",
//     description:"add some logic",
//     builder:{
//         titel:{
//             describe: 'a unique identifier for the server',
//             // demandOption:true,
//             type: 'string'
//         },
//         name:{
//             describe:'halow from ather side',
//             demandOption:true,
//             type: 'string'
//         },
        
//     },
//     handler:()=>{
//         console.log("good")
        
//         console.log(yargs.argv.titel,"add");

//     }
// })
// console.log(yargs.argv.titel,"add");

// console.log(yargs.argv);

// let a=JSON.parse(date.porson.toString())
fs.writeFileSync('notes.json',date.porson.toString())

const myFile=fs.readFileSync("./notes.txt").toString()
console.log(myFile)
console.log("thank you god ")