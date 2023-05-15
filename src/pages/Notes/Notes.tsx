import { useEffect, useState } from "react"
import AddTitle from "../../components/AddTitle/AddTitle"
import SavedNotes from "../../components/savedNotes/SavedNotes"
import '../Notes/notes.css'
import axios from 'axios';
import { INote } from "../../interfaces";

const Notes = () => {

  const [ notes, setNotes ] = useState<Array<INote>>([]);

  const fetchNotes = async() => {
    // const response = await fetch('http://localhost:5000/notes');
    // const data = await response.json();
    // console.log(data)

    const response = await axios.get('http://localhost:5000/notes');
    setNotes(response.data);
  }

  const addRecentNote = (note:INote) =>{
    setNotes([...notes, note]);
  }
  // console.log(notes)
  useEffect(()=> {
    fetchNotes();
  },[])

  return (
    <div>
      <AddTitle addRecentNote={addRecentNote} isReminder={false} />
      <div className="add_note">
        {notes.map((note)=> <SavedNotes note={note} key={note._id} />)}
      </div>
    </div>
  )
}

export default Notes
