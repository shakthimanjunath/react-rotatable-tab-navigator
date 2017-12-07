import React, { Component } from "react";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: 0,
            screen: this.props.currentSelectedScreen,
            tab0: 0,
            tab1: 1,
            tab2: 2,
            tab3: 3,
            round: 0
        };

        this.rotateTab = this.rotateTab.bind(this);
    }

    rotateTab(next, back) {
        this.setState({
            rotate: next ? this.state.rotate + 180 : this.state.rotate - 180,
            round: next
                ? (this.state.rotate + 180) % 360 === 0
                  ? this.state.round + 4 <= this.props.screens.length - 1
                    ? this.state.round + 4
                    : 0
                  : this.state.round
                : -this.state.rotate % 360 === 0
                  ? this.state.round === 0
                    ? this.state.round
                    : this.state.round - 4
                  : this.state.round
        });
        return;
    }

    render() {
        var tab0Screen = this.state.round + this.state.tab0,
            tab1Screen = this.state.round + this.state.tab1,
            tab2Screen = this.state.round + this.state.tab2,
            tab3Screen = this.state.round + this.state.tab3;
        return (
            <div className="footer-parent">
                <div
                    className="footer"
                    style={{
                        backgroundColor: "red",
                        transitionDuration: "1s",
                        transform: `rotate(` + this.state.rotate + "deg" + `)`
                    }}
                >
                    <button
                        disabled={
                            tab0Screen < this.props.screens.length ? (
                                false
                            ) : (
                                true
                            )
                        }
                        id="chart1"
                        style={{
                            transitionDuration: "1s",

                            background:
                                this.state.screen === tab0Screen
                                    ? "linear-gradient(black,#001e16)"
                                    : "linear-gradient(black,grey)"
                        }}
                        onClick={() => {
                            this.setState({ screen: tab0Screen });
                            this.props.setScreen(tab0Screen);
                        }}
                    >
                        <div
                            style={{
                                transitionDuration: "1s",
                                transform:
                                    `rotate(` + -this.state.rotate + "deg" + `)`
                            }}
                        >
                            {tab0Screen > this.props.screens.length ? (
                                ""
                            ) : (
                                this.props.screens[tab0Screen].component.name
                            )}
                        </div>
                        {this.props.screens[tab0Screen] ? (
                            <i
                                className={
                                    this.props.screens[tab0Screen].component
                                        .icon
                                }
                            />
                        ) : null}
                    </button>
                    <button
                        disabled={
                            tab1Screen < this.props.screens.length ? (
                                false
                            ) : (
                                true
                            )
                        }
                        id="chart2"
                        style={{
                            transitionDuration: "1s",
                            background:
                                this.state.screen === tab1Screen
                                    ? "linear-gradient(black,#001e16)"
                                    : "linear-gradient(black, grey)"
                        }}
                        onClick={() => {
                            this.setState({ screen: tab1Screen });
                            this.props.setScreen(tab1Screen);
                        }}
                    >
                        <div
                            style={{
                                transitionDuration: "1s",
                                transform:
                                    `rotate(` + -this.state.rotate + "deg" + `)`
                            }}
                        >
                            {tab1Screen < this.props.screens.length ? (
                                this.props.screens[tab1Screen].component.name
                            ) : (
                                ""
                            )}
                        </div>
                        {this.props.screens[tab1Screen] ? (
                            <i
                                className={
                                    this.props.screens[tab1Screen].component
                                        .icon
                                }
                            />
                        ) : null}
                    </button>
                    <button
                        disabled={
                            tab2Screen < this.props.screens.length ? (
                                false
                            ) : (
                                true
                            )
                        }
                        id="chart3"
                        style={{
                            transitionDuration: "1s",
                            background:
                                this.state.screen === tab2Screen
                                    ? "linear-gradient(black,#001e16)"
                                    : "linear-gradient(black, grey)"
                        }}
                        onClick={() => {
                            this.setState({ screen: tab2Screen });
                            this.props.setScreen(tab2Screen);
                        }}
                    >
                        {this.props.screens[tab2Screen] ? (
                            <i
                                style={{
                                    transitionDuration: "1s",
                                    transform:
                                        `rotate(` +
                                        -this.state.rotate +
                                        "deg" +
                                        `)`,
                                    background:
                                        this.state.screen === tab2Screen
                                            ? "linear-gradient(black,#001e16)"
                                            : "linear-gradient(black, grey)"
                                }}
                                className={
                                    this.props.screens[tab2Screen].component
                                        .icon
                                }
                            />
                        ) : null}
                        <div
                            style={{
                                transitionDuration: "1s",
                                transform:
                                    `rotate(` + -this.state.rotate + "deg" + `)`
                            }}
                        >
                            {tab2Screen < this.props.screens.length ? (
                                this.props.screens[tab2Screen].component.name
                            ) : (
                                ""
                            )}
                        </div>
                    </button>
                    <button
                        disabled={
                            tab3Screen < this.props.screens.length ? (
                                false
                            ) : (
                                true
                            )
                        }
                        style={{
                            transitionDuration: "1s",
                            background:
                                this.state.screen === tab3Screen
                                    ? "linear-gradient(black,#001e16)"
                                    : "linear-gradient(black, grey)"
                        }}
                        id="chart4"
                        onClick={() => {
                            this.setState({ screen: tab3Screen });
                            this.props.setScreen(tab3Screen);
                        }}
                    >
                        {this.props.screens[tab3Screen] ? (
                            <i
                                style={{
                                    transitionDuration: "1s",
                                    transform:
                                        `rotate(` +
                                        -this.state.rotate +
                                        "deg" +
                                        `)`,
                                    background:
                                        this.state.screen === tab3Screen
                                            ? "linear-gradient(black,#001e16)"
                                            : "linear-gradient(black, grey)"
                                }}
                                className={
                                    this.props.screens[tab3Screen].component
                                        .icon
                                }
                            />
                        ) : null}
                        <div
                            style={{
                                transitionDuration: "1s",
                                transform:
                                    `rotate(` + -this.state.rotate + "deg" + `)`
                            }}
                        >
                            {tab3Screen < this.props.screens.length ? (
                                this.props.screens[tab3Screen].component.name
                            ) : (
                                ""
                            )}
                        </div>
                    </button>
                </div>
                <button
                    disabled={
                        this.state.round ===
                        Math.round(this.props.screens.length / 4) * 4 ? (
                            true
                        ) : (
                            false
                        )
                    }
                    style={{
                        opacity:
                            this.state.round ===
                            Math.round(this.props.screens.length / 4) * 4
                                ? 0
                                : 1
                    }}
                    id="next"
                    onClick={() => this.rotateTab(true, false)}
                >
                    <i className="fa fa-arrow-circle-right" />
                </button>
                <button
                    disabled={
                        this.state.round ===
                            -Math.round(this.props.screens.length / 4) * 4 ||
                        (this.state.round === 0 && this.state.rotate === 0) ? (
                            true
                        ) : (
                            false
                        )
                    }
                    style={{
                        opacity:
                            this.state.round ===
                                -Math.round(this.props.screens.length / 4) *
                                    4 ||
                            (this.state.round === 0 && this.state.rotate === 0)
                                ? 0
                                : 1
                    }}
                    id="back"
                    onClick={() => {
                        this.rotateTab(false, true);
                    }}
                >
                    <i className="fa fa-arrow-circle-left" />
                </button>
            </div>
        );
    }
}
