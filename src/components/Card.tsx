import { FC } from "react";
import styled from "styled-components";

interface ICardProps {
  image: string | undefined;
  title: string | undefined;
  name: string | undefined;
}

const Card: FC<ICardProps> = ({ image, title, name }) => {
  const defaultImageSrc = "https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return <Wrapper>
    <ImageWrapper>
      <Image src={image || defaultImageSrc} alt="404!" />
    </ImageWrapper>
    <TextWrapper>
      <h3>{name}</h3>
      <p>{title}</p>
    </TextWrapper>
  </Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  min-height: 400px;
  
`;

const ImageWrapper = styled.div`
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  min-height: 100px;
  border-radius: 0 0 10px 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  p {
    color: #fff;
    font-size: 14px;
  }
`;