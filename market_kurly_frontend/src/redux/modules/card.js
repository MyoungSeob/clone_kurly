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
                console.log(res);
                
            });
    }
}

export default handleActions(
    {
        [SET_CARD]: (state, action) => produce(state, (draft) => {
        }),
    }, initialState
);

const actionCreators = {
    setCard,
    loadCardDB,
};

export { actionCreators };