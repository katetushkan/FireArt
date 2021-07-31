import * as React from "react";
import Score from "../Score/Score";

interface IProps {
  score: number,
  count: number
}

const ProgressBar: React.FC<IProps> = ({ score, count }) => {

  return (
    <div className="progress-bar">
      <Score score={score} count={count}/>
      <progress value={score} max={count} className="progress-bar__progress"/>
    </div>
  )
}

export default ProgressBar;