const fs = require ("fs")

const getNotes= ((title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(note){
        console.log(note.title)
        console.log(note.body)
    }else{
        console.log("notes not found")
    }
})
debugger
const removeNotes = function(title){
    const note = loadNotes()
    const newNote = note.filter(function(abc){
        return abc.title !==title
    })
    saveNotes(newNote)
    console.log("notes deleted")
}

const addNote = function(title, body){
    const Note = loadNotes()
    const duplicate = Note.filter((note)=>{
        return note.title===title
    })
    if(duplicate.length===0){
        Note.push({
            "title":title,
            "body":body
        })
    saveNotes(Note)
        
    }  else{
        console.log("title taken")
    }
}
const listNotes=function(){
    const notes =loadNotes()
    console.log("your notes")
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const saveNotes= function(Note){
    const dataJSON = JSON.stringify(Note)
    fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes = function(){
    try{
        const databuffer = fs.readFileSync("notes.json")
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return []
    }
}
module.exports ={
    addNote:addNote,
    getNotes:getNotes,
    removeNotes:removeNotes,
    listNotes:listNotes
}