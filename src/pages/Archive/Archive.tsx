import { useEffect, useState } from "react";
import { INote } from "../../interfaces";
import axios from "axios";
import SavedNotes from "../../components/savedNotes/SavedNotes";

const Archive = () => {
  const [archiveNotes, setArchiveNotes] = useState<Array<INote>>([]);

  const fetchArchiveNotes = async () => {
    const response = await axios.get("http://localhost:5000/notes", {params: { status: "archive" }});
    setArchiveNotes(response.data);
  };

  useEffect(() => {
    fetchArchiveNotes();
  }, []);

  return (
    <div className="archive_main">
      {archiveNotes.map((archiveNote) => (
        <SavedNotes
          note={archiveNote}
          key={archiveNote._id}
          status={'archive'}
        />
      ))}
    </div>
  );
};

export default Archive;
