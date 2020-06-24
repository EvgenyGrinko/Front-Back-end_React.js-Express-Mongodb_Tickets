import React, {useState, useEffect} from 'react';
import SearchBar from "./SearchBar/SearchBar";
import SideBar from "./Sidebar/SideBar";
import TicketInfo from "./TicketInfo/TicketInfo";
import {TicketsProvider} from "./context/context.js";

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState();

  function callAPI() {
    const url = "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"; 
    fetch(url)
        .then(res => res.json())
        .then(res => setApiResponse(res));
  }

  useEffect(() => {
    callAPI();
  }, []);

  // function callAPI() {
  //   const url = "/tickets";
  //     fetch(url)
  //         .then(res => res.json())
  //         .then(res =>  setApiResponse(res))
  //         .catch(err => console.log(err.message));
  // }

  // useEffect(() => {
  //   callAPI();
  // }, []);

  function setItemSelected(id){
    setSelectedItemId(id);
  }

  return (
    <div className="app">
      <header className = "header">
        <h2>Tickets</h2>       
      </header>

      <TicketsProvider value = {{apiResponse, selectedItemId, setItemSelected}}>
        <SearchBar />
        <SideBar />
        <TicketInfo /> 
      </TicketsProvider>
    </div>
  );
}

export default App;
