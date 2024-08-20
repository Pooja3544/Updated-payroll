import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Tickets.css';
import { IoReturnDownBack } from "react-icons/io5";
import { TicketContext } from '../contexts/TicketContext'; // Import TicketContext

const Ticket = () => {
    const { tickets } = useContext(TicketContext); // Access tickets from context
    const ticketsContainerRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigate

    const scrollToTop = () => {
        if (ticketsContainerRef.current) {
            ticketsContainerRef.current.scrollTop = 0;
        }
    };

    const handleBackClick = () => {
        navigate(0); // Navigate to the previous page
    };

    return (
        <div className="my-tickets">
            <h1>My Tickets</h1>
            <p className='sds'>Total Tickets: {tickets.length}</p>
            <div className="tickets-container" ref={ticketsContainerRef}>
                {tickets.map((ticket) => (
                    <div className="ticket-card" key={ticket.id}>
                        <p><strong>ID:</strong> {ticket.id}</p>
                        <p><strong>Support Team:</strong> {ticket.supportTeam}</p>
                        <p><strong>Reason:</strong> {ticket.reason}</p>
                        <p><strong>Priority:</strong> {ticket.priority}</p>
                        <p><strong>Description:</strong> {ticket.description}</p>
                        <p>
                            <strong>Attachment:</strong>{' '}
                            {ticket.attachment && (
                                <a href={`path/to/attachments/${ticket.attachment}`} download>
                                    {ticket.attachment}
                                </a>
                            )}
                        </p>
                    </div>
                ))}
            </div>
            <button className="ba-button" onClick={handleBackClick}>Back</button>
        </div>
    );
};

export default Ticket;
