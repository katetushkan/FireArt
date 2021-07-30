import React from "react";

const Icon = (props: any) =>{
    return(
        <div className="welcome-screen-form-item">
            <img alt="icon" className="icon" src={props.icon}/>
        </div>
    )
}

export default Icon;