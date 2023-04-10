import { css } from 'styled-components';

export const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  light: '#f8f9fa',
  dark: '#343a40',
  black: "#000",
  white: "#fff",
};

export const fontSizes = {
  small: '12px',
  medium: '16px',
  large: '20px',
};

export const spaces = {
    small: '8px',
    medium: '10px',
    large: '20px',
};

export const shadows = {
    small: '0 2px 4px rgba(0,0,0,0.2)',
    medium: '0 4px 6px rgba(0,0,0,0.2)',
    large: '0 8px 16px rgba(0,0,0,0.2)',
};

export const flexCenter = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const borderRadius = {
    all: '10px',
    top: '10px 10px 0 0',
    bottom: '0 0 10px 10px',
};