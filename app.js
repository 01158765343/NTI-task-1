// const fs = require('fs')
// fs.writeFileSync('notes.json',"what:Helloo")
// const s =fs.readFileSync("notes.json").toString()

// console.log(s)
const yargs= require("yargs")


const student = require('./student/addStudent.js')
yargs.command({
    command:'add',
    describe:'Add note',
    // options 
    builder:{
        title:{
            describe:'This is title in add command',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body in add command',
            demandOption:true,
            type:"array"
        }
    },
    handler:(argv)=>{
        // console.log(argv.name,argv.body)
        console.log(argv.title)
        student.allStudent()
        student.addOneStudent(argv.title,argv.body)
    }
})


yargs.command({
    command:'delet',
    describe:'delet note',
    // options 
    builder:{
        name:{
            describe:'This is title in remov command',
            demandOption:true,
            type:'string'
        },
        
    },
    handler:(argv)=>{
        // console.log(argv.name,argv.body)
        
        student.deletStudent(argv.name)
    }
})


yargs.command({
    command:'delet',
    describe:'handel gredes',
    // options 
    builder:{
        name:{
            describe:'This is title in remov command',
            demandOption:true,
            type:'string'
        },
        
    },
    handler:(argv)=>{
        // console.log(argv.name,argv.body)
        
        student.handelGrades(argv.name)
    }
})

console.log(yargs.argv)