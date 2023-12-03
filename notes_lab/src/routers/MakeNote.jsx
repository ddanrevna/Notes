import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
import Input from "../utils/Input";
import TextArea from "../utils/TextArea";
import Button from "../utils/Button";

function NewNote() {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const id = parseInt(localStorage.getItem("userId"));
  const [titleError, setTitleError] = useState("");
  const navigate = useNavigate();

  const handleCreateNote = () => {
    if (!title.trim()) {
      setTitleError("Note title cannot be empty");
      return;
    }
    API.createNote(id, title, noteText).then(() => {
      title ? navigate("/notes") : navigate("");
    });
  };

  return (
    <div>
      <div className="flex justify-between gap-5 items-center mt-10 mb-10">
        <Button $to="/notes" $text="Back" />
        <p className="text-4xl md:text-2xl font-bold mt-5 mb-5">
          Create new note
        </p>
      </div>
      <Input
        $type="text"
        $placeholder="Note name"
        $onDataChange={(value) => {
          setTitle(value);
          setTitleError("");
        }}
        $required={true}
      />
      {titleError && (
        <div className="text-red-500 text-center">{titleError}</div>
      )}
      <TextArea $onDataChange={setNoteText} $placeholder="Note text... " />
      <Button $text="Create" $handleOnClick={handleCreateNote} />
    </div>
  );
}

export default NewNote;
