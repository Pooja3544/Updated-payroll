import React, { useState } from 'react';
import './admin.css';
import NavBar from './Navbar';
import SideBar from './sidebar';
import AddEmployee from './addEmployee'; 
import SalaryReport from './SalaryReport.js'; 
import LeaveRequests from './LeaveRequests.js'; 
import ImageSlider from './ImageSlider.js';
import AdminProfile from './AdminProfile/Adminprofile.js';
import AdminResignation from './AdminProfile/AdminResignation.js';
import AdminSettings from './AdminProfile/AdminSettings.js';
import Adminhelp from './AdminProfile/Adminhelp.js';
import Adminlogout from './AdminProfile/Adminlogout.js';
import InterviewScheduling from './Recruitment/InterviewScheduling.js';
import ApplicantTracking from './Recruitment/ApplicantTracking.js';
import Employeebyproject from './Employee Directory/Employeebyproject.js';
import Projectdetails from './Employee Directory/Projectdetails.js';
import EmployeeReport from './Employee Directory/EmployeeReport.js';
import TeamLead from './Employee Directory/Teamlead.js';
import MemberDetails from './Employee Directory/MemberDetails.js';
import TaskDetails from './Employee Directory/TaskDetails.js';
import TeamMembers from './Employee Directory/TeamMembers.js'; // Import TeamMembers
import Tickets from './Ticktes.js';
import AttendanceView from './AttendanceView.js';


const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null); // Add state for selected team

  const handleButtonClick = (componentName, team = null) => {
    setSelectedComponent(componentName);
    if (team) {
      setSelectedTeam(team); // Set selected team
    }
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
    setSelectedComponent('projectdetails');
  };

  const handleMemberSelect = (memberId) => {
    setSelectedMemberId(memberId);
    setSelectedComponent('memberdetails');
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setSelectedComponent('taskdetails');
  };
  const employees = [
    {
        company: 'Sq',
        name: 'Kamal',
        id: 1,
        clockIn: '2024-08-18T08:00:00',
        clockOut: '2024-08-18T18:00:00'
    },
    {
      company: 'Sq',
      name: 'Naveed',
      id: 2,
      clockIn: '2024-08-18T08:00:00',
      clockOut: '2024-08-18T18:00:00'
  },
  {
    company: 'TechCorp',
    name: 'Mj',
    id: 3,
    clockIn: '2024-08-18T08:00:00',
    clockOut: '2024-08-18T18:00:00'
},
{
  company: 'Inv',
  name: 'Mj',
  id: 4,
  clockIn: '2024-08-18T08:00:00',
  clockOut: '2024-08-18T18:00:00'
},
{
  company: 'Inv',
  name: 'Mj',
  id: 7,
  clockIn: '2024-08-18T08:00:00',
  clockOut: '2024-08-18T15:00:00'
},
{
  company: 'Sq',
  name: 'Mj',
  id: 6,
  clockIn: '2024-08-18T08:00:00',
  clockOut: '2024-08-18T18:00:00'
},
{
  company: 'Inv',
  name: 'Mj',
  id: 7,
  clockIn: '2024-08-18T08:00:00',
  clockOut: '2024-08-18T16:00:00'
},
{
  company: 'Inv',
  name: 'Mj',
  id: 7,
  clockIn: '2024-08-18T08:00:00',
  clockOut: '2024-08-18T17:00:00'
}
]

  return (
    <main>
      <NavBar onButtonClick={handleButtonClick} />
      <ImageSlider />
      <div className="home-page">
        <SideBar onButtonClick={handleButtonClick} />
        <div className="content">
          <div className={`component ${selectedComponent === 'addEmployee' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'addEmployee' && <AddEmployee />}
          </div>
          <div className={`component ${selectedComponent === 'viewLeaveRequest' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'viewLeaveRequest' && <LeaveRequests />}
          </div>
          <div className={`component ${selectedComponent === 'salaryReports' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'salaryReports' && <SalaryReport />}
          </div>
          <div className={`component ${selectedComponent === 'adminprofile' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminprofile' && <AdminProfile />}
          </div>
          <div className={`component ${selectedComponent === 'adminresignation' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminresignation' && <AdminResignation />}
          </div>
          <div className={`component ${selectedComponent === 'adminsettings' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminsettings' && <AdminSettings />}
          </div>
          <div className={`component ${selectedComponent === 'adminhelp' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminhelp' && <Adminhelp />}
          </div>
          <div className={`component ${selectedComponent === 'adminlogout' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminlogout' && <Adminlogout />}
          </div>
          <div className={`component ${selectedComponent === 'interviewscheduling' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'interviewscheduling' && <InterviewScheduling />}
          </div>
          <div className={`component ${selectedComponent === 'applicanttracking' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'applicanttracking' && <ApplicantTracking />}
          </div>
          <div className={`component ${selectedComponent === 'employeebyproject' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'employeebyproject' && <Employeebyproject onProjectSelect={handleProjectSelect} />}
          </div>
          <div className={`component ${selectedComponent === 'projectdetails' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'projectdetails' && <Projectdetails projectId={selectedProjectId} onMemberSelect={handleMemberSelect} />}
          </div>
          <div className={`component ${selectedComponent === 'memberdetails' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'memberdetails' && <MemberDetails memberId={selectedMemberId} />}
          </div>
          <div className={`component ${selectedComponent === 'employeereport' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'employeereport' && <EmployeeReport onEmployeeClick={handleEmployeeClick} />}
          </div>
          <div className={`component ${selectedComponent === 'teamlead' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'teamlead' && <TeamLead onTeamClick={handleButtonClick} />}
          </div>
          <div className={`component ${selectedComponent === 'taskdetails' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'taskdetails' && <TaskDetails employee={selectedEmployee} />}
          </div>
          <div className={`component ${selectedComponent === 'teammembers' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'teammembers' && <TeamMembers team={selectedTeam} />}
          </div>
          <div className={`component ${selectedComponent === 'tickets' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'tickets' && <Tickets team={selectedTeam} />}
          </div>
          <div className={`component ${selectedComponent === 'AttendanceView' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'AttendanceView' && <AttendanceView team={selectedTeam} employees={employees} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
