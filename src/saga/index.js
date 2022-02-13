import {all} from 'redux-saga/effects'

// all saga import here
import todosSaga from './todosSaga';

function* rootSaga(){
    yield all([
        // all saga's combine here 
        todosSaga()
    ])
}

export default rootSaga;