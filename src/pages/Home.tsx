import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Card, ColorPicker, Input, DownloadButton } from '../components';
import { flexCenter, spaces } from '../utils/constant';

interface CardValues {
  name?: string;
  title?: string;
  image?: string;
  [key: string]: string | undefined;
}

const Home: FC = () => {
  const [cardValues, setCardValues] = useState<CardValues>({});
  const [colors, setColors] = useState<{ [key: string]: string }>({
    background: '#FFF',
    title: '#000',
    name: '#000',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  return (
    <Content>
      <CardWrapper>
        <StyledCard
          image={cardValues.image}
          title={cardValues.title}
          name={cardValues.name}
          colors={colors}
        />
        <DownloadButton />
      </CardWrapper>
      <Inputs>
        <ColorPicker
          type="background"
          setColors={setColors}
        />
        <StyledInput
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
        />
        <ColorPicker
          type="name"
          setColors={setColors}
        />
        <StyledInput
          name="title"
          placeholder="Title"
          onChange={handleInputChange}
        />
        <ColorPicker
          type="title"
          setColors={setColors}
        />
        <StyledInput
          name="image"
          placeholder="Image Link"
          onChange={handleInputChange}
        />
      </Inputs>
    </Content>
  );
};

export default Home;

const Content = styled.div`
  width: 620px;
  ${flexCenter()};
  gap: ${spaces.medium};
`;

const StyledCard = styled(Card)`
  width: auto;
`;

const Inputs = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: ${spaces.small};
`;

const CardWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: ${spaces.small};
`;

const StyledInput = styled(Input)`
  width: 100%;
  font-size: ${spaces.medium};
`;
