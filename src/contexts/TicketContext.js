import React, { createContext, useState } from 'react';

// Create the context
export const TicketContext = createContext();

// Create a provider component
export const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState([]);

    // Function to add a ticket
    const addTicket = (ticket) => {
        setTickets([...tickets, ticket]);
    };

    return (
        <TicketContext.Provider value={{ tickets, addTicket }}>
            {children}
        </TicketContext.Provider>
    );
};
