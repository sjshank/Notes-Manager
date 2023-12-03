import React from "react";
import { INotedWithTags } from "../interface/INoteData";
import { Card, Badge, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

type NoteCardProps = {
  noteCard: INotedWithTags;
  onDeleteNote: (id: string) => void;
};

const NoteCard: React.FunctionComponent<NoteCardProps> = ({
  noteCard,
  onDeleteNote,
}) : React.JSX.Element=> {
  const handleDelete = () => {
    onDeleteNote(noteCard.id);
  };

  // const handleEdit = () => {};

  return (
    <Card
      className="border-dark"
      style={{ maxWidth: "18rem" }}
      key={noteCard.id}
    >
      <Card.Body className="card-header">
        <Card.Title className="text-capitalize text-center mb-2">
          <Link to={`/${noteCard.id}`} color="#0174BE">{noteCard.title}</Link>
        </Card.Title>
        <Card.Subtitle>
          <div className="row mt-2 mb-2">
            <div className="col-10 text-truncate font-monospace text-capitalize">
              {noteCard.notes}
            </div>
          </div>
        </Card.Subtitle>
        <Card.Text>
          {noteCard.tags.map((tag) => {
            return (
              <Badge
                key={tag.id}
                pill
                bg="success"
                style={{
                  padding: "8px 16px",
                  textTransform: "capitalize",
                  fontSize: 14,
                }}
              >
                {tag.label}
              </Badge>
            );
          })}
        </Card.Text>
        <Stack
          direction="horizontal"
          role="button"
          className="justify-content-end mt-2"
        >
          <Card.Link
            as="a"
            role="button"
            style={{ fontWeight: 500, color: "#BB2525", cursor: "pointer" }}
            onClick={handleDelete}
          >
            Delete
          </Card.Link>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
