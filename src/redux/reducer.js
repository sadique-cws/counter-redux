import * as actionTypes from './actions-type';

const initialState = {
    count : 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PLUS:
            return {...state, count: state.count +1}
        break;
        case actionTypes.MINUS:
            return {...state, count: state.count-1}
        break;
        default:
             return state;
    }
}