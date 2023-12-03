import React from "react";
import NoteForm from "../components/NoteForm";
import { INoteData, ITag } from "../interface/INoteData";

type NoteFormProps = {
  onSubmit: (formData: INoteData) => void;
  onAddTag: (tag: ITag) => void;
  availableTags: ITag[];
};

const NewNote: React.FunctionComponent<NoteFormProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NoteFormProps): React.JSX.Element => {
  return (
    <>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
