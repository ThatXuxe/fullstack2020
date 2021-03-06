import React from "react";
import '../styles/App.css'

const Notification = (props) => {
    if (props.message.text === '') return <></>;
    return (
        <div className={props.message.error ? 'error' : 'message'}>
            {props.message.text}
        </div>
    );
};

export default Notification
