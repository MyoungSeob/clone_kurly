import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';

const GET_PROD = "GET_PROD";

const getProd = createAction(GET_PROD, (prod_list) => ({prod_list}));

const initialState = {
    list : [],
};

export const loadProdDB = () => {
    return function (dispatch, getState, {history}){
        fetch("http://15.165.205.40/api/recommendations")
            .then((res) => res.json())
            .then((res) => {
                const results = res.results;
                console.log(results)
               
            dispatch(getProd(results));
            
            });
            
    }
}

export default handleActions(
    {
        [GET_PROD] : (state, action) => produce(state, (draft) => {
            draft.list = action.payload.prod_list;
        }),
    }, initialState
);

const actionCreators = {
    getProd,
    loadProdDB,
}

export {actionCreators};