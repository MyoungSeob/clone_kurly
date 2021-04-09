import {createAction, handleActions } from 'redux-actions';
import {produce} from 'immer'

// 장바구니에 상품을 추가할 때 사용하는 redux입니다.
const POST_PRODS = "POST_PRODS";

const postProds = createAction(POST_PRODS, ((prods) => ({prods})));

const initailState = {
    list : [],
};

export const postProdsDB = (_id, number) => {
    // components의 ProdInfo에서 보내주는 _id와 number를 이용합니다.
    return function (dispatch, getState, {history}){
        fetch("http://15.165.205.40/api/carts/products",{
            method : "POST",
            // 백엔드와 약속한 API주소로 약속한 데이터를 보내 장바구니 추가 기능을 동작합니다.
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

