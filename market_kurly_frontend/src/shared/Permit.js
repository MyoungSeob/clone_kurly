import React from 'react';
import { useSelector } from 'react-redux';


const Permit = (props) => {
    const user_info = useSelector((state) => state.user.log_name)

    const has_token = localStorage.getItem('X-AUTH-TOKEN');
    if( !has_token ){
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }
    
    return null;
}

export default Permit;

