const add= require('./nodes')
const yargs = require('yargs')

yargs.command({
   command:'read' ,
   describe:'read note',
   builder:{
    title:{
        describe:'thia is title',
        demandoptiOn:true,
        type:'string'
    },
    body:{
        describe:'thia is body',
        type:'string'

    }
}, 
   handler:(argv)=>{
       add.readNote(argv.title, argv.body)
   }
})

yargs.command({
    command:'write' ,
    describe:'write note', 
    builder:{
        title:{
            describe:'thia is title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'thia is body',
            type:'string'

        }
    },
    handler:(argv) =>{
        add.addnote(argv.title,argv.body)
    }
 })
 yargs.command({
    command:'delet' ,
    describe:'delet note', 
    builder:{
        title:{
            describe:'thia is title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'thia is body',
            type:'string'

        }
    },
    handler:(argv)=>{
        add.removetitle( argv.title)
    }
 })
 yargs.command({
    command:'list' ,
    describe:'list note',
 
    handler:(argv)=>{
      add.listtitle(argv.title)
    }
 })
 console.log(yargs.argv)
// const person={
//     name:'mai',
//     age:'27'
// }
// const newperson=JSON.stringify(person)
// console.log(newperson)

// const fs =require('fs')
// fs.writeFileSync('node.txt.json',newperson)
// console.log(fs.readFileSync('node.txt.json').toString())
// const m=JSON.parse(newperson)
// console.log(m)
// m.name="seif"
// m.age="8"
// const r=JSON.stringify(m)

// fs.writeFileSync('node.txt.json',r)



