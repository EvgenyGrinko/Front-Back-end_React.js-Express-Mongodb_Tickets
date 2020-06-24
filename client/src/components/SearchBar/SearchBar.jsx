import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar(){
    return (
        <div className={styles.searchbar}>
            <input className={styles.searchInput} type="text"></input>
        </div>
    )
}

export default SearchBar;