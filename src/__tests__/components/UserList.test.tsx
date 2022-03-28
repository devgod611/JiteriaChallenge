import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import UserList from "../../components/UserList";
import { UserType } from "../../types";

describe("UserList", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    const users: UserType[] = [
      {
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org"
      }
    ];
    beforeEach(() => {
      wrapper = shallow(<UserList users={users} />);
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have List", () => {
      expect(wrapper.find('[data-id="list"]').length).toEqual(1);
    });
  });
});
