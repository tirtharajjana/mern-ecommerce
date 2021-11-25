import { applyMiddleware, createStore } from 'redux'
import rootReducre from '../reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducre, composeWithDevTools(applyMiddleware(thunk)))


export default store;