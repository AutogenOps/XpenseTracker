'use strict';

import { createStore } from 'redux';
import rootReducer from './reducers';

// Initialize Redux store
const store = createStore(rootReducer);

export default store;
