import { FC } from 'react'
import { LoginForm } from "../modules";
import styled from "styled-components";
import { colors, spaces, borderRadius, flexCenter } from "../utils/constant";

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
  color: ${colors.white};
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  ${flexCenter()};
  align-items: flex-start;
  flex-direction: column;
  gap: ${spaces.medium};
`;

const StyledLoginForm = styled(LoginForm)`
  width: 100%;
  background: ${colors.light};
  padding: ${spaces.medium};
  border-radius: ${borderRadius.all};
`;
