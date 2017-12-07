import React, { Component } from "react";
import "./TabNavigator.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0
        };
        this.setScreen = this.setScreen.bind(this);
        this.renderScreen = this.renderScreen.bind(this);
    }
    setScreen(screenNumber) {
        this.setState({ screen: screenNumber });
    }

    renderScreen() {
        var Screen = this.props.Screens[this.state.screen].component.comp;
        return (
            <Screen
                navigationProps={
                    this.props.Screens[this.state.screen].navigationProps
                }
            />
        );
    }
    render() {
        return (
            <div className="App">
                <div className="body">{this.renderScreen()}</div>
                <Footer
                    setScreen={this.setScreen}
                    currentSelectedScreen={0}
                    screens={this.props.Screens}
                />
            </div>
        );
    }
}

export default App;
