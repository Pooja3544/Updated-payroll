import React from 'react';
import { useLeave } from '../contexts/LeaveContext.js';
import './LeaveRequests.css';

const AdminDashboard = () => {
  const { leaveRequests, updateLeaveRequestStatus } = useLeave();

  const handleAccept = (index) => {
    updateLeaveRequestStatus(index, 'Accepted');
  };

  const handleReject = (index) => {
    updateLeaveRequestStatus(index, 'Rejected');
  };

  return (
    <div className="leave-requests-container">
      <h1 className="leave-requests-header">Leave Requests</h1>
      <table className="leave-requests-table">
        <thead>
          <tr>
            <th>Type of Leave</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.leaveType}</td>
              <td>{request.leaveFromDate}</td>
              <td>{request.leaveToDate}</td>
              <td>{request.reason}</td>
              <td>{request.status}</td>
              <td>
                <button
                  className="leave-requests-action-button leave-requests-accept-button"
                  onClick={() => handleAccept(index)}
                >
                  Accept
                </button>
                <button
                  className="leave-requests-action-button leave-requests-reject-button"
                  onClick={() => handleReject(index)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
