import React from 'react';
import './Employeehelp.css'; // Updated the CSS file name to match the component name
import { useNavigate } from 'react-router-dom';

const Help = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(0); // Go back one step in history
    };

    return (
        <div className="help-container">
            <h1 className="help-title">Help Menu</h1>
            <p className="contact-label">Contact Information:</p>
            <div className="contact-section">
                <ul className="contact-list">
                    <li className="contact-item">Company Email: company@example.com</li>
                    <li className="contact-item">HR Email: hr@example.com</li>
                    <li className="contact-item">Manager Email: manager@example.com</li>
                    <li className="contact-item">Team Leader Email: teamleader@example.com</li>
                </ul>
            </div>
            
            <button className="back-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default Help;

