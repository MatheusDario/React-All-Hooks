import P from 'prop-types';
import * as Styled from './styled';
import { useState } from 'react';

export const Counter = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <Styled.Container>
      <Styled.Title>
        {children}: {counter}
      </Styled.Title>

      <Styled.Button onClick={handleIncrement}>Incremente One</Styled.Button>
      <Styled.Button
        onClick={() => {
          handleIncrement();
          handleIncrement();
        }}
      >
        Double incremente
      </Styled.Button>
    </Styled.Container>
  );
};

Counter.propTypes = {
  children: P.node.isRequired,
};
