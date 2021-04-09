//카드 (메인페이지 화면 상품목록) 불러오기

import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

// Actions
const SET_CARD = "SET_CARD";


// Action Creators
const setCard = createAction(SET_CARD, (card_list) => ({card_list}));


const initialState = {
    list: [],
};

const initialCard = {
    id: 1,
    name: "자른 미역 30g(냉장)",
    original_price: "1,900",
    discounted_price: "1,672",
    discount_percent: "12",
    main_image_url: "https://img-cf.kurly.com/shop/data/goods/147918052537l0.jpg",
}


export const loadCardDB = () => {
    return function (dispatch, getState, {history}){
        fetch("http://15.165.205.40/api/recommendations")
            .then((res) => res.json())
            .then((res) => {
                const results = res.results;

                let card_list = [];
                
                results.forEach((doc) => {

                    let _card = {
                        ...doc
                    }

                    let card = {
                        id: _card.id,
                        name: _card.name,
                        original_price: _card.original_price,
                        discounted_price: _card.discounted_price,
                        discount_percent: _card.discount_percent,
                        main_image_url: _card.main_image_url,
                    };
                    card_list.push(card);
                });
                dispatch(setCard(card_list));                
            });
    }
}


export default handleActions(
    {
        [SET_CARD]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.card_list;
        }),

    }, initialState
);

const actionCreators = {
    setCard,

    loadCardDB,

};

export { actionCreators };