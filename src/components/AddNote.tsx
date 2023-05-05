import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface propType {
  title2: string;
}

const AddNote = ({ title2 }: propType) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "left",
          width: "70%",
        }}
      >
        <h3>
          Title : <span style={{ fontWeight: "200" }}>{title2}</span>{" "}
        </h3>
      </div>

      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        multiline
        style={{ width: "70%" }}
        rows={10}
      />

      <div>
        <Button variant="contained" size="large" color="warning">Submit</Button>
      </div>
    </div>
  );
};

export default AddNote;
