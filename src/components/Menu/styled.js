/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
   a {
    text-decoration: none;
    display: inline-block;
    margin-left: 30px;
   }
  `}
`;
