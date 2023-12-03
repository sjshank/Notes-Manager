import React from "react";
import NoteForm from "../components/NoteForm";
import { INoteData, ITag } from "../interface/INoteData";
import { useNoteContext } from "./NoteLayout";

type NoteFormProps = {
  onSubmit: (id: string, formData: INoteData) => void;
  onAddTag: (tag: ITag) => void;
  availableTags: ITag[];
};

const EditNote: React.FunctionComponent<NoteFormProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NoteFormProps): React.JSX.Element => {
  const note = useNoteContext();

  return (
    <NoteForm
      onSubmit={(data) => onSubmit(note.id, data)}
      onAddTag={onAddTag}
      availableTags={availableTags}
      title={note.title}
      notes={note.notes}
      tags={note.tags}
    />
  );
};

export default EditNote;
