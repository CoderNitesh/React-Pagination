// effects 
import {takeEvery, put, call, all} from 'redux-saga/effects';

// actionsTypes
import * as actionsTypes from '../redux/actionTypes'

// actions
import { fetchDataSuccess, fetchDataFailed } from '../redux/actions'

// services (functions which do api calls)
import {fetchDataService} from '../api/services'


// worker saga
function* loadData(action){
    try{
        const res = yield call(fetchDataService, action.payload);
        yield put(fetchDataSuccess({totalPageCount: Math.ceil(+res.headers['x-total-count'] / 10), data:res.data}))
    }catch(error){
        yield put(fetchDataFailed(error.toJSON()))
    }
}

// watcher saga
function* watchLoadData() {
    yield takeEvery(actionsTypes.FETCH_DATA_START, loadData)
}


// combine all watcher saga here
function* todosSaga(){
    yield all([
        watchLoadData()
    ])
}

export default todosSaga;