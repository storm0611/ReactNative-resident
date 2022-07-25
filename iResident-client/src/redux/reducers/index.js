import {combineReducers} from 'redux';
import CommonReducer from './CommonReducer';
import AuthReducer from './AuthReducer'
import MessageReducer from './MsgReducer'

export default combineReducers({
  common: CommonReducer,
  auth: AuthReducer,
  msg: MessageReducer
});
