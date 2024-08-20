import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './AttendanceView.css';

const AttendanceView = ({ employees }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        setFilteredEmployees(employees);
    }, [employees]);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredEmployees(
            employees.filter(emp =>
                emp.name.toLowerCase().includes(value) ||
                emp.id.toString().includes(value)||
                emp.company.toLowerCase().includes(value)||
                getStatus(calculateTotalHours(emp.clockIn, emp.clockOut)).toLocaleLowerCase().includes(value)
            )
        );
    };

    const calculateTotalHours = (clockIn, clockOut) => {
        const diff = new Date(clockOut) - new Date(clockIn);
        const hours = diff / 1000 / 60 / 60;
        return hours.toFixed(2);
    };

    const getStatus = (totalHours) => {
        return totalHours >= 9 ? 'Present' : 'Absent';
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Employee Attendance', 20, 10);
        doc.autoTable({
            head: [['Company', 'Name', 'ID', 'Clock In', 'Clock Out', 'Total Hours', 'Status']],
            body: filteredEmployees.map(emp => [
                emp.company,
                emp.name,
                emp.id,
                emp.clockIn,
                emp.clockOut,
                calculateTotalHours(emp.clockIn, emp.clockOut),
                getStatus(calculateTotalHours(emp.clockIn, emp.clockOut))
            ])
        });
        doc.save('attendance.pdf');
    };
    

    return (
        <div className="attendance-view">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Name or ID or Company or Status"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={downloadPDF}>Download PDF</button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Clock In</th>
                            <th>Clock Out</th>
                            <th>Total Hours</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees?.map((emp, index) => {
                          const status = getStatus(emp.totalHours);
                          const color = getStatus(calculateTotalHours(emp.clockIn, emp.clockOut)) === 'Present' ? 'green' : 'red';
                            return(
                              <tr key={index}>
                                <td>{emp.company}</td>
                                <td>{emp.name}</td>
                                <td>{emp.id}</td>
                                <td>{emp.clockIn}</td>
                                <td>{emp.clockOut}</td>
                                <td>{calculateTotalHours(emp.clockIn, emp.clockOut)}</td>
                                <td><span style={{ color }}>{getStatus(calculateTotalHours(emp.clockIn, emp.clockOut))}</span></td>
                            </tr>
                            )
})}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceView;