import { FC } from "react";
import styled from "styled-components";

interface ICardProps {
  image: string | undefined;
  title: string | undefined;
  name: string | undefined;
}

const Card: FC<ICardProps> = ({ image, title, name }) => {
  return <Wrapper>
    <p>{image}</p>
    <p>{name}</p>
    <p>{title}</p>
  </Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
`;
