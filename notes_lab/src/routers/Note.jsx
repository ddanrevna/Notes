import React, { Suspense } from "react";
import { CiTrash, CiEdit } from "react-icons/ci";
import { NavLink, useLoaderData, Await, useParams } from "react-router-dom";
import API from "../utils/API";
import Button from "../utils/Button";

export const loader = ({ params: { id } }) => {
  const notePromise = API.getNote(id);
  return { notePromise };
};

export default function ViewNote() {
  const { id } = useParams();
  const { notePromise } = useLoaderData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await
        resolve={notePromise}
        errorElement={<div>404. No such note found.</div>}
      >
        {(note) => {
          return (
            <div>
              <div className="flex  justify-between gap-5 items-center mt-10 mb-10 md:block md:text-center">
                <Button $to="/notes" $text="Back"></Button>
                <p className="text-4xl font-bold break-all mt-5 mb-5 md:text-xl">
                  {note.title}
                </p>
                <div className=" flex gap-5 mt-3 mb-5  md:justify-center">
                  <NavLink to={`/notes/edit/${id}`}>
                    <CiEdit className=" w-7 h-7" />
                  </NavLink>
                  <NavLink
                    to={"/notes"}
                    reloadDocument="true"
                    onClick={() => {
                      API.deleteNote(note.id);
                    }}
                  >
                    <CiTrash className="w-7 h-7" />
                  </NavLink>
                </div>
              </div>
              <div className=" p-10 min-h-max max-h-max text-left bg-slate-200">
                <p className=" h-auto break-words">{note.text}</p>
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
