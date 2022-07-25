import {
  SHOW_LOADER,
} from '../types';



export const updateLoader = (value) => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_LOADER,
      payload: value,
    });
  };
};



