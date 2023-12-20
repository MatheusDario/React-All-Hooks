import { useReducer } from 'react';
import * as Styled from './styled';

const globalState = {
  title: 'Main Title, Counter:',
  body: 'Click here',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      console.log('call change');
      return { ...state, title: 'Title is another now:' };

    case 'back': {
      console.log('call back');
      return { ...globalState };
    }
  }

  return { ...state };
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, counter, body } = state;
  return (
    <Styled.Container>
      <Styled.Title>
        {title} {counter}
      </Styled.Title>
      <Styled.Btn onClick={() => dispatch({ type: 'change' })}>
        {body}
      </Styled.Btn>
      <Styled.Btn onClick={() => dispatch({ type: 'back' })}>
        Go back
      </Styled.Btn>
    </Styled.Container>
  );
};
