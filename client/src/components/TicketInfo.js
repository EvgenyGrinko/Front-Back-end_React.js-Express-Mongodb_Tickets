import React, {useContext} from "react";
import TicketsContext from "./context";
import getDateTime from "../getDateTime";
import ImgAvatar from "./ImgAvatar/ImgAvatar.jsx";
import TextInBorder from "./TextInBorder/TextInBorder.jsx";
import TextComponent from "./TextComponent/TextComponent.jsx";
import TextContainer from "./TextContainer/TextContainer.jsx";
import DescriptionInBorder from "./DescriptionInBorder/DescriptionInBorder.jsx";

function TicketInfo(props){
    const tickets = useContext(TicketsContext);
    const ticket = (tickets.find(item => item.ticketId === props.renderId));
    // let status;

    // if (typeof ticket !== 'undefined') status = (ticket.status.slice(0, 1) === "a") ? "ASD" : ticket.status.slice(0, 3).toUpperCase();
    return (<div className = "ticket-info"> 

                {(typeof ticket === "undefined") ? 

                (<div className = "no-ticket"><div>No ticket selected</div></div>) : 

                (<div className = "ticket-descr">
                    <div className = "ticket-header-area">
                    
                        <TextContainer align="horizontal">
                            <TextComponent textStyle="normal">TICKET NO. &nbsp;</TextComponent>
                            <TextComponent textStyle="lighted">{ticket.number}</TextComponent>
                        </TextContainer>
                        <TextContainer align="horizontal">
                            <TextComponent textStyle="normal">LAST UPDATED &nbsp;</TextComponent>
                            <TextComponent textStyle="normal">{getDateTime(ticket.lastUpdatedTime)}</TextComponent>
                        </TextContainer>

                        {/* <div className = "ticket-number">
                            TICKET NO. <span>{ticket.number}</span>
                        </div> */}
                        {/* <div className = "ticket-last-updated">
                            LAST UPDATED {getDateTime(ticket.lastUpdatedTime)}
                        </div> */}
                    </div>
                    <div className = "ticket-owner-area">
                        <DescriptionInBorder headerText="Owner">
                            <TextContainer align="horizontal">
                                <ImgAvatar parent="TicketInfo" src={ticket.owner.avatar}/>
                                <TextContainer align="vertical">
                                    <TextComponent textStyle="lighted">{ticket.owner.firstName + " " + ticket.owner.lastName}</TextComponent>
                                    <TextComponent textStyle="lighted">{ticket.owner.specialities[0].toUpperCase()}</TextComponent>
                                </TextContainer>
                            </TextContainer>
                        </DescriptionInBorder>
                    </div>
                        {/* <div className = "ticket-descr-header">Owner</div>
                        <div className = "ticket-descr-content"> */}
                            {/* <img src={ticket.owner.avatar} alt="avatar"></img> */}
                            {/* <div>
                                <p>{ticket.owner.firstName + " " + ticket.owner.lastName}</p>
                                <p>{ticket.owner.specialities[0].toUpperCase()}</p>
                            </div> */}
                        {/* </div>*/}
                     
                    <div className = "ticket-details-area">
                        <DescriptionInBorder headerText="Details">
                            <TextContainer align="vertical">
                                <TextComponent textStyle="normal">Reported</TextComponent>
                                <TextComponent textStyle="lighted">{getDateTime(ticket.reportedTime)}</TextComponent>
                            </TextContainer>
                            <TextContainer align="vertical">
                                <TextComponent textStyle="normal">Status</TextComponent>
                                <TextInBorder>{ticket.status}</TextInBorder>
                            </TextContainer>
                            <TextContainer align="vertical">
                                <TextComponent textStyle="normal">Description</TextComponent>
                                <TextComponent textStyle="lighted">{ticket.description}</TextComponent>
                            </TextContainer>
                        </DescriptionInBorder>
                    </div>
                        {/* <div className = "ticket-descr-header">Details</div>
                        <div className = "ticket-descr-content"> */}
                            {/* <div className = "item">
                                <p>Reported</p> 
                                <div className = "highlight-element">{getDateTime(ticket.reportedTime)}</div>
                            </div> */}
                            {/* <div className = "item"> 
                                <p>Status</p>
                                 <div className={"status-name status-" + status.toLowerCase()}>{status}</div>  
                                <TextInBorder>{ticket.status}</TextInBorder>
                            </div> */}
                            {/* <div className = "item">
                                <p>Description</p>
                                <div className = "highlight-element">{ticket.description}</div> 
                            </div> */}
                        {/* </div> */}
                    
                    <div className = "ticket-asset-area">
                        <DescriptionInBorder headerText="Asset">
                            <TextContainer align="vertical">
                                <TextComponent textStyle="normal">Name</TextComponent>
                                <TextComponent textStyle="lighted">{ticket.asset.name}</TextComponent>
                            </TextContainer>
                            <TextContainer align="vertical">
                                <TextComponent textStyle="normal">GeoCode</TextComponent>
                                <TextComponent textStyle="lighted">{ticket.asset.geoCode}</TextComponent>
                            </TextContainer>
                            <TextContainer align="vertical">
                                <TextComponent textStyle="normal">Location</TextComponent>
                                <TextContainer align="horizontal">
                                    <TextInBorder>{ticket.asset.kmFrom}</TextInBorder>
                                    <TextInBorder>{ticket.asset.kmTo}</TextInBorder>
                                </TextContainer>
                            </TextContainer>
                        </DescriptionInBorder>
                    </div>

                        {/* <div className = "ticket-descr-header">Asset</div>
                        <div className = "ticket-descr-content"> */}
                            {/* <div className = "item">
                                <p>Name</p> 
                                <div className = "highlight-element">{ticket.asset.name}</div>
                            </div> */}
                            {/* <div className = "item">
                                <p>GeoCode</p>
                                <div className = "highlight-element">{ticket.asset.geoCode}</div> 
                            </div> */}
                            {/* <div className = "item">
                                <p>Location</p>
                                <div style={{display: "flex"}}>
                                    <TextInBorder>{ticket.asset.kmFrom}</TextInBorder>
                                    <TextInBorder>{ticket.asset.kmTo}</TextInBorder> */}

                                    {/* <div className="status-name highlight-element">{ticket.asset.kmFrom}</div>
                                    <div className="status-name highlight-element" style={{marginLeft: "0.2em"}}>{ticket.asset.kmTo}</div> */}
                                {/* </div> 
                            </div> */}
                        {/* </div> */}
                </div>)}
            </div>)
}


export default TicketInfo;