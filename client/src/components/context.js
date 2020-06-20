import React from "react";

const TicketsContext = React.createContext([]);
TicketsContext.displayName = "TicketsDB";

export const TicketsProvider = TicketsContext.Provider;
export default TicketsContext;

