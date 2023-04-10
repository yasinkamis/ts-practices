import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Card, Input } from "../components";

interface CardValues {
    name?: string;
    title?: string;
    image?: string;
    [key: string]: string | undefined;
  }

const Home: FC = () => {
    const [cardValues, setCardValues] = useState<CardValues>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCardValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

  return (
    <Content>
      <Card image={cardValues.image} title={cardValues.title} name={cardValues.name}/>
      <Input name="name" placeholder="Name" onChange={handleInputChange}/>
      <Input name="title" placeholder="Title" onChange={handleInputChange}/>
      <Input name="image" placeholder="Image Link" onChange={handleInputChange}/>
    </Content>
  );
};

export default Home;

const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
