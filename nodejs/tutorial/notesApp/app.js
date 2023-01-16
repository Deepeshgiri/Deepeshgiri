
const yargs = require('yargs')
const fs = require('fs')
const notes= require('./notes.js')


yargs.command({
    command:"add",
    describe:"adding note",
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'String'
        },
        body:{
            describe:'note body ',
            demandOption: true,
            type: 'string'
        },
        handler:function(argv){
            notes.addNote(argv.title, argv.body)
        }
    }
})

//fs.writeFileSync('/notes.json')

yargs.parse();
// console.log(process.argv)
// console.log(yargs.argv)

