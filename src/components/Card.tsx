import { FC } from 'react';
import styled from 'styled-components';
import { colors, fontSizes, shadows, flexCenter, spaces, borderRadius } from '../utils/constant';

interface ICardProps {
  image: string | undefined;
  title: string | undefined;
  name: string | undefined;
  colors: { [key: string]: string };
}

const Card: FC<ICardProps> = ({ image, title, name, colors }) => {
  const defaultImageSrc = 'https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <Wrapper style={{ backgroundColor: colors.background }}>
      <ImageWrapper>
        <Image
          src={image || defaultImageSrc}
          alt="404!"
        />
      </ImageWrapper>
      <TextWrapper>
        <h3 style={{ color: colors.name }}>{name}</h3>
        <p style={{ color: colors.title }}>{title}</p>
      </TextWrapper>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  background: ${colors.light};
  border-radius: ${borderRadius.all};
  box-shadow: ${shadows.medium};
  width: 300px;
  min-height: 400px;
`;

const ImageWrapper = styled.div`
  border-radius: ${borderRadius.top};
  box-shadow: ${shadows.medium};
  width: 300px;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  ${flexCenter()};
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  min-height: 100px;
  border-radius: ${borderRadius.bottom};
  padding: ${spaces.medium};
  ${flexCenter()}
  align-items: flex-start;
  flex-direction: column;
  gap: ${spaces.small};
  h3 {
    color: ${colors.primary};
    font-size: ${fontSizes.large};
  }
  p {
    color: ${colors.secondary};
    font-size: ${fontSizes.small};
  }
`;
