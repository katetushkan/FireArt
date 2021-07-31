import React from "react";
import {Difficulty} from "../../models/Question";
import Icon from "../Icon/Icon";

class Selector extends React.Component<any, any>{

    onFieldChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChangeHandler(fieldName, fieldValue);
    }

    render(){
        return(
            <div className="welcome-screen-form-item">
                <div className="welcome-screen-form-item-label">
                    <Icon name="gamble"/>
                    <label className="form-item-name">Difficulty</label>
                </div>
                <select name="difficulty" className="welcome-screen-select" onChange={this.onFieldChange.bind(this)}>
                    <option value={Difficulty.HARD}>{Difficulty.HARD}</option>
                    <option value={Difficulty.EASY}>{Difficulty.EASY}</option>
                </select>
            </div>
        )
    }
}

export default Selector;