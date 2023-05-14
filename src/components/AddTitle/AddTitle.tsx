import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import '../AddTitle/AddTitle.css'
import axios from 'axios'
import {INote} from '../../interfaces/index'
import { useState } from "react";

interface propType {
  isReminder: boolean,
  addRecentNote: (note:INote) => void 
}

const TakeNote = ({ isReminder, addRecentNote }: propType) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e: any) => {
    setNote(e.target.value);
  };

  const AddNote = async() => {
    // console.log(title, note);
    const response = await axios.post('http://localhost:5000/notes', {
      title,
      description: note,
      status: 'note'
    })
    setNote("");
    setTitle("");
    addRecentNote(response.data.data);
    // console.log(response.data)
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          paddingBottom: "50px",
          alignItems: "center",
        }}
      >
        <TextField
          id="outlined-search"
          label="Add Title"
          type="search"
          style={{ width: "50%", marginBottom: "10px" }}
          value={title}
          onChange={handleTitleChange}
          className='input_text'
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Add Note"
          multiline
          maxRows={100}
          style={{ width: "50%" }}
          value={note}
          onChange={handleNoteChange}
          className='input_text'
        />

        <div className="add_area">
          <div>
            
            {isReminder && (<LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DesktopDateTimePicker"]}>
                  <DateTimePicker className="date_time_picker"/>
              </DemoContainer>
            </LocalizationProvider>)}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              marginTop: "8px",
            }}
            className='add_btn'
          >
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "7px 30px 7px 30px" }}
                onClick={AddNote}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeNote;
