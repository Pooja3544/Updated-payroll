import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./MemberDetails.css";

const MemberDetails = () => {
    const { memberId } = useParams(); // Get memberId from URL parameters
    const navigate = useNavigate(); // Use navigate for navigation

    // Example data (replace with actual data fetching logic)
    const memberData = {
        '1-0': { id: '1-0', name: 'Alice', age: 28, qualification: 'Computer Science', profileImage: "/my.png", address: 'Address 1' },
        '1-1': { id: '1-1', name: 'Bob', age: 30, qualification: 'Information Technology', profileImage: "/my.png", address: 'Address 2' },
        '1-2': { id: '1-2', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png", address: 'Address 3' },
        // Add more members as needed
    };

    const [editMode, setEditMode] = useState(false);
    const [memberDetails, setMemberDetails] = useState(null);

    useEffect(() => {
        // Fetch member details based on memberId
        setMemberDetails(memberData[memberId]);
    }, [memberId]);

    const handleBack = () => {
        navigate(0); // Navigate back to Team page
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setEditMode(false);
        // Here you would also update the actual memberData with the new values
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMemberDetails({
            ...memberDetails,
            [name]: value,
        });
    };

    if (!memberDetails) {
        return <div className="member-not-found">Member not found</div>; // Handle edge case where member ID does not exist
    }

    return (
        <div className="member-details-wrapper">
            <h2 className='member-details-title'>Member Details</h2>
            <div className="member-details-content">
                <img src={memberDetails.profileImage} alt={`${memberDetails.name}'s profile`} className="member-profile-picture" />
                <div className="member-info-container">
                    <p><strong>Name:</strong> {memberDetails.name}</p>
                    <p>
                        <strong>Age:</strong> 
                        {editMode ? (
                            <input
                                type="number"
                                name="age"
                                value={memberDetails.age}
                                onChange={handleChange}
                                className="member-input-field"
                            />
                        ) : (
                            memberDetails.age
                        )}
                    </p>
                    <p>
                        <strong>Qualification:</strong> 
                        {editMode ? (
                            <input
                                type="text"
                                name="qualification"
                                value={memberDetails.qualification}
                                onChange={handleChange}
                                className="member-input-field"
                            />
                        ) : (
                            memberDetails.qualification
                        )}
                    </p>
                    <p>
                        <strong>Address:</strong> 
                        {editMode ? (
                            <input
                                type="text"
                                name="address"
                                value={memberDetails.address}
                                onChange={handleChange}
                                className="member-input-field"
                            />
                        ) : (
                            memberDetails.address
                        )}
                    </p>
                </div>
            </div>
            <div className="member-button-container">
                {editMode ? (
                    <button className="member-save-btn" onClick={handleSave}>Save</button>
                ) : (
                    <button className="member-edit-btn" onClick={handleEdit}>Edit</button>
                )}
                <button className="member-back-btn" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
};

export default MemberDetails;
