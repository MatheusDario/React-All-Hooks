/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css``}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 10px;
    display: block;
    margin: 5px auto;
    cursor: pointer;
  `}
`;
