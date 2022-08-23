import React, {Component} from "react";

class ActionButton extends Component {

    state = {  } 

    render() { 
        return (
            <button onClick={this.props.click}>
                {this.props.title}
            </button>
        );
    }
}
 
export default ActionButton;