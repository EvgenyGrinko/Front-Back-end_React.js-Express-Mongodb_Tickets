import React, {useContext} from "react";
import TicketsContext from "../context/context";
import getDateTime from "../getDateTime";
import ImgAvatar from "../ImgAvatar/ImgAvatar";
import TextInBorder from "../TextInBorder/TextInBorder";
import TextComponent from "../TextComponent/TextComponent";
import TextContainer from "../TextContainer/TextContainer";
import DescriptionInBorder from "../DescriptionInBorder/DescriptionInBorder";
import styles from "./TicketDescr.module.css";

function TicketDescr(props){
    const {apiResponse, selectedItemId} = useContext(TicketsContext);
    const id = Number(props.match.params.id);
    const ticket = (apiResponse.find(item => item.ticketId === id));
    // async function getItem(){
    //     conts res = await fetch()
    // }
    return (

    <div className={styles.ticketDescr}>
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
            <DescriptionInBorder headerText="Owner">
                <TextContainer align="horizontal">
                    <ImgAvatar parent="TicketInfo" src={ticket.owner.avatar}/>
                    <TextContainer align="vertical">
                        <TextComponent textStyle="lighted">{ticket.owner.firstName + " " + ticket.owner.lastName}</TextComponent>
                        <TextComponent textStyle="lighted">{ticket.owner.specialities[0].toUpperCase()}</TextComponent>
                    </TextContainer>
                </TextContainer>
            </DescriptionInBorder>
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
    </div>)
}

export default TicketDescr;