const chalk = require('chalk')
const { parse } = require('path')
const validator = require('validator')
const { describe } = require('yargs')
const yargs = require('yargs')


yargs.command({
    command:"add",
    describe:"adding note",
    handler: function(){
        console.log('add note to see')
    }
})

yargs.command({
    command:"remove",
    describe:"removing note",
    handler: function(){
        console.log('deleting note')
    }
})

yargs.command({
    command:"list",
    describe:"listing note",
    builder:{
        title:{
            describe:"all notes",
           demandOption:true,
            type:"string"
        }
    },
    handler: function(argv){
        console.log('Title >> '+ argv.title)
    }
})

yargs.command({
    command:"read",
    describe:"reading note",
    handler: function(){
        console.log('read specific note')
    }
})
yargs.parse()
// console.log(process.argv)
// console.log(yargs.argv)

