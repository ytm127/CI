import React from "react";
import renderer from "react-test-renderer";
import Home from "../components/Home";

test("basic snapshot", () => {
  const component = renderer.create(<Home />);
  expect(component.toJSON()).toMatchSnapshot();
});