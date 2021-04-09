import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';
import { useHistory } from "react-router";
import {setLocal, getLocal, deleteLocal} from 'shared/Cookie'


const GET_PROD = "GET_PROD";
const DELETE_PROD = "DELETE_PROD";

const getProd = createAction(GET_PROD, (prod_list) => ({prod_list}));
const deleteProd = createAction(DELETE_PROD, (id, nums) => ({id, nums}));

const initialState = {
    list : [],
};


export const loadProdDB = () => {

    return function (dispatch, getState, {history}){

        let token = localStorage.getItem('X-AUTH-TOKEN') || '';
        // 장바구니 페이지로 이동 할 때, 서버의 장바구니 DB에 저장되어 있는 값을 불러와 그것을 토대로 화면에 나타냅니다.
        fetch('http://15.165.205.40/api/carts', {
            headers: {
                'X-AUTH-TOKEN': token,
            }
        })
            .then((res) => res.json())
            .then((res) => {
                const prod_list = res.results;                          
               
                dispatch(getProd(prod_list));
                
                const cart_list = [];

                prod_list.forEach((doc) => {
                    let _cart = {
                        ...doc
                    }
                    let cart = {
                        id : _cart.id,
                        nums : _cart.nums,
                    }
                    console.log(cart)
                    cart_list.push(cart)                   
                    // forEach를 돌려 우리에게 필요한 데이터를 선별하여 객체화 하였습니다.
                    // cart_list는 장바구니 DB에 저장되어 있는 제품들의 id, nums들의 값을 가진 객체입니다.
                })
                if(!localStorage.getItem("cart")){
                    localStorage.setItem("cart", JSON.stringify(cart_list))                    
                   }else{
                     localStorage.removeItem("cart")
                     localStorage.setItem("cart", JSON.stringify(cart_list))  
                   };
                   // 만약 장바구니 페이지에 들어 갔을 때, 로컬스토리지에 cart라는 토큰이 없다면, 
                    // cart_list의 값을 가진 cart라는 토큰을 만들고, 토큰이 존재한다면 그 값을 지우고 추가하란 조건문입니다.
                    // 이를 통해 장바구니 DB의 id,nums값과, 로컬스토리지의 id,nums 값들이 같아지고,
                    // 로그아웃을 하여 화면 바깥으로 나가게 되었을 때 다시한번 DB에 로컬스토리지의 값을 보내줍니다.
                console.log(cart_list)
                console.log(localStorage.getItem("cart"))
                
                
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
            window.location.reload()
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
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

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