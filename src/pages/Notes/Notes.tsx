import { SetStateAction, useState } from "react"
import AddNote from "../../components/AddNote"
import AddTitle from "../../components/AddTitle"
import SavedNotes from "../../components/savedNotes/SavedNotes"
import '../Notes/notes.css'

const Notes = () => {
  const [ title, setTitle ] = useState("");

  return (
    <div>
      <AddTitle isReminder={false} />
      <div className="add_note">
      {/* <AddNote title2={title}/> */}
      <SavedNotes />
      </div>
    </div>
  )
}

export default Notes
