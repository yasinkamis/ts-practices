import React, { FC } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";

interface InputProps {
  placeholder: string;
  allowClear?: boolean;
  type?: "text" | "password";
}

const InputComponent: FC<InputProps> = ({
  placeholder,
  allowClear = true,
  type,
  ...props
}) => {

  return type === "password" ? (
    <Input.Password
      placeholder={placeholder}
      required
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      {...props}
    />
  ) : (
    <Input placeholder={placeholder} allowClear={allowClear} {...props} />
  );
};

export default InputComponent;
