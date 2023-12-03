import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="w-3/4 mt-10 ml-auto mr-auto">
      <p className="font-bold text-8xl mb-16 text-center">404</p>
      <p className="text-3xl mb-10 text-center">Page not found</p>
      <p className="text-4xl flex justify-center gap-3">
        go
        <NavLink to="/" className=" text-blue-700 underline">
          Home
        </NavLink>
      </p>
      <div>
        <hr className="mt-10" />
        <footer className={"flex justify-between"}>
          <p>Created by: Dasha Komisaruk</p>
          <p>BSU: 2023</p>
        </footer>
      </div>
    </div>
  );
}
