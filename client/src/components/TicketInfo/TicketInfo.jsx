import React from "react";
import styles from "./TicketInfo.module.css";

function TicketInfo(props){
    return <div className={styles.ticketInfo}> {props.children}</div>
}


export default TicketInfo;