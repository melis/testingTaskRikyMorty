import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';
import rootReduser from './rootReduser';

const store = createStore(rootReduser, applyMiddleware(reduxThunk));

export default store;
