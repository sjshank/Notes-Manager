import React, { FormEvent, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import { INoteData, ITag } from "../interface/INoteData";
import { MultiValue } from "react-select";
import { v4 as uuidV4 } from "uuid";
import { useTranslation } from "react-i18next";

type NoteFormProps = {
  onSubmit: (formData: INoteData) => void;
  onAddTag: (tag: ITag) => void;
  availableTags: ITag[];
} & Partial<INoteData>;

const NoteForm: React.FunctionComponent<NoteFormProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  notes = "",
  tags = [],
}: NoteFormProps): React.JSX.Element => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<ITag[]>(tags);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const notesInputRef = useRef<HTMLTextAreaElement>(null);
  const { t } = useTranslation();
  const handleCancel: () => void = () => {
    navigate("/", { replace: true });
  };

  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    onSubmit({
      title: titleInputRef.current!.value,
      notes: notesInputRef.current!.value,
      tags: selectedTags,
    });

    navigate("/", { replace: true });
  };

  const tagChangeHandler = (
    tags: MultiValue<{
      label: string;
      value: string;
    }>
  ) => {
    setSelectedTags(() => {
      return tags.map((tag) => {
        return { label: tag.label, id: tag.value };
      });
    });
  };

  //This will create & set new tags
  const handleNewOptionCreation = (tagLbl: string) => {
    const newTag: ITag = { id: uuidV4(), label: tagLbl };
    onAddTag(newTag);
    setSelectedTags((prev) => [...prev, newTag]);
  };

  //restructure tags to render in CreatableSelect component
  const populateTags = (tags: ITag[]) => {
    return tags.map((tag) => {
      return { label: tag.label, value: tag.id };
    });
  };

  return (
    <Form className="note-form" onSubmit={handleSubmit}>
      <Stack gap={4} direction="horizontal" style={{ alignSelf: "center" }}>
        <Form.Group className="mb-3 note-title" controlId="titleId">
          <Form.Label>{t("Title")}</Form.Label>
          <Form.Control
            ref={titleInputRef}
            type="text"
            placeholder={t("Notes") + " " + t("Title")}
            defaultValue={title}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 note-tags" controlId="tagsId">
          <Form.Label>{t("Tags")}</Form.Label>
          <CreatableSelect
            isMulti
            onCreateOption={handleNewOptionCreation}
            value={populateTags(selectedTags)}
            options={populateTags(availableTags)}
            onChange={(tags) => tagChangeHandler(tags)}
            required
          />
        </Form.Group>
      </Stack>
      <Stack direction="horizontal" style={{ alignSelf: "center" }}>
        <Form.Group className="mb-3 note-textarea" controlId="notesId">
          <Form.Label>{t("Notes")}</Form.Label>
          <Form.Control
            defaultValue={notes}
            required
            ref={notesInputRef}
            as="textarea"
            rows={8}
            placeholder={t("Your notes goes here...")}
          />
        </Form.Group>
      </Stack>
      <Stack
        direction="horizontal"
        gap={3}
        className="mt-3 mb-3 justify-content-center"
      >
        <Button variant="primary" size="lg" type="submit">
          Submit
        </Button>{" "}
        <Button variant="secondary" size="lg" onClick={handleCancel}>
          Cancel
        </Button>{" "}
      </Stack>
    </Form>
  );
};

export default NoteForm;
