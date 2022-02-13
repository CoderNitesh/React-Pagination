// utility to create store
import { createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "@redux-saga/core";

// root reducer
import rootReducer from './reducers/index'

// root saga
import rootSaga from '../saga'

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// redux extension
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// enhancer
const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const composeEnhancer = compose(middlewareEnhancer, reduxExtension) 

// create store
const store = createStore(rootReducer, composeEnhancer);
export default store;

// run saga to access root saga
sagaMiddleware.run(rootSaga)
