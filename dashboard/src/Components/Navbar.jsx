import React from "react";
import { NavLink } from "react-router-dom";
import styles  from "./Navbar.module.css";
let links = [
  {
    to: "/",
    title: "HOME",
  },
  {
    to: "/dashboard",
    title: "DASHBOARD",
  },
  {
    to: "/dashboard/settings",
    title: "SETTINGS",
  },
  {
    to: "/login",
    title: "LOGIN",
  },
];

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ?styles.isactive :styles.basestyle
          }
          to={link.to}
          key={link.title}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
