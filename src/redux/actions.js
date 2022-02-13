import *  as actionTypes from './actionTypes';

export const fetchDataStart = (data) => {
    return {
        type: actionTypes.FETCH_DATA_START,
        payload: data
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAILED,
        payload: error
    }
}