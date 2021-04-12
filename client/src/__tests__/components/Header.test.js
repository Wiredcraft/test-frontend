import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {BrowserRouter} from "react-router-dom";
import Header from "../../components/Header";

let container = null;
beforeEach(() => {
  // create a DOM element as rendering target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // clear when unmount
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders header", () => {
  const items = [
    {
      type: "input",
      icon: "search",
      onChange: (e) => {
      },
    },
    {
      type: "link",
      to: "/home",
      icon: "home",
    },
    {
      type: "link",
      to: "/notification",
      icon: "notification",
    },
    {
      type: "link",
      to: "/user",
      icon: "user",
    },
  ];

  act(() => {
    render(
      <BrowserRouter>
        <Header items={items}/>
      </BrowserRouter>,
      container
    );
  });

  expect(container.innerHTML).toMatchSnapshot();
});
