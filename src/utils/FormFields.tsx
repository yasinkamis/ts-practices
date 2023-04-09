import { Input } from "../components";

export interface FormField {
  name: string;
  label: string;
  rules: Rule[];
  component: JSX.Element;
}

interface Rule {
  required: boolean;
  message: string;
}

const formFields: FormField[] = [
  {
    name: "name",
    label: "Name",
    rules: [{ required: true, message: "Please input your name!" }],
    component: <Input placeholder="İsim" />,
  },
  {
    name: "surname",
    label: "Surname",
    rules: [{ required: true, message: "Please input your surname!" }],
    component: <Input placeholder="Soyisim" />,
  },
  {
    name: "password",
    label: "Password",
    rules: [{ required: true, message: "Please input your password!" }],
    component: <Input placeholder="Şifre" type="password" />,
  },
];

export default formFields;
