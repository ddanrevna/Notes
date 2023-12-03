import React, { useContext } from "react";
import { UserContext } from "../components/UserContextProvider";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const NAVLINK =
    "font-semibold text-3xl md:text-2xl decoration-none no-underline";
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  if (localStorage.getItem("userId")) {
    return (
      <div className="w-3/4 mt-10 ml-auto mr-auto">
        <div className="flex justify-between items-center md:flex-col-reverse md:gap-5 md:mb-5">
          <p> Hello, {user.email}</p>
          <nav className="flex gap-5">
            <NavLink
              to="/"
              end="true"
              className={({ isActive }) =>
                isActive ? `${NAVLINK} text-zinc-400` : `${NAVLINK}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive ? `${NAVLINK}	text-zinc-400` : `${NAVLINK}`
              }
            >
              Notes
            </NavLink>
            <NavLink
              to="/login"
              onClick={handleLogout}
              className={`${NAVLINK}`}
            >
              Log Out
            </NavLink>
          </nav>
        </div>
        <Outlet />
        <hr className="mt-10" />
        <footer className="flex justify-between">
          <p className=" ml-3 text-zinc-400">Created by: Dasha Komisaruk</p>
          <p className=" mr-3 text-zinc-400">BSU: 2023</p>
        </footer>
      </div>
    );
  } else {
    return (
      <div>
        <Outlet />
        <hr className="mt-10" />
        <footer className="flex justify-between">
          <p className=" ml-3 text-zinc-400">Created by: Dasha Komisaruk</p>
          <p className=" mr-3 text-zinc-400">BSU: 2023</p>
        </footer>
      </div>
    );
  }
}
