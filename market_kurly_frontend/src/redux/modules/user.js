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
                // 회원가입 시, 백엔드와 약속된 값들을 서버로 보냅니다.
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
        // 회원가입이 완료되면 login창으로 이동할 수 있도록 하였습니다. 
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
                // 로그인을 한 후, 서버에서 보내주는 토큰값인 X-AUTH-TOKEN과 로그인 후 화면에 표시해야하는 
                // 회원가입 시 설정한 name값을 localStorage에 저장합니다.
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