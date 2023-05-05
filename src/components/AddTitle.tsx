import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TakeNote = ({ handleTitle }: any) => {
  const [note, setNote] = useState("");
  const [updatedNote, setUpdatedNote] = useState(note);

  const handleChange = (e: any) => {
    setNote(e.target.value);
  };

  // const handleSubmit = () => {
  //   setUpdatedNote(note);
  //   setNote('');
  // };

  const addTitle = (note:string) => {
    if( note === "" ){
    // ?do nothing
    }else{
        handleTitle(note),
         setNote("")
      
      }
    }
  

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
    >
      <TextField
        id="outlined-helperText"
        label="Add title"
        style={{
          width: "40%",
          boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        }}
        onChange={handleChange}
        value={note}
      />
      <div
        className="btn"
        style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => addTitle(note)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default TakeNote;
