import React from "react";
import homeSvg from "assets/icons/home.svg";
import notificationSvg from "assets/icons/notification.svg";
import userSvg from "assets/icons/user.svg";
import { NavLink } from "react-router-dom";

const links = [
  {
    svg: homeSvg,
    alt: "home",
    path: "/",
  },
  {
    svg: notificationSvg,
    alt: "notification",
    path: "/notication",
  },
  {
    svg: userSvg,
    alt: "user",
    path: "/user",
  },
];

export default function Nav() {
  return (
    <div className="nav">
      {links.map((link) => (
        <NavLink key={link.alt} className="nav-link" to={link.path}>
          <img src={link.svg} alt={link.alt} className="icon"></img>
        </NavLink>
      ))}
    </div>
  );
}
