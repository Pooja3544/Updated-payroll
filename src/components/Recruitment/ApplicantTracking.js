import React, { useState } from 'react';
import './ApplicantTracking.css';

const ApplicantTracking = () => {
    const [applicants, setApplicants] = useState([
        { id: 1, name: 'Alice', status: 'Interview Scheduled' },
        { id: 2, name: 'Bob', status: 'Application Received' },
    ]);

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="applicant-tracking-container">
            <h2>Applicant Tracking</h2>
            <ul className="applicant-list">
                {applicants.map((applicant) => (
                    <li key={applicant.id} className="applicant-item">
                        <h3>{applicant.name}</h3>
                        <p>Status: {applicant.status}</p>
                    </li>
                ))}
            </ul>
            <div className="bgk-button-container">
                <button onClick={handleBack} className="bpk-button">Back</button>
            </div>
        </div>
    );
};

export default ApplicantTracking;