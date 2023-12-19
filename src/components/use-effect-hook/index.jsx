import P from 'prop-types';
import * as Styled from './styled';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

export const Hookuseefect = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [double, setDouble] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDoubleIncremente = () => {
    setDouble((double) => double + 1);
  };
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  useEffect(() => {
    console.log('ComponenteDidMount');
  }, []);

  useEffect(() => {
    document.querySelector('div')?.addEventListener('click', eventFn);

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('div')?.removeEventListener('click', eventFn);
    };
  }, []);

  useEffect(() => {
    console.log('Component with dependicie', counter);
  }, [counter]);

  return (
    <Styled.Container>
      <Styled.Title>Test 1</Styled.Title>
      <Styled.Title>
        {children}: {counter}
      </Styled.Title>

      <h1>Double: {double}</h1>

      <Styled.Button onClick={handleIncrement}>Incremente One</Styled.Button>
      <Styled.Button
        onClick={() => {
          handleDoubleIncremente();
          handleDoubleIncremente();
        }}
      >
        Double incremente
      </Styled.Button>
    </Styled.Container>
  );
};

Hookuseefect.propTypes = {
  children: P.node.isRequired,
};
