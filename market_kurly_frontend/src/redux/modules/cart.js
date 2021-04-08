import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';



const GET_PRODS = "GET_PRODS";

const getProds = createAction(GET_PRODS, (prod_list) => ({prod_list}));

const initialState = {
    list : [],
};


export const loadProdDB = (id) => {

    return function (dispatch, getState, {history}){

        fetch(`http://15.165.205.40/api/carts`)
            .then((res) => res.json())
            .then((res) => { 
                const prod_list = res.results;
                console.log(prod_list)
            dispatch(getProds(prod_list));
            });
    }
}


export default handleActions(
    {
        [GET_PRODS] : (state, action) => produce(state, (draft) => {
            draft.list = action.payload.prod_list;
        }),
    }, initialState
);

const actionCreators = {
    getProds,
    loadProdDB,
}

export {actionCreators};