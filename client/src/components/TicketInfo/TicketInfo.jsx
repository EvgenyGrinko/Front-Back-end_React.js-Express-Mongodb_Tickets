import React, {useContext} from "react";
import TicketsContext from "../context/context";
import getDateTime from "../getDateTime";
import ImgAvatar from "../ImgAvatar/ImgAvatar";
import TextInBorder from "../TextInBorder/TextInBorder";
import TextComponent from "../TextComponent/TextComponent";
import TextContainer from "../TextContainer/TextContainer";
import DescriptionInBorder from "../DescriptionInBorder/DescriptionInBorder";
import styles from "./TicketInfo.module.css";

function TicketInfo(){
    const {apiResponse, selectedItemId} = useContext(TicketsContext);
    const ticket = (apiResponse.find(item => item.ticketId === selectedItemId));
    
    return (<div className={styles.ticketInfo}> 

                {(typeof ticket === "undefined") ? 

                (<div className={styles.noTicket}><div>No ticket selected</div></div>) : 

                (<div className={styles.ticketDescr}>
                    <div className={styles.ticketHeaderArea}>
                    
                        <TextContainer align="horizontal">
                            <TextComponent textStyle="normal">TICKET NO. &nbsp;</TextComponent>
                            <TextComponent textStyle="lighted">{ticket.number}</TextComponent>
                        </TextContainer>
                        <TextContainer align="horizontal">
                            <TextComponent textStyle="normal">LAST UPDATED &nbsp;</TextComponent>
                            <TextComponent textStyle="normal">{getDateTime(ticket.lastUpdatedTime)}</TextComponent>
                        </TextContainer>
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
                </div>)}
            </div>)
}


export default TicketInfo;