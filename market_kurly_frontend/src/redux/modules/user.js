import {createAction, handleActions} from "redux-actions";
import { produce } from "immer";
import { useHistory } from "react-router";
import {setLocal, getLocal, deleteLocal} from 'shared/Cookie'


const LOG_IN = "LOG_IN";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

const logIn = createAction(LOG_IN, (log_name, user) => ({log_name, user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

const initialState = {
    user : null,
    is_login : false,
    log_name : null,
}

const signupDB = (id, pwd, name) => {
    
    return function (dispatch, getState, {history}) {
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
        history.push('/login') 
    }
}

const loginDB = (id, pwd) => {
    return function(dispatch, getState, {history}) {
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
                localStorage.setItem("X-AUTH-TOKEN", res.token)
                localStorage.setItem("name", res.name)
                dispatch(logIn(res.name))
                history.push('/')
                console.log(localStorage.getItem("X-AUTH-TOKEN"))
            }else{
                window.alert(res.msg)
            }
        })
         
    }
}


export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        localStorage.setItem("is_login", "success");
        draft.log_name = action.payload.log_name;
        draft.user = action.payload.user;
        
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
    signupDB,
    loginDB,
    logIn,
}

export {actionCreators}