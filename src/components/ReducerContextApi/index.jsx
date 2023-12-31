import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import * as Styled from './styled';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
export const globalState = {
  title: 'The Main Title',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Change title');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <Styled.Container>
      <Styled.Title onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </Styled.Title>
      <Styled.Input type="text" ref={inputRef} />
    </Styled.Container>
  );
};

// App.jsx
export const ReducerContext = () => {
  return (
    <AppContext>
      <Styled.Container>
        <H1 />
      </Styled.Container>
    </AppContext>
  );
};
