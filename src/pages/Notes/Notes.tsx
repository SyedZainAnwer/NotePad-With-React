import { SetStateAction, useState } from "react"
import AddNote from "../../components/AddNote"
import AddTitle from "../../components/AddTitle/AddTitle"
import SavedNotes from "../../components/savedNotes/SavedNotes"
import '../Notes/notes.css'

const Notes = () => {
  const [ title, setTitle ] = useState("Zain");

  return (
    <div>
      <AddTitle isReminder={false} />
      <div className="add_note">
      <SavedNotes />
      </div>
    </div>
  )
}

export default Notes
