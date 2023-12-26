import { Link } from 'react-router-dom';
import * as Styled from './styled';

export const Menu = () => {
  return (
    <Styled.Container>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/redirect">Redirect</Link>
    </Styled.Container>
  );
};
