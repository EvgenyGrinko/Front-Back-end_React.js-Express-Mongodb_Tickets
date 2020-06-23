import React from "react";
import styles from "./TextComponent.module.css";

function TextComponent(props){
    return <div className = {styles[props.textStyle + "Text"]}>{props.children}</div>
}

export default TextComponent;