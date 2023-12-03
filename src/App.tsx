import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { Suspense, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { INoteData, IRawNote, ITag } from "./interface/INoteData.js";
import { v4 as uuidV4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import Home from "./pages/Home.js";
import PageHeader from "./components/PageHeader.js";
import Footer from "./components/Footer.js";
const NewNote = React.lazy(() => import("./pages/NewNote.js"));
const EditNote = React.lazy(() => import("./pages/EditNote.js"));
const NoteLayout = React.lazy(() => import("./pages/NoteLayout.js"));
const NoteDetails = React.lazy(() => import("./pages/NoteDetails.js"));

const App: React.FunctionComponent<unknown> = (): React.JSX.Element => {
  //These are custom hooks - save notes in localstorage
  const [notes, setNotes] = useLocalStorage<IRawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<ITag[]>("TAGS", []);

  //This function is passed to child component & will be called when Submit button is clicked on New Note page
  //It will get all user entered data & set into localstorage using setNotes hook function
  const onCreateNote = ({ tags, notes, title }: INoteData) => {
    setNotes((prevNotes: IRawNote[]) => {
      return [
        ...prevNotes, //get previously stored notes data
        { title, notes, id: uuidV4(), tagIds: tags.map((tag) => tag.id) }, // organize and store data into IRawNote format
      ];
    });
  };

  //as soon as notes are updated with setNotes, it will trigger component re-render & function will be called again
  //This function will populate notes along with relative list of tags in order to display as list from IRawNote
  //This should be memoize using useMemo
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  //This will create & add new tags in localstorage
  const addTag = (newTag: ITag) => {
    setTags((prevTags) => [...prevTags, newTag]);
  };

  //It will delete note record from notes & set updated list using setNotes
  const deleteNote = (id: string) => {
    const refinedNotes = notes.filter((note) => {
      if (note.id !== id) {
        return note;
      }
    });
    setNotes(refinedNotes); //once this is set, component re-render & then again set notesWithTags
  };

  //It will update note record from notes for given id & set updated list using setNotes
  const updateNote = (id: string, { tags, ...data }: INoteData) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes); //once this is set, component re-render & then again set notesWithTags
  };

  return (
    <Container>
      <PageHeader />
      <Routes>
        <Route
          path="/"
          element={
            <Home noteWithTags={notesWithTags} onDeleteNote={deleteNote} />
          }
        ></Route>
        <Route
          path="/new"
          element={
            <Suspense fallback={<>Loading...</>}>
              <NewNote
                onSubmit={onCreateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            </Suspense>
          }
        ></Route>
        {/* Below is the example of nested routes */}
        <Route
          path="/:id"
          element={
            <Suspense fallback={<>Loading...</>}>
              {/* This is will be common component for show & edit notes pages */}
              <NoteLayout notes={notesWithTags} />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<>Loading...</>}>
                <NoteDetails onDeleteNote={deleteNote} />
              </Suspense>
            }
          ></Route>
          <Route
            path="edit"
            element={
              <Suspense fallback={<>Loading...</>}>
                <EditNote
                  onSubmit={updateNote}
                  availableTags={tags}
                  onAddTag={addTag}
                />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
