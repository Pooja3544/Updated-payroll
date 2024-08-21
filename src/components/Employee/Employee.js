import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Employee.css';
import EmployeeNavBar from '../Employee/EmployeeNavbar';
import Employeesidebar from './Employeesidebar';
import LeaveApplication from './LeaveApplication';
import SalaryReport from '../SalaryReport';
import ImageSlider from '../ImageSlider';
import MyProfile from './Myprofile';
import EmployeeResignation from './EmployeeResignation'; // Ensure correct import
import EmployeeSetting from './EmployeeSetting';
import Employeehelp from './Employeehelp';
import Employeelogout from './Employeelogout';
import RaiseTicket from './Employee Tickets/Raiseticket';
import Employeeclock from './Employeeclock';
import HolidayList from '../Holiday';

const Employee = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [tickets, setTickets] = useState([]);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const handleHomeClick = () => {
    setSelectedComponent(null); // Reset to home state
  };

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <main>
      <EmployeeNavBar onButtonClick={handleButtonClick} onHomeClick={handleHomeClick} />
      <ImageSlider />
      <div className="employee-page">
        <Employeesidebar onButtonClick={handleButtonClick} />
        <div className="content">
          <Routes>
            <Route path="/leave-application" element={<LeaveApplication />} />
            <Route path="/salary-reports" element={<SalaryReport />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/employeeresignation" element={<EmployeeResignation />} />
            <Route path="/employeesetting" element={<EmployeeSetting />} />
            <Route path="/employeehelp" element={<Employeehelp />} />
            <Route path="/employeelogout" element={<Employeelogout />} />
            <Route path="/raiseticket" element={<RaiseTicket addTicket={addTicket} />} />
            <Route path="/clockin" element={<Employeeclock tickets={tickets} />} />
            <Route path="/Holiday" element={<HolidayList tickets={tickets} />} />

            <Route path="/" element={
              <div>
                <div className={`component ${selectedComponent === 'leave' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'leave' && <LeaveApplication />}
                </div>
                <div className={`component ${selectedComponent === 'salaryReports' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'salaryReports' && <SalaryReport />}
                </div>


                <div className={`component ${selectedComponent === 'Holiday' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'Holiday' && <HolidayList />}
                </div>


                <div className={`component ${selectedComponent === 'myProfile' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'myProfile' && <MyProfile />}
                </div>
                <div className={`component ${selectedComponent === 'employeeresignation' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeeresignation' && <EmployeeResignation />}
                </div>
                <div className={`component ${selectedComponent === 'employeesetting' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeesetting' && <EmployeeSetting />}
                </div>
                <div className={`component ${selectedComponent === 'employeehelp' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeehelp' && <Employeehelp />}
                </div>
                <div className={`component ${selectedComponent === 'employeelogout' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeelogout' && <Employeelogout />}
                </div>
                <div className={`component ${selectedComponent === 'raiseticket' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'raiseticket' && <RaiseTicket addTicket={addTicket} />}
                </div>
                <div className={`component ${selectedComponent === 'clockin' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'clockin' && <Employeeclock tickets={tickets} />}
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Employee;
