import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Teamlead.css';

const TeamLead = ({ onTeamClick }) => {
  const [teamData, setTeamData] = useState([
    {
      teamLeader: "Kamal",
      age: 31,
      qualification: "Computer Science",
      profileImage: "/assets/profile.png",
      teamMembers: [
        { id: 1, name: "Naveed", age: 22, qualification: "Computer Science", profileImage: "/my.png" },
        { id: 2, name: "Sharath", age: 23, qualification: "MCA", profileImage: "/my.png" },
        { id: 3, name: "Shahbaz", age: 24, qualification: "Mechanical", profileImage: "/my.png" },
        { id: 4, name: "Tarun", age: 25, qualification: "Computer", profileImage: "/my.png" },
        { id: 5, name: "Kusuma", age: 26, qualification: "Computer Science", profileImage: "/my.png" },
        { id: 6, name: "Banuprakash", age: 27, qualification: "Computer Science", profileImage: "/my.png" },
        { id: 7, name: "Jagadeesh", age: 28, qualification: "Computer Science", profileImage:"/my.png" },
        { id: 8, name: "Nanda", age: 29, qualification: "Computer Science", profileImage: "/my.png" },
      ],
    },
    // Other initial team leaders...
  ]);

  const [newLeader, setNewLeader] = useState({
    teamLeader: '',
    age: '',
    qualification: '',
    profileImage: 'my.png',
    teamMembers: [],
  });

  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const teamListRef = useRef(null);

  const handleTeamLeaderClick = (team) => {
    onTeamClick('teammembers', team);
  };

  const scrollToTop = () => {
    if (teamListRef.current) {
      teamListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    navigate(0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeader((prevLeader) => ({
      ...prevLeader,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewLeader((prevLeader) => ({
        ...prevLeader,
        profileImage: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddTeamLeader = (e) => {
    e.preventDefault();
    setTeamData((prevData) => [newLeader, ...prevData]);
    setNewLeader({
      teamLeader: '',
      age: '',
      qualification: '',
      profileImage: 'my.png',
      teamMembers: [],
    });
    setShowForm(false);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
    scrollToTop(); // Scroll to top when form is shown
  };

  return (
    <div className="team-container1">
      {showForm && (
        <form className="add-team-leader-form1" onSubmit={handleAddTeamLeader}>
          <h3>Add New Team Leader</h3>
          <input
            type="text"
            name="teamLeader"
            value={newLeader.teamLeader}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="age"
            value={newLeader.age}
            onChange={handleInputChange}
            placeholder="Age"
            required
          />
          <input
            type="text"
            name="qualification"
            value={newLeader.qualification}
            onChange={handleInputChange}
            placeholder="Qualification"
            required
          />
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <button type="submit">Add</button>
        </form>
      )}
      <h2 className='team-title'>Team Leaders</h2>
      <div ref={teamListRef} className="team-leaders-list1">
        {teamData.map((team, index) => (
          <div key={index} className="team-leader-box1" onClick={() => handleTeamLeaderClick(team)}>
            <img src={team.profileImage} className="profile-image1" alt="Team Leader" />
            <div className="team-leader-info1">
              <p>Name: {team.teamLeader}</p>
              <p>Age: {team.age}</p>
              <p>Qualification: {team.qualification}</p>
            </div>
          </div>
        ))}
      </div>
      
        <button className="add-button1" onClick={toggleFormVisibility}>
          {showForm ? 'Close Form' : 'Add Team Leader'}
        </button>
        <button className="back-button1" onClick={handleBack}>Back</button>
      
    </div>
  );
};

export default TeamLead;
