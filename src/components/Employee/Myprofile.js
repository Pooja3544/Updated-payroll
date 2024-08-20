import React, { useState } from 'react';
import './Myprofile.css';
import { useNavigate } from 'react-router-dom';
import img2 from "../../assets/profile.png"; 

function EmployeeProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState({
    fullName: 'John Doe',
    employeeId: '123456',
    emailId: 'john.doe@example.com',
    personalNumber: '9876543210',
    personalName: 'John Doe',
    bloodGroup: 'O+',
    nationality: 'American',
    state: 'California',
    permanentAddress: '1234 Elm Street, Springfield, CA',
    currentAddress: '5678 Oak Street, Springfield, CA',
    emergencyContact: {
      name: 'Jane Doe',
      mobileNumber: '1234567890',
      address: '1234 Elm Street, Springfield, CA',
      relation: 'Wife'
    },
    professionalBackground: {
      jobTitle: 'Software Engineer',
      companyName: 'Tech Company',
      educationQualification: 'B.Sc in Computer Science',
      certification: 'Certified Java Developer',
      skills: ['React', 'JavaScript', 'CSS'],
      socialMedia: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://www.twitter.com/johndoe'
      }
    }
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const renderInput = (label, value, name) => (
    <div className="inputGroup">
      <label>{label}</label>
      {isEditing ? (
        <input type="text" name={name} value={value} onChange={handleChange} />
      ) : (
        <p>{value}</p>
      )}
    </div>
  );

  const handleBack = () => {
    navigate(0);
  };

  return (
    <div className="profileContainer">
      <div className="profileContent">
        <div className="leftSection">
          <div className="profileSection">
            <h1 className='sectionHeader'>About Information</h1>
            {renderInput('Full Name:', employeeInfo.fullName, 'fullName')}
            {renderInput('Employee ID:', employeeInfo.employeeId, 'employeeId')}
            {renderInput('Email ID:', employeeInfo.emailId, 'emailId')}
          </div>
          <div className="profileSection">
            <h1 className='sectionHeader'>Personal Information</h1>
            {renderInput('Personal Number:', employeeInfo.personalNumber, 'personalNumber')}
            {renderInput('Personal Name:', employeeInfo.personalName, 'personalName')}
            {renderInput('Blood Group:', employeeInfo.bloodGroup, 'bloodGroup')}
            {renderInput('Nationality:', employeeInfo.nationality, 'nationality')}
            {renderInput('State:', employeeInfo.state, 'state')}
            {renderInput('Permanent Address:', employeeInfo.permanentAddress, 'permanentAddress')}
            {renderInput('Current Address:', employeeInfo.currentAddress, 'currentAddress')}
          </div>
          <div className="profileSection">
            <h1 className='sectionHeader'>Emergency Contact Details</h1>
            {renderInput('Contact Name:', employeeInfo.emergencyContact.name, 'emergencyContact.name')}
            {renderInput('Mobile Number:', employeeInfo.emergencyContact.mobileNumber, 'emergencyContact.mobileNumber')}
            {renderInput('Address:', employeeInfo.emergencyContact.address, 'emergencyContact.address')}
            {renderInput('Relation:', employeeInfo.emergencyContact.relation, 'emergencyContact.relation')}
          </div>
        </div>
        <div className="rightSection">
          <div className="profileImage">
            <img src={img2} alt="Profile" />
          </div>
          <div className="profileSection">
            <h1 className='sectionHeader'>Professional Background</h1>
            {renderInput('Job Title:', employeeInfo.professionalBackground.jobTitle, 'professionalBackground.jobTitle')}
            {renderInput('Company Name:', employeeInfo.professionalBackground.companyName, 'professionalBackground.companyName')}
            {renderInput('Education Qualification:', employeeInfo.professionalBackground.educationQualification, 'professionalBackground.educationQualification')}
            {renderInput('Certification:', employeeInfo.professionalBackground.certification, 'professionalBackground.certification')}
            {renderInput('Skills:', employeeInfo.professionalBackground.skills.join(', '), 'professionalBackground.skills')}
            <div className="socialMedia">
              <label>Social Media</label>
              <ul>
                <li>
                  <a href={employeeInfo.professionalBackground.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <a href={employeeInfo.professionalBackground.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
        <button className="backButton" onClick={handleBack}>Back</button>
      
    </div>
  );
}

export default EmployeeProfile;
