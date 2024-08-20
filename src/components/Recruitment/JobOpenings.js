import React from 'react';
import './JobOpenings.css';

const JobOpenings = () => {
    const jobOpenings = [
        { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.', skills: 'Skills: JavaScript, React, Node.js', qualifications: 'Qualifications: Bachelor’s degree in Computer Science or related field' },
        { id: 2, title: 'Product Manager', description: 'Lead product development and strategy.', skills: 'Skills: Product Management, Strategy Development', qualifications: 'Qualifications: MBA or equivalent experience' },
    ];

    return (
        <div className="job-openings-container">
            <h2 className='sd'>Job Openings</h2>
            <div className="scrollable-content">
                {jobOpenings.map(job => (
                    <div key={job.id} className="job-item">
                        <div className="job-content">
                            <h3>{job.title}</h3>
                            <p>{job.description}</p>
                            <p>{job.skills}</p>
                            <p>{job.qualifications}</p>
                        </div>
                    </div>
                ))}
                <div className="terms">
                    <h3>Terms and Conditions</h3>
                    <p>Please read and accept the terms and conditions before applying.</p>
                </div>
            </div>
            <div className="ck-button">
                <button onClick={() => window.history.back()}>Back</button>
            </div>
        </div>
    );
};

export default JobOpenings;