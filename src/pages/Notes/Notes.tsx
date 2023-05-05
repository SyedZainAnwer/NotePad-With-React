import { SetStateAction, useState } from "react"
import AddNote from "../../components/AddNote"
import AddTitle from "../../components/AddTitle"
import '../Notes/notes.css'

const Notes = () => {
  const [ title, setTitle ] = useState("");

  return (
    <div>
      <AddTitle handleTitle = {(title: SetStateAction<string>) => setTitle(title) }/>
      <div className="add_note">
      <AddNote title2={title}/>
      </div>
    </div>
  )
}

export default Notes
