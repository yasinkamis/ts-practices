import { useState, FC } from 'react';
import styled from 'styled-components';
import { flexCenter, spaces } from '../utils/constant';

type ColorOption = {
    value: string;
};

const colors: ColorOption[] = [
    { value: '#FFA07A' }, // Light Salmon
    { value: '#7FFFD4' }, // Aquamarine
    { value: '#F08080' }, // Light Coral
    { value: '#9ACD32' }, // Yellow-Green
    { value: '#BA55D3' }, // Medium Orchid
    { value: '#7B68EE' }, // Medium Slate Blue
    { value: '#00FA9A' }, // Medium Spring Green
    { value: '#D2B48C' }, // Tan
    { value: '#CD853F' }, // Peru
    { value: '#4682B4' }, // Steel Blue
    { value: '#DC143C' }, // Crimson
    { value: '#FF0000' }, // Red
    { value: '#000000' }, // Black
    { value: '#FFFFFF' }, // White
    { value: '#00FF00' }, // Green
    { value: '#0000FF' }, // Blue
    { value: '#FF0FFF' }, // Magenta
    { value: '#FFF200' }, // Yellow
];

interface IProps {
    type: "name" | "title" | "background",
    setColors: (prevColors: any) => void
}


const ColorPicker: FC<IProps> = ({ type, setColors }) => {
    const [selectedColor, setSelectedColor] = useState<string | null>('#000000');

    const handleColorChange = (color: string) => {
        if (type === "name") {
            setColors((prevColors: {[key: string]: string}) => ({ ...prevColors, name: color }));
        } else if (type === "title") {
            setColors((prevColors: {[key: string]: string}) => ({ ...prevColors, title: color }));
        } else {
            setColors((prevColors: {[key: string]: string}) => ({ ...prevColors, background: color }));
        }
        if (selectedColor === color) {
            setSelectedColor(null);
        } else {
            setSelectedColor(color);
        }
    };

    return (
        <Container>
            <ColorGrid>
                {colors.map((color) => (
                    <ColorOption
                        key={color.value}
                        style={{ backgroundColor: color.value }}
                        isSelected={selectedColor === color.value}
                        onClick={() => handleColorChange(color.value)}
                    />
                ))}
            </ColorGrid>
        </Container>
    );
};

export default ColorPicker;

const Container = styled.div`
  width: 300px;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${spaces.small};
`;

type ColorOptionProps = {
    isSelected: boolean;
};

const ColorOption = styled.div<ColorOptionProps>`
  width: 100%;
  height: 10px;
${flexCenter()};
  font-weight: bold;
  border: ${(props) => (props.isSelected ? '0.5px solid #FFF' : '0.5px solid #999')};
  cursor: pointer;
`;
