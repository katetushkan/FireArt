import React from "react";
import Star from "./Star";

interface IProps{
    count: number
}

const StarRating = ({count}: IProps) =>{
    const array = Array.from(Array(count).keys())
    return(
        <div className="rating-wrapper">
            {
               array.map(( id) =>
                    <Star key={id} id={id.toString()}/>
               )}
        </div>
    )
}

export default StarRating;