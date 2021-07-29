import React from "react";
import InputIcon from "../../assets/icons/input-icon.svg";
import Icon from "./Icon";

class InputField extends React.Component<any, any>{

    onFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const cleanValue = fieldValue.replace(/[^0-9]/g, '')
        event.target.value = cleanValue
        this.props.onChangeHandler(fieldName, cleanValue);
    }

    render (){
        return(
            <div className="welcome-screen-form-item">
                <div className="welcome-screen-form-item-name-wrapper">
                    <Icon icon={InputIcon}/>
                    <label className="form-item-name_label">Amount</label>
                </div>
                <input autoFocus type="text" className="welcome-screen_input" name="amount" onChange={this.onFieldChange.bind(this)}/>
            </div>
        )
    }
}

export default InputField;