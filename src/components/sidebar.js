import React, { useState } from 'react';
import './sidebar.css'; 

const SideBar = ({ onButtonClick }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className={`sidebar ${isDropdownVisible ? 'show-dropdown' : ''}`}>
      <div 
        className="vertical-bar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src="https://img.icons8.com/?size=100&id=7761&format=png&color=FFFFFF" alt="Collaboration Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=99363&format=png&color=FFFFFF" alt="Conference Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=47849&format=png&color=FFFFFF" alt="Leave House Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=50897&format=png&color=FFFFFF" alt="Checked User Male Icon" className="vertical-bar-icon" />
      </div>
      <div 
        className="dropdown-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="button4" onClick={() => onButtonClick('addEmployee')}>ADD EMPLOYEE</button>
        <button className="button5" onClick={() => onButtonClick('viewLeaveRequest')}>LEAVE REQUESTS</button>
        <button className="button6" onClick={() => onButtonClick('tickets')}>TICKETS</button>
        <button className="button7" onClick={() => onButtonClick('AttendanceView')}>EMP ATTENDANCE</button>
      </div>
    </div>
  );
};

export default SideBar;
