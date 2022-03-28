import React, { ReactElement } from "react";
import { List, Card } from "antd";
import { EditOutlined, DeleteFilled, HeartOutlined } from "@ant-design/icons";
import CardMeta from "./CardMeta";
import { GET_AVATAR_URL } from "../redux/constants";
import { UserListType } from "../types";

function UserList({ users }: UserListType): ReactElement {
  return (
    <List
      data-id="list"
      style={{ marginTop: 20, overflowY: "auto", overflowX: "hidden" }}
      bordered
      dataSource={users}
      grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5 }}
      renderItem={(item) => {
        return (
          <List.Item data-id="list-item">
            <Card
              cover={
                <img
                  alt="example"
                  src={GET_AVATAR_URL(item.username)}
                  className="avatar"
                />
              }
              actions={[
                <HeartOutlined key="like" style={{ color: "red" }} />,
                <EditOutlined key="edit" />,
                <DeleteFilled key="delete" />,
              ]}
            >
              <CardMeta item={item} />
            </Card>
          </List.Item>
        );
      }}
    />
  );
}

export default UserList;
