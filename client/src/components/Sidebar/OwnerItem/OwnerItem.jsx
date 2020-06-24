import React from "react";
import ImgAvatar from "../../ImgAvatar/ImgAvatar";
import TextInBorder from "../../TextInBorder/TextInBorder";
import TextComponent from "../../TextComponent/TextComponent"; 
import getDateTime from "../../getDateTime";
import styles from "./OwnerItem.module.css";
import stylesSidebar from "../Sidebar.module.css";


function OwnerItem(props){

    return (
        <div className = {styles.ownerItem +" "+ stylesSidebar.sidebarTemplate}>
            <ImgAvatar parent="OwnerItem" src={props.data.owner.avatar}/>
            <TextComponent textStyle="lighted">{getDateTime(props.data.reportedTime)}</TextComponent>
            <TextComponent textStyle={props.active ? "highlighted" : "lighted"}>{props.data.asset.name}</TextComponent>
            <TextInBorder>{props.data.status}</TextInBorder>
        </div>
    )
}

export default OwnerItem;



