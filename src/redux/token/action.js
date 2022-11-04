import {REDUX_TYPE} from './../../types/redux-type'


export const addTokenActions = item => ({
    type: REDUX_TYPE.TOKEN,
    payload:  item 
});

export const removeTokenActions = item => ({
    type: REDUX_TYPE.EMPTY_TOKEN,
    payload:  item 
});