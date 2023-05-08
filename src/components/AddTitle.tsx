import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { useState } from "react";
import * as dayjs from "dayjs";

interface propType {
  isReminder: boolean;
}

const TakeNote = ({ isReminder }: propType) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e: any) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    console.log(title, note);
    setNote("");
    setTitle("");
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
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Add Note"
          multiline
          maxRows={100}
          style={{ width: "50%" }}
          value={note}
          onChange={handleNoteChange}
        />

        <div
          style={{
            width: "50%",
            display: "flex",
          }}
        >
          <div>
            
            {isReminder && (<LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={["DesktopDateTimePicker"]}>
                  <DateTimePicker />
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
          >
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "7px 30px 7px 30px" }}
                onClick={handleSubmit}
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
