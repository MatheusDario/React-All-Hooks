/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: lightblue;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: ${theme.colors.blue};
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    display: block;
    padding: 20px;
    margin: auto;
    color: white;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    background-color: ${theme.colors.blue};
    margin-bottom: 50px;

    &:hover {
      background-color: white;
      color: ${theme.colors.blue};
    }
  `}
`;
