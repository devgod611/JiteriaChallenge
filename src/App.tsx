import React, { ReactElement, useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USERS_REQUEST } from "./redux/constants";
import getUserState from "./redux/selectors";
import UserList from "./components/UserList";
import "./App.css";

function App(): ReactElement {
  const dispatch = useDispatch();
  const { users } = useSelector(getUserState);

  useEffect(() => {
    dispatch({ type: GET_ALL_USERS_REQUEST });
  }, [dispatch]);

  return (
    <Layout className="App">
      <UserList users={users} />
    </Layout>
  );
}

export default App;
