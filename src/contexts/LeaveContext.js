// src/contexts/LeaveContext.js
import React, { createContext, useState, useContext } from 'react';

const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  const addLeaveRequest = (request) => {
    setLeaveRequests((prevRequests) => [...prevRequests, { ...request, status: 'Pending' }]);
  };

  const updateLeaveRequestStatus = (index, status) => {
    setLeaveRequests((prevRequests) => {
      const updatedRequests = [...prevRequests];
      updatedRequests[index].status = status;
      return updatedRequests;
    });
  };

  return (
    <LeaveContext.Provider value={{ leaveRequests, addLeaveRequest, updateLeaveRequestStatus }}>
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeave = () => useContext(LeaveContext);
