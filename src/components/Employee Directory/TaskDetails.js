import React from 'react';
import './TaskDetails.css';
import { useNavigate, useLocation } from 'react-router-dom';
const TaskDetails = ({ employee }) => {
    const navigate = useNavigate();
    if (!employee) {
        return <div>No employee selected.</div>;
    }
    const handleBack = () => {
        navigate(0); // Navigate back to the previous page
    };
    return (
        <div className="task-details-container">
            <h2 className='h12'>Task Details for {employee.name}</h2>
            <ul>
                {employee.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <button className="bn-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default TaskDetails;
