import {createAction, handleActions} from "redux-actions";
import { produce } from "immer";



const SET_USER = "SET_USER"
const GET_USER = "GET_USER"

const setUser = createAction(SET_USER, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

const initialState = {
    user : null,
    is_login : false,
}

const signupDB = (id, pwd, name) => {
    return function (dispatch, {history}) {
        fetch('http://15.165.205.40/api/signup', {
            
            method : "POST",
            body : JSON.stringify({
                username : id,
                password : pwd,
                name : name,
            }),
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        
    }
}

const loginDB = (id, pwd) => {
    return function(dispatch, {history}) {
        fetch('http://15.165.205.40/api/login', {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            },
            body : JSON.stringify({
                username : id,
                password : pwd,
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.token){
                localStorage.setItem("test-token", res.token)
            }else{
                window.alert(res.msg)
            }
        })
        
    }
}


export default handleActions({
    [SET_USER] : (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
    })
},initialState
);

const actionCreators = {
    signupDB,
    loginDB,
}

export {actionCreators}