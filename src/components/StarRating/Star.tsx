import {StarIcon} from "./StarIcon";

interface IProps {
    id: string
}

const Star = ({id}: IProps) => {

    return(
        <div className="star-wrapper">
            <input className="star" id={id}  type="radio" name="star"/>
            <label className="star_label" htmlFor={id}>
                <StarIcon/>
            </label>
        </div>
    )
}

export default Star;