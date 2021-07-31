import * as React from "react";
import Star from "../Star/Star";

interface IProps {
  score: number;
  count: number;
}

const StarRating: React.FC<IProps> = ({ count, score }) => {
  const array = new Array(10).fill(null);
  return (
    <div className="star-rating">
      {
        array.map((_, index) =>
          <Star
            key={index}
            id={index.toString()}
            filled={index + 1 < score}
          />
        )}
    </div>
  )
}

export default StarRating;