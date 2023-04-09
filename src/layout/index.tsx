import { FC, ReactNode } from 'react'
import styled from "styled-components";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
