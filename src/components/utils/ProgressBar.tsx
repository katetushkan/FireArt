import React from "react";
import Score from "./Score";

interface IProps{
    score: number,
    count: number
}

const ProgressBar = ({score, count}: IProps) => {

    return(
        <div className="progress-bar-wrapper">
            <Score score={score} count={count}/>
            <progress value={score} max={count} className="progress-bar"/>
        </div>
    )
}

export default ProgressBar;