import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';



const GET_PROD = "GET_PROD";

const getProd = createAction(GET_PROD, (prod_list) => ({prod_list}));

const initialState = {
    list : [],
};


export const loadProdDB = (id) => {

    return function (dispatch, getState, {history}){

        fetch(`http://15.165.205.40/api/products/${id}`)
            .then((res) => res.json())
            .then((res) => { 
                const prod_list = res.results;
                console.log(prod_list)
            dispatch(getProd(prod_list));
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