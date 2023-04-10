import { FC, ReactNode } from 'react';
import styled from "styled-components";
import { colors, flexCenter, spaces, borderRadius } from "../utils/constant";

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
  background: ${colors.black};
  ${flexCenter()};
  padding: ${spaces.medium};
`;
