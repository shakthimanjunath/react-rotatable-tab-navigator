import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TabNavigator from "./TabNavigator";
import registerServiceWorker from "./registerServiceWorker";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";
import Screen5 from "./screen5";
import Screen6 from "./screen6";
import Screen7 from "./screen7";
import Screen8 from "./screen8";
import Screen9 from "./screen9";

ReactDOM.render(
    <TabNavigator
        Screens={[
            {
                component: {
                    name: "Screen1",
                    comp: Screen1,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen2",
                    comp: Screen2,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen3",
                    comp: Screen3,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen4",
                    comp: Screen4,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen5",
                    comp: Screen5,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen6",
                    comp: Screen6,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen7",
                    comp: Screen7,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen8",
                    comp: Screen8,
                    icon: null
                },
                navigationProps: { a: 0, b: 1 }
            },
            {
                component: {
                    name: "Screen9",
                    comp: Screen9,
                    icon: "fa fa-arrow-circle-right"
                },
                navigationProps: { a: 0, b: 1 }
            }
        ]}
    />,
    document.getElementById("root")
);
registerServiceWorker();
