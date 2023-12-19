import P from 'prop-types';
import * as Styled from './styled';
import React, { useCallback, useMemo, useState } from 'react';

const Button = ({ doubleIncrement }) => {
  console.log('filho redenrizou');
  return (
    <Styled.Button onClick={() => doubleIncrement(10)}>
      New Double Increment
    </Styled.Button>
  );
};

Button.propTypes = {
  doubleIncrement: P.func,
};

export const Callback = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [double, setDouble] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDoubleIncremente = useCallback((num) => {
    setDouble((double) => double + num);
  }, []);

  console.log('Pai renderizou');

  return (
    <Styled.Container>
      <Styled.Title>Test 1</Styled.Title>
      <Styled.Title>
        {children}: {counter}
      </Styled.Title>

      <Styled.Title>Double: {double}</Styled.Title>

      <Styled.Button onClick={handleIncrement}>Incremente One</Styled.Button>

      {useMemo(() => {
        return <Button doubleIncrement={handleDoubleIncremente} />;
      }, [handleDoubleIncremente])}
    </Styled.Container>
  );
};

Callback.propTypes = {
  children: P.node.isRequired,
};
