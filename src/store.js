import { createStore } from 'redux';

import reducer from './reducers';

//const middleware = applyMiddleware(thunk);

export default createStore(reducer);
