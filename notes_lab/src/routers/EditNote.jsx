import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/API";
import Input from "../utils/Input";
import TextArea from "../utils/TextArea";
import Button from "../utils/Button";

export default function EditNote() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleError, setTitleError] = useState("");
  const navigate = useNavigate();

  const handleEdit = () => {
    if (!title.trim()) {
      setTitleError("Note title cannot be empty");
      return;
    }
    API.editNote(id, title, text).then(() => {
      title ? navigate("/notes") : navigate("");
    });
  };

  return (
    <div>
      <div className=" flex justify-between gap-5 items-center mt-10 mb-10">
        <Button $to="/notes" $text="Back" />
        <p className="text-4xl font-bold mt-5 mb-5 md:text-2xl">Edit note</p>
      </div>
      <Input $type={"text"} $placeholder={"title"} $onDataChange={setTitle} />
      {titleError && (
        <div className="text-red-500 text-center">{titleError}</div>
      )}
      <TextArea $onDataChange={setText} $placeholder={"Enter "} />
      <Button $text="Save" $handleOnClick={handleEdit} />
    </div>
  );
}
