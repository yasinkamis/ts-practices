import React, { FC, useState } from 'react';
import { Form, Button } from 'antd';
import { toast } from 'react-toastify';
import formFields, { FormField } from '../utils/FormFields';
import { useObjectEqual } from '../hooks';
import { useNavigate } from 'react-router-dom';

const LoginForm: FC = ({ ...props }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isEqual } = useObjectEqual();
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({
    name: 'Yasin',
    surname: 'Kamış',
    password: '123',
  });

  const handleFormChange = (name: string, value: any) => {
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  };

  const onFinish = () => {
    const successValues = { name: 'Yasin', surname: 'Kamış', password: '123' };

    if (isEqual(formValues, successValues)) {
      toast.success('Success!');
      navigate('/home');
    } else {
      toast.error('User Information Incorrect!');
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={formValues}
      {...props}
    >
      {formFields.map((field: FormField) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
        >
          {React.cloneElement(field.component, {
            placeholder: field.label,
            name: field.name,
            onChange: (e: any) => handleFormChange(field.name, e.target.value),
          })}
        </Form.Item>
      ))}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
