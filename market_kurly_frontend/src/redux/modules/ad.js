// 광고목록 불러오기 모듈

import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

// Actions
const SET_AD = "SET_AD";

// Action Creators

const setAd = createAction(SET_AD, (ad_list) => ({ad_list}))

const initialState = {
    list: [],
};




export const loadAdDB = () => {
   return function (dispatch, getState, {history}){
    fetch("http://15.165.205.40/api/commercials")
    .then((res) => res.json())
    .then((res) => {
        const results = res.results;

        let ad_list = [];

        results.forEach((doc) => {

            let _ad = {
                ...doc
            }
            let ad = {
                id : _ad.id,
                img : _ad.img
            }
            ad_list.push(ad)
        })
        console.log(ad_list)
        dispatch(setAd(ad_list));            
        });
        
    };
}


export default handleActions(
    {
        [SET_AD] : (state, action) => produce(state, (draft) => {
            draft.list = action.payload.ad_list;
        }),
    }, initialState
);

const actionCreators = {
    setAd,
    loadAdDB,
};

export { actionCreators };