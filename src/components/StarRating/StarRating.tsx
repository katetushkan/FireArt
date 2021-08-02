import * as React from "react";
import clsx from "clsx";
import Star from "../Star/Star";

import "./StarRaiting.css";

interface IProps {
  score: number;
  count: number;
  className?: string;
  classNameStar?: string;
}

const StarRating: React.FC<IProps> = ({ count, score, className, classNameStar }) => {
  const rating = 100 * score / count / 10;
  const array = new Array(10).fill(null);
  return (
    <div className={clsx("star-rating", className)}>
      {
        array.map((_, index) =>
          <Star
            key={index}
            id={index.toString()}
            filled={index + 1 <= rating}
            className={classNameStar}
          />
        )}
    </div>
  )
}

export default StarRating;