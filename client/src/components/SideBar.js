import React, {useContext, useState} from "react";
import TicketsContext from "./context";
import OwnerItem from "./OwnerItem";
import getDateTime from "../getDateTime";
function SideBar(props){

    const [itemIDClicked, setItemIDClicked] = useState("");
    const tickets = useContext(TicketsContext);

    function handleItemClick(id){
        props.getSelectedOwnerId(id);
        const itemAlreadyClicked = document.querySelector(`div[id = "${itemIDClicked}"]`);
        const itemAlreadyClickedAssetName = document.querySelector(`div[id = "${itemIDClicked}"] .asset-name`);
        const itemNowClicked = document.querySelector(`div[id = "${id}"]`);
        const itemNowClickedAssetName = document.querySelector(`div[id = "${id}"] .asset-name`);
        if(itemIDClicked === "") {
            itemNowClicked.classList.add("item-picked");
            itemNowClickedAssetName.classList.add("item-picked-asset-name");
            setItemIDClicked(id);
            return;
        }
        if(itemIDClicked === id) return;
        else{
            itemAlreadyClicked.classList.remove("item-picked");
            itemAlreadyClickedAssetName.classList.remove("item-picked-asset-name");
            itemNowClicked.classList.add("item-picked");
            itemNowClickedAssetName.classList.add("item-picked-asset-name");
            setItemIDClicked(id);
            return;
        }
    }

    return (
        <div className = "sidebar">
            <div className = "sidebar-header">
                <div className="sidebar-template">
                    <button className = "header-owner">OWNER</button>
                    <button className = "header-reported">REPORTED</button>
                    <button className = "header-asset">ASSET</button>
                    <button className = "header-status">STATUS</button>
                </div>
            </div>
            <div className = "sidebar-owners">
                {tickets.map(item => (<div key={item.ticketId} id = {item.ticketId}>
                                            <OwnerItem 
                                            id = {item.ticketId}
                                            imgSrc = {item.owner.avatar} 
                                            reportedTime = {getDateTime(item.reportedTime)} 
                                            assetName = {item.asset.name} 
                                            status = {(item.status.slice(0, 1) === "a") ? "ASD" : item.status.slice(0, 3).toUpperCase()}
                                            onClick = {handleItemClick}
                                            />
                                        </div>
                                        
                ))}
            </div>
        </div>
    )

}

export default SideBar;