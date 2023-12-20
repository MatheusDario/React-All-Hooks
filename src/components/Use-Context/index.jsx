/* eslint-disable react/prop-types */
import * as Styled from './styled';
import { createContext, useContext, useState } from 'react';

const globalState = {
  title: 'Main Title, Counter:',
  body: 'Clique here',
  counter: 0,
};

const GlobalContext = createContext();

export const Container = () => {
  return (
    <Styled.Container>
      <Title />
      <Body />
    </Styled.Container>
  );
};

export const Title = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <Styled.Title>
      {title} {counter}
    </Styled.Title>
  );
};

export const Body = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return (
    <Styled.Paragraph
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </Styled.Paragraph>
  );
};

export const UseContext = () => {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Container />
    </GlobalContext.Provider>
  );
};
