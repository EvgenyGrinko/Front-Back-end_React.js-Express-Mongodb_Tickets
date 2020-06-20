import React, {useState, useEffect} from 'react';
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import TicketInfo from "./TicketInfo";
import {TicketsProvider} from "./context.js";

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedItemID, setSelectedItemID] = useState();

  // function callAPI() {
  //   const url = "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"; 
  //   fetch(url)
  //       .then(res => res.json())
  //       .then(res => setApiResponse(res));
  // }

  // useEffect(() => {
  //   callAPI();
  // }, []);

  function callAPI() {
    const url = "/tickets";
      fetch(url)
          .then(res => res.json())
          .then(res =>  setApiResponse(res))
          .catch(err => console.log(err.message));
  }

  useEffect(() => {
    callAPI();
  }, []);

  function getOwnerId(id){
    setSelectedItemID(id);
  }

  return (
    <div className="app">
      <header className = "header">
        <h2>Tickets</h2>       
      </header>

      <TicketsProvider value = {apiResponse}>
        <SearchBar />
        <SideBar getSelectedOwnerId = {getOwnerId}/>
        <TicketInfo renderId = {selectedItemID}/> 
      </TicketsProvider>
    </div>
  );
}

export default App;
