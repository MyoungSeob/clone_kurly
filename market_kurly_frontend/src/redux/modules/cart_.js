import {createAction, handleActions } from 'redux-actions';
import {produce} from 'immer'


const POST_PRODS = "POST_PRODS";

const postProds = createAction(POST_PRODS, ((prods) => ({prods})));

const initailState = {
    list : [],
};

export const postProdsDB = (_id, number) => {
    return function (dispatch, getState, {history}){
        fetch("http://15.165.205.40/api/carts/products",{
            method : "POST",
            body : JSON.stringify({
                id : _id,
                nums : number,
            }),
            headers : {
                "X-AUTH-TOKEN" : localStorage.getItem("X-AUTH-TOKEN"),
                'Content-Type' : 'application/json',
            }
        })  
            .then(
                window.alert("제품을 장바구니에 담았습니다!")
            )}
    }



export default handleActions(
    {
        [POST_PRODS] : (state, action) => produce(state, (draft) => {
            draft.list = action.payload.prod_list
        }),
}, initailState
);

const actionCreators = {
    postProds,
    postProdsDB,
}

export {actionCreators}

