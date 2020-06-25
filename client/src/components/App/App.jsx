import React, {useState, useEffect} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../Sidebar/SideBar";
import TicketInfo from "../TicketInfo/TicketInfo";
import {TicketsProvider} from "../context/context.js";
import styles from "./App.module.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NoTickets from '../NoTickets/NoTickets';
import TicketDescr from '../TicketDescr/TicketDescr';

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState();

  async function callAPI() {
    try{
      const url = "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"; 
      const response = await fetch(url);
      const data = await response.json();
      setApiResponse(data);
      setSelectedItemId(Number((window.location.pathname).slice(6)));
    }catch(err){console.log(err.message)}
  }

  // function callAPI() {
  //   const url = "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"; 
  //   fetch(url)
  //       .then(res => res.json())
  //       .then(res => setApiResponse(res))
  //       .then(res => setSelectedItemId(Number((window.location.pathname).slice(6))));
  // }
  useEffect(() => {
    callAPI();
  }, []);
  // let location = useLocation();
  // console.log(location.pathname);

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
    <div className={styles.app}>
      <Router>
        <header className={styles.header}>
          <h2>Tickets</h2>       
        </header>

        <TicketsProvider value = {{apiResponse, selectedItemId, setItemSelected}}>
          <SearchBar />
          <SideBar />
          <TicketInfo>
            {(selectedItemId) ? <Route exact path = {"/item/"+selectedItemId} component={TicketDescr}/> : <Route path = "/" component={NoTickets}/>}
          </TicketInfo>
        </TicketsProvider>

      </Router>
    </div>
  );
}

export default App;
