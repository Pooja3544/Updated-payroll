import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InterviewScheduling.css';
import { GoSmiley } from "react-icons/go";

const InterviewScheduling = () => {
    const [interviews, setInterviews] = useState([
        { id: 1, applicant: 'Alice', date: '2024-08-20', time: '10:00 AM', email: 'sharathachar55@gmail.com', link: 'https://meet.google.com/your-meet-link' },
        { id: 2, applicant: 'Bob', date: '2024-08-21', time: '11:00 AM', email: 'sharathachar88@gmail.com', link: 'https://meet.google.com/your-meet-link' },
    ]);

    const navigate = useNavigate();
    const [editing, setEditing] = useState(null);
    const [loading, setLoading] = useState(false);

    const formatTimeTo12Hour = (time) => {
        let [hours, minutes] = time.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${period}`;
    };

    const formatTimeTo24Hour = (time) => {
        let [hours, minutesPeriod] = time.split(':');
        let [minutes, period] = minutesPeriod.split(' ');
        hours = period === 'PM' && hours !== '12' ? parseInt(hours, 10) + 12 : hours;
        hours = period === 'AM' && hours === '12' ? '00' : hours;
        return `${hours}:${minutes}`;
    };

    const sendEmailNotification = (applicant, date, time, email, link) => {
        setLoading(true);
        const emailBody = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h3>Interview Schedule </h3>
                <p>Dear ${applicant},</p>
                <p>We are pleased to inform you that your interview has been scheduled as follows:</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p>Please join the interview using the following Google Meet link:</p>
                <p><a href="${link}" target="_blank">Join Interview</a></p>
                <p>If you have any questions or need assistance, please contact us at support@gmail.com.</p>
                <p>For more information about our company, visit our social media pages:</p>
                <ul>
                    <li><a href="https://www.youtube.com/your-channel" target="_blank">YouTube</a></li>
                    <li><a href="https://www.instagram.com/your-profile" target="_blank">Instagram</a></li>
                </ul>
                <p style="text-align: center; margin-top: 20px;">All the best! 😊</p>
                <p>Best regards,</p>
                <p>HR Team<br>Sylicon Software
                   <br> Garuda BHive Work Space - 1st Floor,<br>
                    WJ88+69V BMTC Complex, Old Madiwala,<br>
                    Kuvempu Nagar, Stage 2, BTM Layout,<br>
                    Bengaluru, Karnataka 560068
                </p>
            </div>
        `;

        fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: email,
                subject: 'Sylicon Software',
                body: emailBody,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Email notification sent successfully');
            console.log('Email sent successfully:', data);
        })
        .catch((error) => {
            alert('Error sending email notification');
            console.error('Error:', error);
        })
        .finally(() => setLoading(false));
    };

    const handleEdit = (id) => {
        setEditing(id);
    };

    const handleSave = (id, newDate, newTime, newLink) => {
        const formattedTime = formatTimeTo24Hour(newTime);
        const displayTime = formatTimeTo12Hour(formattedTime);
        setInterviews(interviews.map(interview => 
            interview.id === id ? { ...interview, date: newDate, time: displayTime, link: newLink } : interview
        ));
        setEditing(null);
    };

    const handleBackClick = () => {
        navigate(0); // Navigate to the previous page
    };

    return (
        <div className="interview-scheduling-container">
            <h2 className='show'>Interview Scheduling</h2>
            <ul className="interview-list">
                {interviews.map((interview) => (
                    <li key={interview.id} className="interview-item">
                        {editing === interview.id ? (
                            <>
                                <h3>{interview.applicant}</h3>
                                <label>
                                    Date: 
                                    <input 
                                        type="date" 
                                        defaultValue={interview.date}
                                        onChange={(e) => interview.date = e.target.value}
                                    />
                                </label>
                                <label>
                                    Time: 
                                    <input 
                                        type="time" 
                                        defaultValue={formatTimeTo24Hour(interview.time)}
                                        onChange={(e) => interview.time = formatTimeTo12Hour(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Meeting Link: 
                                    <input 
                                        type="text" 
                                        defaultValue={interview.link}
                                        onChange={(e) => interview.link = e.target.value}
                                    />
                                </label>
                                <button className='sav' onClick={() => handleSave(interview.id, interview.date, interview.time, interview.link)}>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <h3>{interview.applicant}</h3>
                                <p className='name'>Date: {interview.date}</p>
                                <p className='name'>Time: {interview.time}</p>
                                <p className='name'>Meeting Link: <a href={interview.link} target="_blank" rel="noopener noreferrer">{interview.link}</a></p>
                                <div className="button-group">
                                    <button className="edit-btn" onClick={() => handleEdit(interview.id)}>
                                        Edit
                                    </button>
                                    <button className="send-email-btn" onClick={() => sendEmailNotification(interview.applicant, interview.date, interview.time, interview.email, interview.link)}>
                                        Send Email
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <div className="button-containern">
                <button className="back-btn" onClick={handleBackClick}>Back</button>
            </div>
        </div>
    );
};

export default InterviewScheduling;
