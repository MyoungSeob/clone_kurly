import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';
import { useHistory } from "react-router";
import {setLocal, getLocal, deleteLocal} from 'shared/Cookie'


const GET_PROD = "GET_PROD";
const DELETE_PROD = "DELETE_PROD";

const getProd = createAction(GET_PROD, (prod_list) => ({prod_list}));
const deleteProd = createAction(DELETE_PROD, (id) => ({id}));

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

export const deleteProdDB = (id) => {

    return function (dispatch, getState, {history}){
        let token = localStorage.getItem('X-AUTH-TOKEN') || '';

        fetch(`http://15.165.205.40/api/carts/products/${id}`, {
            method: "DELETE",
            headers : {
                'X-AUTH-TOKEN': token,
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            // body: JSON.stringify(id)
        })
        .then((res) => res.json())
        .then((res) => {

            dispatch(deleteProd(id));
        })
        .catch((err) => {
            console.log(err);
        });
    }
}


export default handleActions(
    {
        [GET_PROD] : (state, action) => produce(state, (draft) => {
            draft.list = action.payload.prod_list;
        }),

        [DELETE_PROD]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.id);

        if (idx !== -1) {
          // 배열에서 idx 위치의 요소 1개를 지웁니다.
          draft.list.splice(idx, 1);
        }
      }),

    }, initialState
);

const actionCreators = {
    getProd,
    deleteProd,
    loadProdDB,
    deleteProdDB,
}

export {actionCreators};