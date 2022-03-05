import { combineReducers } from 'redux';
import sessionErrorsReducer from './session.errors_reducer';
import channelReducer from './channel_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    channels: channelReducer
});

export default errorsReducer;