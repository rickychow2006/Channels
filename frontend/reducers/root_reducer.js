import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import sessionReducer from './session.reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer
})

export default rootReducer;