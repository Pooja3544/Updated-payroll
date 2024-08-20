import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeSetting.css';
import { IoReturnDownBack } from "react-icons/io5";

const EmployeeSetting = () => {
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showPasswordSuccess, setShowPasswordSuccess] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState('John Doe'); // Default name
  const [profileImage, setProfileImage] = useState('path/to/default/image.jpg'); // Default image
  const [showEditProfile, setShowEditProfile] = useState(false);
  const navigate = useNavigate();

  const handleToggleEditProfile = () => {
    setShowEditProfile(!showEditProfile);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Create a URL for the uploaded image
    }
  };

  const handleSaveProfile = () => {
    // Logic to save the profile can go here
    console.log('Profile saved:', { name, profileImage });
    navigate('/myprofile'); // Navigate to My Profile page after saving
  };

  const handlePrivacySettings = () => {
    console.log('Privacy settings clicked');
  };

  const handleShowHistory = () => {
    console.log('Show history clicked');
    const historyItems = ['History item 1', 'History item 2', 'History item 3'];
    setHistory(historyItems);
    setFilteredHistory(historyItems);
    setShowHistory(true);
  };

  const handleDeleteHistory = () => {
    console.log('Delete history clicked');
    setHistory([]);
    setFilteredHistory([]);
    setShowHistory(false);
  };

  const handleToggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
    setShowPasswordSuccess(false);
  };

  const handleChangePassword = () => {
    console.log('Change password clicked');
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowChangePassword(false);
    setShowPasswordSuccess(true);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleBack = () => {
    navigate(0);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === '') {
      setFilteredHistory(history);
    } else {
      const filtered = history.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredHistory(filtered);
    }
  };

  return (
    <div className="settings-box">
      <div className="settings-container">
        <div className="settings-content">
          {/* Edit Profile Section */}
          <div className="half-width">
            <h3>Edit Profile</h3>
            <button onClick={handleToggleEditProfile}>
              {showEditProfile ? 'Hide Edit Profile' : 'Edit Profile'}
            </button>
            {showEditProfile && (
              <div className="edit-profile-section">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleChangeName}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className='ddk'>
                <button className='dds' onClick={handleSaveProfile}>Save Profile</button>
                </div>
              </div>
            )}
          </div>

          {/* History Section */}
          {showHistory && (
            <div className="half-width">
              <div className="history-section">
                <h3>History:</h3>
                <input
                  type="text"
                  placeholder="Search history..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="search-bar"
                />
                <ul>
                  {filteredHistory.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Change Password Section */}
          <div className="half-width">
            <button onClick={handleToggleChangePassword}>Change Password</button>
          </div>
          {showChangePassword && (
            <div className="half-width">
              <div className="password-section">
                <input
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={handleCurrentPasswordChange}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <button onClick={handleChangePassword}>Save Password</button>
                {showPasswordSuccess && (
                  <div className="success-message">Password updated successfully!</div>
                )}
              </div>
            </div>
          )}
        </div>
        
          <button className="bk-button" onClick={handleBack}>Back</button>
        
      </div>
    </div>
  );
};

export default EmployeeSetting;