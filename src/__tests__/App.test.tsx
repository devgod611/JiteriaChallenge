import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "../App";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ activities: [] }),
  useDispatch: () => mockDispatch,
}));

jest.spyOn(React, "useEffect").mockImplementation((f) => f());

test("renders the component", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
