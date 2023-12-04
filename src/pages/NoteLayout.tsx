import React, { useEffect } from "react";
import {
  Outlet,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { INotedWithTags } from "../interface/INoteData";

type NoteDetailProps = {
  notes: INotedWithTags[];
};

const NoteLayout: React.FunctionComponent<NoteDetailProps> = ({
  notes,
}): React.JSX.Element => {
  const { id } = useParams();
  const note = notes.find((note) => {
    if (note.id == id) {
      return note;
    }
  });
  const navigate = useNavigate();
  useEffect(() => {
    let timeOut: number | undefined = undefined;
    if (note == undefined || note == null)
      setTimeout(() => {
        navigate("/");
      }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [note]);

  return (
    <>
      {(note == undefined || note == null) && (
        <div>
          Data does not exist for the request ! Navigating back to Home...
        </div>
      )}
      {note && <Outlet context={note} />}
    </>
  );
};

export default NoteLayout;

//this will return note context for child routes
export const useNoteContext = () => {
  return useOutletContext<INotedWithTags>();
};
