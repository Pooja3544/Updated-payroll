import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamMembers.css';

const TeamMembers = ({ team }) => {
  const [teamMembers, setTeamMembers] = useState(team.teamMembers || []);
  const [showForm, setShowForm] = useState(false);
  const [newMember, setNewMember] = useState({
    id: '',
    name: '',
    age: '',
    qualification: '',
    profileImage: '/default.png',
  });
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  if (!team) {
    return <div>No team selected.</div>;
  }

  const handleAddMember = (e) => {
    e.preventDefault();
    setTeamMembers((prevMembers) => [
      ...prevMembers,
      { ...newMember, id: prevMembers.length + 1 },
    ]);
    setNewMember({
      id: '',
      name: '',
      age: '',
      qualification: '',
      profileImage: '/default.png',
    });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleMemberClick = (id) => {
    setSelectedMember((prevSelected) => (prevSelected === id ? null : id));
  };

  const handleDeleteMember = (id) => {
    setTeamMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
    setSelectedMember(null);
  };

  const handleBack = () => {
    navigate(0);
  };

  return (
    <div className="team-members-container">
      <h2 className="team-title">{team.teamLeader}'s Team</h2>
      <div className="team-members-list">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-member-card"
            onClick={() => handleMemberClick(member.id)}
          >
            <img
              src={member.profileImage}
              className="member-profile-image"
            />
            <h3>{member.name}</h3>
            <p>Age: {member.age}</p>
            <p>Qualification: {member.qualification}</p>
            {selectedMember === member.id && (
              <button
                className="delete-button"
                onClick={() => handleDeleteMember(member.id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
      <button className="add-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Team Member'}
      </button>
      {showForm && (
        <form className="add-team-member-form" onSubmit={handleAddMember}>
          <h3>Add New Team Member</h3>
          <input
            type="text"
            name="name"
            value={newMember.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="age"
            value={newMember.age}
            onChange={handleInputChange}
            placeholder="Age"
            required
          />
          <input
            type="text"
            name="qualification"
            value={newMember.qualification}
            onChange={handleInputChange}
            placeholder="Qualification"
            required
          />
          <input
            type="text"
            name="profileImage"
            value={newMember.profileImage}
            onChange={handleInputChange}
            placeholder="Profile Image URL"
          />
          <button type="submit">Add Member</button>
        </form>
      )}
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default TeamMembers;
