import React from "react";
import { INotedWithTags } from "../interface/INoteData";
import { Row, Col } from "react-bootstrap";
import NoteCard from "../components/NoteCard";

type NoteWithTagsProps = {
  noteWithTags: INotedWithTags[];
  onDeleteNote: (id: string) => void;
};

const Home: React.FunctionComponent<NoteWithTagsProps> = ({
  noteWithTags,
  onDeleteNote,
}) : React.JSX.Element => {
  return (
    <div>
      <Row xs={1} sm={2} lg={3} xl={3} className="g-3 justify-content-space">
        {noteWithTags.map((note: INotedWithTags) => {
          return (
            <Col key={note.id}>
              <NoteCard noteCard={note} onDeleteNote={onDeleteNote} />
            </Col>
          );
        })}
      </Row>
      {noteWithTags.length == 0 && (
        <Row className="g-3 justify-content-space">
          <Col className="text-center">
            <p className="fs-3">No record found</p>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Home;
