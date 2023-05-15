import { useEffect, useState } from "react";
import { INote } from "../../interfaces";
import axios from "axios";
import SavedNotes from "../../components/savedNotes/SavedNotes";

const Trash = () => {

  const [ trashNotes, setTrashNotes ] = useState<Array<INote>>([]);

  const fetchTrashNotes = async() => {
    const response = await axios.get('http://localhost:5000/notes', {params: {status: "trash"}});
    setTrashNotes(response.data);
  }

  useEffect(()=>{
    fetchTrashNotes();
  },[]);

  return (
    <div className="trash_main">
      {trashNotes.map((trashNote)=> <SavedNotes note={trashNote} key={trashNote._id} status={'trash'}/>)}
    </div>
  )
}

export default Trash
