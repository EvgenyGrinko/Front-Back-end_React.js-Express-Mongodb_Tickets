import React from "react";
import styles from "./TextContainer.module.css";

function TextContainer(props){
    return <div className={styles[props.align + "Elements"]}>{props.children}</div>
}

export default TextContainer;