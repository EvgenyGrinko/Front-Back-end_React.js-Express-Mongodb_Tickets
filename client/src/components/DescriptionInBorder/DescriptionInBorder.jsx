import React from "react";
import styles from "./DescriptionInBorder.module.css";
import TextComponent from "../TextComponent/TextComponent.jsx";

function DescriptionInBorder(props){
    return (<div className={styles.container}>
                <div className={styles.header}><TextComponent textStyle="highlighted">{props.headerText}</TextComponent></div>
                <div className={styles.body}>{props.children}</div>
            </div>)
}

export default DescriptionInBorder;