import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';
import { useHistory } from "react-router";
import {setLocal, getLocal, deleteLocal} from 'shared/Cookie'


const GET_PROD = "GET_PROD";

const getProd = createAction(GET_PROD, (prod_list) => ({prod_list}));

const initialState = {
    list : [],
};


export const loadProdDB = () => {

    return function (dispatch, getState, {history}){

        let token = localStorage.getItem('X-AUTH-TOKEN') || '';

        fetch('http://15.165.205.40/api/carts', {
            headers: {
                'X-AUTH-TOKEN': token,
                
            }
        })
            .then((res) => res.json())
            .then((res) => {
                const prod_list = res.results;
                // console.log(prod_list)
                dispatch(getProd(prod_list));
            });

        // fetch(`http://15.165.205.40/api/carts`)
        //     .then((res) => res.json())
        //     .then((res) => { 
        //         const prod_list = res.results;
        //         console.log(prod_list);
        //         const id = prod_list;
        //     dispatch(getProd(prod_list));
        //     });
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