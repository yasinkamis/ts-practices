import React, { FC } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";

interface InputProps {
  placeholder: string;
  allowClear?: boolean;
  type?: "text" | "password";
  name?: string;
  onChange?: (e: any) => void;
}

const InputComponent: FC<InputProps> = ({
  placeholder,
  allowClear = true,
  type,
  name,
  onChange,
  ...props
}) => {

  return type === "password" ? (
    <Input.Password
      placeholder={placeholder}
      required
      name={name}
      onChange={onChange}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      {...props}
    />
  ) : (
    <Input placeholder={placeholder} onChange={onChange} name={name} allowClear={allowClear} {...props} />
  );
};

export default InputComponent;
