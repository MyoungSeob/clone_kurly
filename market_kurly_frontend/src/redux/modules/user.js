// import {createAction, handleActions} from "redux-actions";
// import { produce } from "immer";

<<<<<<< HEAD

// const SET_USER = "SET_USER"
// const GET_USER = "GET_USER"
=======
>>>>>>> 2c7b30d77f364abea16f6a42325687a1774c8a76

// const setUser = createAction(SET_USER, (user) => ({user}));
// const getUser = createAction(GET_USER, (user) => ({user}));

// const initialState = {
//     user : null,
//     is_login : false,
// }

<<<<<<< HEAD
// const signupDB = (id, pwd, name) => {
//     return function (dispatch, {history}) {
//         fetch('http://15.165.205.40/api/signup', {
            
//             method : "POST",
//             body : JSON.stringify({
//                 username : id,
//                 password : pwd,
//                 name : name,
//             }),
//             headers : {
//                 'Content-Type' : 'application/json',
//                 'Accept' : 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//         })
        
//     }
// }

// const loginDB = (id, pwd) => {
//     return function(dispatch, {history}) {
//         fetch('http://15.165.205.40/api/login', {
//             method : "POST",
//             headers : {
//                 'Content-Type' : 'application/json',
//                 'Accept' : 'application/json',
//             },
//             body : JSON.stringify({
//                 username : id,
//                 password : pwd,
//             })
//         })
//         .then(res => res.json())
//         .then(res => {
//             if(res.token){
//                 localStorage.setItem("test-token", res.token)
//             }else{
//                 window.alert(res.msg)
//             }
//         })
        
//     }
// }
=======
const initialState = {
    user : null,
    is_login : false,
}

const signupDB = (id, pwd, name) => {
    return function (dispatch, getState, { history }) {
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
    history.push('/') 
    }
}

const loginDB = (id, pwd) => {
    return function(dispatch, getState, { history }) {
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
    history.push('/');  
    }
}
>>>>>>> 2c7b30d77f364abea16f6a42325687a1774c8a76


// export default handleActions({
//     [SET_USER] : (state, action) => produce(state, (draft) => {
//         draft.user = action.payload.user;
//     })
// },initialState
// );

// const actionCreators = {
//     signupDB,
//     loginDB,
// }

// export {actionCreators}