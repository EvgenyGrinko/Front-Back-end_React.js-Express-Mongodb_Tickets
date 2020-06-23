import React from "react";
import styles from "./TextInBorder.module.css";
import handleStatusName from "../handleStatusName.js";
import handleStatusClassName from "../handleStatusClassName.js";


function TextInBorder(props){
    return <div className={styles.statusName + " " + styles[handleStatusClassName(props.children)]}>{handleStatusName(props.children)}</div>
}

export default TextInBorder;