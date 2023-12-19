/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: 2rem;
    color: darkblue;
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 1.3rem;
    color: darkgray;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css``}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
  `}
`;
