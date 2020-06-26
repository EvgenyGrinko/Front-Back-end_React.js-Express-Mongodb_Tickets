import React, {useState, useContext} from "react";
import styles from "./SearchBar.module.css";
import TicketsContext from "../context/context";

function SearchBar(props){
    const {apiResponse} = useContext(TicketsContext);
    const [searchInput, setSearchInput] = useState();
    const [itemsFromSearch] = useState(new Set());

    function handleClick(event){
        const input = event.target.value;
        const length = input.length;
        itemsFromSearch.clear();
        setSearchInput(input);
        apiResponse.forEach(item => {
            if (item.owner.firstName.slice(0, length) === input || 
                item.owner.lastName.slice(0, length) === input ||
                item.owner.firstName.slice(0, length).toLowerCase() === input || 
                item.owner.lastName.slice(0, length).toLowerCase() === input ||
                item.owner.firstName.slice(0, length).toUpperCase() === input || 
                item.owner.lastName.slice(0, length).toUpperCase() === input) {
                itemsFromSearch.add(item.ticketId); 
            }
        })

        if(itemsFromSearch.size !== 0) props.setItemsFound(itemsFromSearch);
    }
    return (
        <div className={styles.searchbar}>
            <input className={styles.searchInput} type="text" value={searchInput} onChange={handleClick}></input>
        </div>
    )
}

export default SearchBar;