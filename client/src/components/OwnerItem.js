import React from "react";

function OwnerItem(props){

    return (
        <div className = "owner-item sidebar-template" onClick = {() => {props.onClick(props.id)}}>
            <img className="owner-img" src={props.imgSrc} alt="avatar"></img>
            <div className="reported-time">{props.reportedTime}</div>
            <div className="asset-name">{props.assetName}</div>
            <div className={"status-name status-" + props.status.toLowerCase()}>{props.status}</div>
        </div>
    )
}

export default OwnerItem;