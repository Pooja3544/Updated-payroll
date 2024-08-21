import React, { useState } from 'react';
import { useLeave } from '../../contexts/LeaveContext';
import './leave.css';
import axios from 'axios'; 

const LeaveApplication = () => {
  const { addLeaveRequest } = useLeave();
  const [formData, setFormData] = useState({
    leaveFromDate: '',
    leaveToDate: '',
    leaveType: '',
    reason: '',
    attachment: null,
  });

  const [leaveData, setLeaveData] = useState([]);
  const [remainingLeaves, setRemainingLeaves] = useState({
    sick: 10,
    casual: 10,
  });

  const totalLeaves = {
    sick: 10,
    casual: 10,
  };

  const [showMore, setShowMore] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const calculateLeaveDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24)) + 1;
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const leaveDays = calculateLeaveDays(formData.leaveFromDate, formData.leaveToDate);

    if (leaveDays <= 0) {
      alert("Invalid leave period");
      return;
    }

    addLeaveRequest({ ...formData, leaveDays });
    setLeaveData([...leaveData, { ...formData, leaveDays }]);

    // Update remaining leaves logic based on the number of days
    if (formData.leaveType === 'sick') {
      setRemainingLeaves((prevLeaves) => ({
        ...prevLeaves,
        sick: prevLeaves.sick - leaveDays,
      }));
    } else if (formData.leaveType === 'casual') {
      setRemainingLeaves((prevLeaves) => ({
        ...prevLeaves,
        casual: prevLeaves.casual - leaveDays,
      }));
    }
    try {
      // Send email to the manager
      await axios.post('http://localhost:5000/send-leave-request', {
        email: 'pooja.vm9671@gmail.com', // Replace with the actual manager's email
        leaveType: formData.leaveType,
        leaveFromDate: formData.leaveFromDate,
        leaveToDate: formData.leaveToDate,
        reason: formData.reason,
      });
      alert('Leave request submitted and email sent to the manager.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error submitting leave request. Please try again later.');
    }

    setFormData({
      leaveFromDate: '',
      leaveToDate: '',
      leaveType: '',
      reason: '',
      attachment: null,
    });
  };

  const handleBack = () => {
    // Handle the back button functionality here
    // For example, navigate back to the previous page or view
  };

  return (
    <div className="leave-application-admin">
      <div className="leave-form-container">
        <h1 className='Leave'>Leave Application</h1>
        <form className="leave-form" onSubmit={handleSubmit}>
          <label>
            Type of leave
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select leave type</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
            </select>
          </label>
          <label>
            Leave from date
            <input
              type="date"
              name="leaveFromDate"
              value={formData.leaveFromDate}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Leave to date
            <input
              type="date"
              name="leaveToDate"
              value={formData.leaveToDate}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Reason of leave
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Attach File
            <input type="file" onChange={handleFileChange} />
          </label>
          <div>
            <button className='button-apply' type="submit">Apply Leave</button>
            {/* <button className='button-back' type="button" onClick={handleBack}>Back</button> */}
          </div>

        </form>
      </div>
      <div className="leave-info-container">
        <div className="remaining-leaves">
          <h1  className='Leave'>Your Overview</h1>
          <div className="leave-overview">
            <div className="leave-entitlement">
              <h3  className='Leave'>Total Leaves</h3>
              <p className="leave-days">{totalLeaves.sick + totalLeaves.casual}</p>
            </div>
            <div className="leave-entitlement">
              <h3  className='Leave'>Remaining Leaves</h3>
              <p className="leave-days">{remainingLeaves.sick + remainingLeaves.casual}</p>
            </div>
          </div>
          <button className="view-more-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
        {showMore && (
          <div className="leave-availability">
            <h1 className='Leave'>Leave Availability</h1>
            <div className="leave-types">
              <div className="leave-type">
                <h3>Sick Leaves</h3>
                <p className="leave-total">Total: {totalLeaves.sick}</p>
                <p className="leave-remaining">Remaining: {remainingLeaves.sick}</p>
              </div>
              <div className="leave-type">
                <h3>Casual Leaves</h3>
                <p className="leave-total">Total: {totalLeaves.casual}</p>
                <p className="leave-remaining">Remaining: {remainingLeaves.casual}</p>
              </div>
            </div>
          </div>
        )}
        <div className="leave-info">
          <h1 className='Leave'>Leave Information</h1>
          <table>
            <thead>
              <tr>
                <th>Type of leave</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.leaveType}</td>
                  <td>{leave.leaveFromDate}</td>
                  <td>{leave.leaveToDate}</td>
                  <td>{leave.reason}</td>
                  <td>Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplication;
