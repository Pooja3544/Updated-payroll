import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Employeelogout.css'; // Ensure the file name matches

const Logout = () => {
    const [isLogoutSuccessful, setIsLogoutSuccessful] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logging out...'); // Placeholder for actual logout logic
        setIsLogoutSuccessful(true);
        setTimeout(() => {
            navigate('/'); // Redirect to home page after a delay
        }, 2000); // 2-second delay before redirecting
    };

    const handleCancel = () => {
        navigate(0); // Redirect to home page immediately
    };

    return (
        <div className="logout-wrapper">
            <div className="logout-box">
                <h1 className='logout-title'>Confirm Logout</h1>
                <p className='logout-message'>Are you sure you want to logout?</p>
                <div className="button-group">
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                    <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
                {isLogoutSuccessful && <p className="logout-status">Logout successful!</p>}
            </div>
        </div>
    );
};

export default Logout;

