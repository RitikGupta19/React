import classes from "./Header.module.css";
import React from "react";
// ANTD imports
import { Input, Avatar, Badge } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className={classes.header}>
      {/* Header Input */}
      <Input
        size='large'
        placeholder='Search for Something...'
        prefix={<SearchOutlined style={{ color: "gray" }} />}
        bordered={false}
      />
      {/* Notification Bell */}
      <div>
        <Badge count={5}>
          <BellOutlined
            style={{
              fontSize: "28px",
              color: "gray",
              cursor: "pointer",
            }}
          />
        </Badge>
      </div>
      {/* User Info */}
      <div className={classes.header__userInfo}>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <p>
          John Doe <CaretDownOutlined />
        </p>
      </div>
    </div>
  );
};

export default Header;
