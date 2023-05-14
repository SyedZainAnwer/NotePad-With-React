import { useEffect, useState } from "react";
import { INote } from "../../interfaces";
import axios from "axios";

const Trash = () => {

  // const [ trashNotes, setTrashNotes ] = useState<Array<INote>>([]);

  // const fetchTrashNotes = async() => {
  //   const response = await axios.get('http://localhost:5000/trash');
  //   setTrashNotes(response.data);
  // }

  // useEffect(()=>{
  //   fetchTrashNotes();
  // },[]);

  return (
    <div className="trash_main">
      {/* {trashNotes.map((trashNote)=> <SavedNotes/>)} */}
    </div>
  )
}

export default Trash
