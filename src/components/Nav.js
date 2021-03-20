import React from "react";
import homeSvg from "assests/icons/home.svg";
import notificationSvg from "assests/icons/notification.svg";
import userSvg from "assests/icons/user.svg";

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
        <div key={link.alt} className="nav-link">
          <img src={link.svg} alt={link.alt} className="icon"></img>
        </div>
      ))}
    </div>
  );
}
