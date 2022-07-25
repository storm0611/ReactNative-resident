import {
  UPDATE_LOADER,
} from '../types';

const INITIAL_STATE = {
  isLoading: false,

};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
