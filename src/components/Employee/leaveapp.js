import React, { useState } from 'react';
import LeaveApplication from './LeaveApplication';
import LeaveRequests from '../LeaveRequests'; 

import './leaveapp.css';

const LeaveApp = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  const addLeaveRequest = (newRequest) => {
    setLeaveRequests([...leaveRequests, newRequest]);
  };

  const updateLeaveStatus = (id, status) => {
    setLeaveRequests(leaveRequests.map(request => 
      request.id === id ? { ...request, status } : request
    ));
  };

  return (
    <div className="leave-app">
      <LeaveApplication addLeaveRequest={addLeaveRequest} />
      <LeaveRequests leaveRequests={leaveRequests} updateLeaveStatus={updateLeaveStatus} />
    </div>
  );
};

export default LeaveApp;
