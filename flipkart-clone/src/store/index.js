import { applyMiddleware, createStore } from 'redux'
import rootReducre from '../reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducre, applyMiddleware(thunk))


export default store;