import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { INote } from "../../interfaces";

interface propType {
  note: INote;
  status?: INote["status"]
}

export default function SavedNotes({ note, status }: propType) {
  return (
    <Card sx={{ width: 275, marginRight: "20px", marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {note.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {note.description}
        </Typography>
        <CardActions>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {
              status !== "trash" ? (

                <>
                  {status !== "archive" &&
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ marginRight: "10px" }}
                    >
                      Archive
                    </Button>
                  }
                  <Button variant="outlined" color="error" size="small">
                    Delete
                  </Button>
                </>
              ) : null
            }

          </div>
        </CardActions>
      </CardContent>
    </Card>
    // </div>
  );
}
