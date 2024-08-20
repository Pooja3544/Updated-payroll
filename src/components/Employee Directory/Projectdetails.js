import React, { useEffect, useState } from 'react';
import './Projectdetails.css';

const Projectdetails = ({ projectId, onBack }) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedMemberId, setSelectedMemberId] = useState(null);
    const [selectedMemberDetails, setSelectedMemberDetails] = useState(null);

    useEffect(() => {
        // Mock data for team members based on project ID
        const fetchTeamMembers = () => {
            const members = {
                1: [
                    { id: '1-0', role: 'Frontend Team', names: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eva', 'Frank', 'Grace'] },
                    { id: '1-1', role: 'Backend Team', names: ['Henry', 'Ivy'] },
                    { id: '1-2', role: 'Testing Team', names: ['Jack', 'Lily'] },
                    { id: '1-3', role: 'DevOps Team', names: ['Rudresh', 'Karthik'] },
                ],
                2: [
                    { id: '2-0', role: 'Support Team', names: ['Mia', 'Noah'] },
                    { id: '2-1', role: 'Testing Team', names: ['Oliver', 'Emma'] },
                ],
            };
            setTeamMembers(members[projectId] || []);
        };

        fetchTeamMembers();
    }, [projectId]);

    const handleMemberClick = (memberId) => {
        setSelectedMemberId(memberId);

        // Example data (replace with actual data fetching logic)
        const memberData = {
            '1-0': { id: '1-0', name: 'Alice', age: 28, qualification: 'Computer Science', profileImage: "/my.png", address: 'Address 1' },
            '1-1': { id: '1-1', name: 'Bob', age: 30, qualification: 'Information Technology', profileImage: "/my.png", address: 'Address 2' },
            '1-2': { id: '1-2', name: 'Charlie', age: 26, qualification: 'Computer Engineering', profileImage: "/my.png", address: 'Address 3' },
            // Add more members as needed
        };

        setSelectedMemberDetails(memberData[memberId]);
    };

    const handleBack = () => {
        onBack(); // Call the onBack callback
        setSelectedMemberId(null); // Clear selected member ID
        setSelectedMemberDetails(null); // Clear selected member details
    };

    return (
        <div className="project-details-wrapper">
            <h2 className="project-details-header">Project Team Members</h2>
            <div className="project-details-teams">
                {teamMembers.map((team, index) => (
                    <div key={index} className="project-team-box">
                        <h3>{team.role} ({team.names.length})</h3>
                        <ul>
                            {team.names.map((name, idx) => {
                                const memberId = `${projectId}-${idx}`; // Construct memberId
                                return (
                                    <li key={idx} onClick={() => handleMemberClick(memberId)}>
                                        {name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {selectedMemberDetails && (
                <div className="project-member-details">
                    <h2>Member Details</h2>
                    <div className="project-member-info">
                        <img src={selectedMemberDetails.profileImage} alt={`${selectedMemberDetails.name}'s profile`} className="project-profile-image" />
                        <div className="project-member-text">
                            <p><strong>Name:</strong> {selectedMemberDetails.name}</p>
                            <p><strong>Age:</strong> {selectedMemberDetails.age}</p>
                            <p><strong>Qualification:</strong> {selectedMemberDetails.qualification}</p>
                            <p><strong>Address:</strong> {selectedMemberDetails.address}</p>
                        </div>
                    </div>
                    <button className="project-back-button" onClick={handleBack}>Back</button>
                </div>
            )}
            {/* Ensuring the button is at the bottom */}
            <button className="project-back-button-bottom" onClick={handleBack}>Back</button>
        </div>
    );
};

export default Projectdetails;
