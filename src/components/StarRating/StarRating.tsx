import * as React from "react";
import Star from "../Star/Star";

import "./StarRaiting.css";

interface IProps {
  score: number;
  count: number;
  classNameStar?: string;
  className?: string;
}

const StarRating: React.FC<IProps> = ({ count, score, classNameStar, className }) => {
  const array = new Array(count).fill(null);
  return (
    <div className="star-rating">
      {
        array.map((_, index) =>
          <Star
            key={index}
            id={index.toString()}
            filled={index + 1 <= score}
            className={className}
          />
        )}
    </div>
  )
}

export default StarRating;