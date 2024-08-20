import React, { useState } from 'react';
import './addEmployee.css'; 

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Employee Added:', { name, email, position });
    
    setName('');
    setEmail('');
    setPosition('');
  };

  return (
    <div className="employee-form-container">
      <h1 className="employee-form-title">Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="employee-form-group">
          <input
            type="text"
            id="name"
            className="employee-input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className="employee-input-label">Name</label>
        </div>
        <div className="employee-form-group">
          <input
            type="email"
            id="email"
            className="employee-input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className="employee-input-label">Email</label>
        </div>
        <div className="employee-form-group">
          <input
            type="text"
            id="position"
            className="employee-input-field"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <label htmlFor="position" className="employee-input-label">Position</label>
        </div>
        <button type="submit" className="employee-submit-button">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
