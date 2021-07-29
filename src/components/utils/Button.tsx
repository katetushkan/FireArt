import React, {MouseEvent} from "react";


class Button extends React.Component<any, any>{

    onClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.props.onClickHandler();
    }

    render (){
        return(
            <button autoFocus className={this.props.className} onClick={this.onClick.bind(this)}/>
        )
    }
}

export default Button;