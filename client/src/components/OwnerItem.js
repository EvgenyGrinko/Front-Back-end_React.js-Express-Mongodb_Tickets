import React from "react";
import ImgAvatar from "./ImgAvatar/ImgAvatar.jsx";
import TextInBorder from "./TextInBorder/TextInBorder.jsx";

function OwnerItem(props){

    return (
        <div className = "owner-item sidebar-template" onClick = {() => {props.onClick(props.id)}}>
            {/* <img className="owner-img" src={props.imgSrc} alt="avatar"></img> */}
            <ImgAvatar parent="OwnerItem" src={props.imgSrc}/>
            <div className="reported-time">{props.reportedTime}</div>
            <div className="asset-name">{props.assetName}</div>
            {/* <div className={"status-name status-" + props.status.toLowerCase()}>{props.status}</div> */}
            <TextInBorder>{props.status}</TextInBorder>
        </div>
    )
}

export default OwnerItem;