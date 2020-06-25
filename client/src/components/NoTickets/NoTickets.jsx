import React from "react";
import styles from "./NoTickets.module.css";

function NoTickets(props){
    return <div className={styles.noTicket}><div>No ticket {props.area === "Sidebar" ? "found" : "selected"} </div></div>
}

export default NoTickets;