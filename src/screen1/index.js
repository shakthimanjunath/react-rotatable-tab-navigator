import React, { Component } from "react";
import "./styles.css";
class Screen1 extends Component {
    render() {
        return (
            <div className="screen-1-parent">
                {"screen1.Prop received=" + this.props.navigationProps.a}
            </div>
        );
    }
}

export default Screen1;
