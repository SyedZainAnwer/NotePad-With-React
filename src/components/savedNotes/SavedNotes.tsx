import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function SavedNotes() {
  return (
    // <div style={{display:"flex", justifyContent:"center"}}>
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Title :
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          description
        </Typography>
        <CardActions>
          <div style={{width:"100%", display:"flex",justifyContent:"flex-end"}}>
          <Button variant="outlined" size="small" style={{marginRight:"10px"}}>Archive</Button>
          <Button variant="outlined" color="error" size="small">
            Delete
          </Button>
          </div>
        </CardActions>
      </CardContent>
    </Card>
    // </div>
  );
}
