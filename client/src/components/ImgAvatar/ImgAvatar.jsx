import React from "react";
import styles from "./ImgAvatar.module.css";

function ImgAvatar(props){

    return <img className={styles["img"+props.parent]} src={props.src} alt="avatar"></img>
}

export default ImgAvatar;