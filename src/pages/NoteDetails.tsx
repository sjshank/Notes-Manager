import React from "react";
import { Badge, Col, Row, Stack } from "react-bootstrap";
import { useNoteContext } from "./NoteLayout";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { ITag } from "../interface/INoteData";

type NoteDetailProps = {
  onDeleteNote: (id: string) => void;
};

const NoteDetails: React.FunctionComponent<NoteDetailProps> = ({
  onDeleteNote,
}) :React.JSX.Element => {
  const note = useNoteContext();
  return (
    <Row className="justify-content-center align-items-center p-4 ">
      <Col
        xs={1}
        sm={1}
        lg={5}
        xl={5}
        className="align-items-center rounded-2 border border-success"
      >
        <h2 className="text-capitalize fs-2 mt-2 text-center">{note.title}</h2>
        <img
          src="https://www.studiosity.com/hs-fs/hubfs/DTC/09.blog/Note-taking-tumblr_-REVISEORDIE.jpg?width=300&height=300&name=Note-taking-tumblr_-REVISEORDIE.jpg"
          alt="notes-img"
          loading="lazy"
          style={{
            width: "100%",
            height: "250px",
          }}
          className="ps-4 pe-4 pt-2 pb-4"
        />
        <Stack
          direction="horizontal"
          className="justify-content-center"
          gap={2}
        >
          {note.tags.map((tag:ITag) => {
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
        </Stack>
        <ReactMarkdown className=" mt-2 text-break fs-4 text-center notes-markdown" >
          {note.notes}
        </ReactMarkdown>
          <hr/>
        <Stack
          direction="horizontal"
          className="justify-content-center m-2"
          gap={4}
        >
          <Link
            to={`/${note.id}/edit`}
            className="fs-5"
            style={{ fontWeight: 500, color: "#0174BE", cursor: "pointer" }}
          >
            EDIT
          </Link>
          <a
            role="button"
            className="fs-5"
            style={{ fontWeight: 500, color: "#BB2525", cursor: "pointer" }}
            onClick={() => onDeleteNote(note.id)}
          >
            DELETE
          </a>
        </Stack>
      </Col>
    </Row>
  );
};

export default NoteDetails;
