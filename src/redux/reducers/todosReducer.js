import * as actionTypes from '../actionTypes'

const initialState = {
    isDataFetching: false,
    todos: {},
    isError: false,
    error: {}
}

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                isDataFetching: true,
                isError: false
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isDataFetching: false,
                isError: false,
                todos: {...action.payload}
            }
        case actionTypes.FETCH_DATA_FAILED:
            return {
                ...state,
                isDataFetching: false,
                isError: true,
                error: {...action.payload}
            }
        default:
            return state
    }
}

export default todosReducer;