const fs = require ('fs');
const yargs = require ('yargs');
const notes=require("./notes.js")
//const notesjson = require("./notes.json")
yargs.command({
    command:"add",
    describe:"to add new note",
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"note body",
            demandOption:true,
            type:"string"

        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command:"remove",
    describe:"to remove note",
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:"list",
    describe:"list all notes",
    handler(argv){
        notes.listNotes()
    }
})
yargs.command({
    command:"read",
    describe:"read notes",
    builder:{
    title:{
        demandOption:true,
        type:"string"
    }},
    handler(argv){
        notes.getNotes(argv.title)
    }
})
yargs.parse()