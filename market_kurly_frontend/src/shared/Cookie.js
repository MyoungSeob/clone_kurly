// <<<<<<< HEAD
const getLocal = (name) => {
    localStorage.getItem(`${name}`);
}

const setLocal = (name, value) => {
    localStorage.setItem(`${name}`, `${value}`);
}

const deleteLocal = (name) => {
    localStorage.removeItem(`${name}`);
}

export {getLocal, setLocal, deleteLocal};
// =======
// const getCookie =(name)=>{
//     let value = "; "+document.cookie;

//     let parts = value.split(`; ${name}=`);
//     if(parts.length === 2) {

//         return parts.pop().split(';').shift();
//     }
// }

// //exp = 5 -> 기본값을 미리 지정하며 exp를 따로 지정하지 않아도 된다.
// const setCookie =(name, value, exp = 5)=>{
//     let date = new Date();
//     date.setTime(date.getTime() + exp*24*60*60*1000);

//     document.cookie = `${name} = ${value}; expires=${date.toUTCString()}`;
// }

// const deleteCookie = (name) => {
//     let date = new Date("2020-01-01").toUTCString();

//     console.log(date);

//     document.cookie = name+"=; expires="+date;
// }

// export {getCookie, setCookie, deleteCookie};
// >>>>>>> 79155989800016c03acf4aee06971dbc994ba731
