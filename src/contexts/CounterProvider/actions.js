import * as types from './types';

export const incrementCounter = (dispatch) => {
  dispatch({ type: types.COUNTER_INCREMENT });
};

export const decrementCounter = (dispatch) => {
  dispatch({ type: types.COUNTER_DECREMENT });
};
