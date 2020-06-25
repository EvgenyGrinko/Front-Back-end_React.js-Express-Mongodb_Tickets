import React, {useContext} from "react";
import TicketsContext from "../context/context";
import OwnerItem from "./OwnerItem/OwnerItem";
import styles from "./Sidebar.module.css";
import {Link} from "react-router-dom";

function SideBar(){

    const {apiResponse, selectedItemId, setItemSelected} = useContext(TicketsContext);

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <div className={styles.sidebarTemplate}>
                    <button>OWNER</button>
                    <button>REPORTED</button>
                    <button>ASSET</button>
                    <button>STATUS</button>
                </div>
            </div>
            <div className={styles.sidebarOwners}>
                {apiResponse.map(item => (
                    <Link to={{ pathname: "/item/" + item.ticketId} } key={item.ticketId}>
                        <div className={(selectedItemId === item.ticketId) ? styles.itemPicked : ""} onClick={()=>{setItemSelected(item.ticketId)}}>
                            <OwnerItem active={(selectedItemId === item.ticketId) ? true : false} data={item} />
                        </div>   
                    </Link>                    
                ))}
            </div>
        </div>
    )

}

export default SideBar;