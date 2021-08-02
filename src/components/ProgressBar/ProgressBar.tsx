import * as React from "react";
import clsx from "clsx";

import Score from "../Score/Score";
import "./ProgressBar.css"

interface IProps {
  score: number,
  count: number,
  className?: string
}

const ProgressBar: React.FC<IProps> = ({ score, count, className }) => {
  const progress = score * 100 / count;

  return (
    <div className={clsx("progress-bar", className)}>
      <Score
        score={score}
        count={count}
        className="progress-bar__score"
        classNameStrong="progress-bar__strong"
      />
      <div
        className="progress-bar__progress"
        style={{background: `linear-gradient( to right, #FF7878 ${progress}%, #DBDEFF 1%, #DBDEFF)`}}
      />
    </div>
  )
}

export default ProgressBar;