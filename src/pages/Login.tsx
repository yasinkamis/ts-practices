import {FC} from 'react'
import { LoginForm } from "../modules";
import styled from "styled-components";

const Login: FC = () => {
  return (
    <Content>
    <Title>Lütfen Giriş Yapınız</Title>
    <StyledLoginForm />
  </Content>
  )
}

export default Login


const Title = styled.h1`
  color: #fff;
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

const StyledLoginForm = styled(LoginForm)`
  width: 100%;
  background: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
`;
