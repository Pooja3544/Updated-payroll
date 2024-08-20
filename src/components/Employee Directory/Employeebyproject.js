import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Employeebyproject.css';

const Employeebyproject = ({ onProjectSelect }) => {
    const navigate = useNavigate();
    const projects = [
        { id: 1, name: 'Payroll Projects' },
        { id: 2, name: 'XML Project' },
    ];
    const handleBackClick = () => {
        navigate(0);
    };

    return (
        <div className="employee-project-container">
            <h2 className='employee-project-title'>Projects</h2>
            <ul className="employee-project-list">
                {projects.map(project => (
                    <li key={project.id} className="employee-project-item" onClick={() => onProjectSelect(project.id)}>
                        {project.name}
                    </li>
                ))}
            </ul>
            <div className="employee-project-button-wrapper">
                <button className="employee-project-back-button" onClick={handleBackClick}>Back</button>
            </div>
        </div>
    );
};

export default Employeebyproject;
