import React, { ReactElement } from "react";
import { Card, Typography } from "antd";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

const { Meta } = Card;

function CardMeta({ item }: any): ReactElement {
  return (
    <>
      <Meta title={item.name} className="meta" />
      <Typography.Text className="card_text">
        <MailOutlined /> &nbsp; {item.email}
      </Typography.Text>
      <Typography.Text className="card_text">
        <PhoneOutlined /> &nbsp; {item.phone}
      </Typography.Text>
      <Typography.Text className="card_text">
        <GlobalOutlined /> &nbsp; {item.website}
      </Typography.Text>
    </>
  );
}

export default CardMeta;
