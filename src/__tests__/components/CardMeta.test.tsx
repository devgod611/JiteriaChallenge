import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CardMeta from "../../components/CardMeta";
import { UserType } from "../../types";

describe("CardMeta", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    const item: UserType = {
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org"
    };
    beforeEach(() => {
      wrapper = shallow(<CardMeta item={item} />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
