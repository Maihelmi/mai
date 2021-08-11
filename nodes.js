const fs=require('fs')
const { title } = require('process')
const addnote=(title,body)=>{
    const notes= loadnotes()
    const duplicatedTitles=notes.filter((note)=>{
        return note.title===title
    })
    if(duplicatedTitles.length===0){
    notes.push({
        title,
        body
    })
}else{
    console.log('error')
}
    savenotes(notes)

}
const loadnotes=()=>{
   
    try{
        const buffer=fs.readFileSync('load.json').toString()
       return JSON.parse(buffer)

    }
    catch(e){
       return []
    }
}

const savenotes=(notes)=>{
    const save=JSON.stringify(notes)
    fs.writeFileSync('load.json',save)
}


const removetitle= (title) =>{
const notes =loadnotes()
const notesToKeep=notes.filter((note)=>{
    return note.title !== title
})
console.log(notesToKeep)
savenotes(notesToKeep)
}
const readNote = (title)=>{
    const notes=loadnotes()
    const note=notes.find((note) => {
        return note.title===title
    })
    if(note){
        console.log(note)

    }

}

const listtitle= () =>{
    const notes =loadnotes()
    notes.forEach((note)=>{
      console.log(note)
    })
    
   
    }


    

module.exports={
    addnote,
    removetitle,
    readNote,
    listtitle
  
   
}