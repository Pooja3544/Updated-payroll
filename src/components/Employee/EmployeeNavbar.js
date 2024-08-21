import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Employee/EmployeeNavbar.css';
import { IoIosPersonAdd } from "react-icons/io";
import { RiArrowDropDownLine, RiLogoutCircleFill } from "react-icons/ri";
import { FaHandsHelping, FaPrescription } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import img1 from "../../assets/S.jpg"; // Your logo image
import img2 from "../../assets/profile.png"; // Your profile image
import homeButton from "../../assets/homeButton.png"; 

const EmployeeNavBar = ({ onButtonClick, onHomeClick }) => {
  const [dropdownVisible, setDropdownVisible] = useState({
    profile: false,
    ticket: false,
  });

  const dropdownRefs = {
    profile: useRef(null),
    ticket: useRef(null),
  };

  const toggleDropdown = (type) => {
    setDropdownVisible(prev => ({
      ...prev,
      [type]: !prev[type],
      ...Object.keys(dropdownVisible).reduce((acc, key) => {
        if (key !== type) acc[key] = false; // Close other dropdowns
        return acc;
      }, {}),
    }));
  };

  const handleOutsideClick = (event) => {
    Object.keys(dropdownRefs).forEach(key => {
      if (dropdownVisible[key] && dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
        setDropdownVisible(prev => ({ ...prev, [key]: false }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownVisible]);

  return (
    <nav className="employee-navbar">
      <div className="employee-navbar__logo-container">
        <img src={img1} alt="Logo" className='employee-navbar__logo' />
      </div>

      <div className="employee-navbar__home-button-container">
        <button className="employee-navbar__home-button" onClick={onHomeClick}>
          <img src={homeButton} alt="Home" className="employee-navbar__home-button-image" />
        </button>
      </div>

      <div className='employee-navbar__nav'>
        {/* Ticket Dropdown */}
        <div className="employee-navbar__ticket-icon" onClick={() => toggleDropdown('ticket')} ref={dropdownRefs.ticket}>
          <div className='employee-navbar__ticket-text'>
            <p className='employee-navbar__dropdown-label'>Raise Tickets</p>
            <RiArrowDropDownLine className='employee-navbar__dropdown-icon' />
          </div>
          {dropdownVisible.ticket && (
            <div className='employee-navbar__ticket-dropdown'>
              <div className="employee-navbar__ticket-menu">
                <button className="employee-navbar__ticket-item" onClick={() => onButtonClick('raiseticket')}>
                  Raise Ticket
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Clock In Button */}
        <div className="employee-navbar__clock-in" onClick={() => onButtonClick('clockin')}>
          <img src="https://img.icons8.com/?size=100&id=82767&format=png&color=FFFFFF" alt="Clock In" className='employee-navbar__clock-in-icon' />
        </div>

        {/* Profile Dropdown */}
        <div className="employee-navbar__profile-icon" onClick={() => toggleDropdown('profile')} ref={dropdownRefs.profile}>
          <img src={img2} alt="Profile" className="employee-navbar__profile-image" />
          {dropdownVisible.profile && (
            <div className="employee-navbar__profile-dropdown">
              <button className="employee-navbar__profile-item" onClick={() => onButtonClick('myProfile')}>
                <IoIosPersonAdd className='employee-navbar__icon' />
                My Profile
              </button>
              <button className="employee-navbar__profile-item" onClick={() => onButtonClick('employeeresignation')}>
                <FaPrescription className='employee-navbar__icon' />
                Resignation
              </button>
              <button className="employee-navbar__profile-item" onClick={() => onButtonClick('employeesetting')}>
                <IoSettings className='employee-navbar__icon' />
                Settings
              </button>
              <button className="employee-navbar__profile-item" onClick={() => onButtonClick('employeehelp')}>
                <FaHandsHelping className='employee-navbar__icon' />
                Help
              </button>
              <button className="employee-navbar__profile-item" onClick={() => onButtonClick('employeelogout')}>
                <RiLogoutCircleFill className='employee-navbar__icon' />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default EmployeeNavBar;
