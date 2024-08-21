import React from 'react';
import axios from 'axios';
import { useLeave } from '../contexts/LeaveContext.js';
import './LeaveRequests.css';

const AdminDashboard = () => {
  const { leaveRequests, updateLeaveRequestStatus } = useLeave();

  const handleAccept = async (index) => {
    const updatedRequest = { ...leaveRequests[index], status: 'Accepted' };
    updateLeaveRequestStatus(index, 'Accepted');
    await handleLeaveRequestUpdate(updatedRequest, 'Accepted');
  };

  const handleReject = async (index) => {
    const updatedRequest = { ...leaveRequests[index], status: 'Rejected' };
    updateLeaveRequestStatus(index, 'Rejected');
    await handleLeaveRequestUpdate(updatedRequest, 'Rejected');
  };

  const handleLeaveRequestUpdate = async (leaveRequest, status) => {
    // Send a request to the backend to send an email
    try {
      await axios.post('http://localhost:5000/update-leave-status', {
        email: 'pooja.vm9671@gmail.com', // Replace with the manager's email
        leaveType: leaveRequest.leaveType,
        leaveFromDate: leaveRequest.leaveFromDate,
        leaveToDate: leaveRequest.leaveToDate,
        status: status,
      });
      alert(`Leave request has been ${status} and the manager has been notified.`);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error updating leave request. Please try again later.');
    }
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
