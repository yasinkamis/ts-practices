import styled, { css } from 'styled-components';

export const color = {
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

export const space = {
    small: '8px',
    medium: '10px',
    large: '20px',
};

export const shadow = {
    small: '8px',
    medium: '10px',
    large: '20px',
};

export const flexCenter = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const borderRadius = {
    all: '10px',
    top: '10px 10px 0 0',
    bottom: '0 0 10px 10px',
  };