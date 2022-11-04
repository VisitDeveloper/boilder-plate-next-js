import {REDUX_TYPE} from './../../types/redux-type'


export const addUserTest = () => ({
    type: REDUX_TYPE.USER,
    payload:  true 
});

export const removeUserTest = () => ({
    type: REDUX_TYPE.EMPTY_USER,
    payload:  false 
});
