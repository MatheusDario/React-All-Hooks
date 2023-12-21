import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT: {
      return { ...state, counter: state.counter + 1 };
    }

    case types.COUNTER_DECREMENT: {
      return { ...state, counter: state.counter - 1 };
    }
  }

  return { ...state };
};
