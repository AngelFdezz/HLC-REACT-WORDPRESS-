"use client";
import React from "react";

export default function Toggle() {
    const [state, setState] = React.useState("Off");

    function changeState() {
        setState((state) => (state === "On" ? "Off" : "On"));
    }
    let buttonClass;
    // if (state === "On") {
    //     buttonClass = "toggle-button on";
    // } else {
    //     buttonClass = "toggle-button off";
    // }
    
    buttonClass = (state === "On") ? "toggle-button on" : "toggle-button off"

    return (
        <button className={buttonClass} onClick={changeState}>
            {state}
        </button>
    );
}