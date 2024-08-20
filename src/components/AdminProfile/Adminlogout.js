import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Adminlogout.css';

const AdminLogout = () => {
    const [logoutSuccess, setLogoutSuccess] = useState(false);
    const navigate = useNavigate();

    const handleConfirmLogout = () => {
        console.log('Logging out...'); // Placeholder for actual logout logic
        setLogoutSuccess(true);
        setTimeout(() => {
            navigate('/'); // Redirect to home page after a delay
        }, 2000); // 2-second delay before redirecting
    };

    const handleCancel = () => {
        navigate(0); // Redirect to home page immediately
    };

    return (
        <div 
            className="admin-logout-container">
            <div className="admin-logout-content">
                <h2 className='admin-logout-title'>Confirm Logout</h2>
                <p className="admin-logout-message">Are you sure you want to logout?</p>
                <div className="admin-button-container">
                    <button className="admin-confirm-button" onClick={handleConfirmLogout}>
                        Logout
                    </button>
                    <button className="admin-cancel-button" onClick={handleCancel}>
                    Cancel  
                    </button>
                </div>
                {logoutSuccess && <p className="admin-logout-success">Logout successful!</p>}
            </div>
        </div>
    );
};

export default AdminLogout;
