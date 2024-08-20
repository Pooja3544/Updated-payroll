import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Holiday.css'

const HolidayList = () => {
  const [holidays, setHolidays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Initialize with current month
  const [isDetailedView, setIsDetailedView] = useState(false); // State for detailed view

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Mock data for demonstration
    const mockHolidays = [
      { id: 1, name: 'Republic Day', date: '2024-01-26' },
      { id: 2, name: 'Makar Sankranti', date: '2024-01-14' },
      { id: 3, name: 'Pongal', date: '2024-01-15' },
      { id: 4, name: 'Mahashivratri', date: '2024-02-21' },
      { id: 5, name: 'Holi', date: '2024-03-09' },
      { id: 6, name: 'Good Friday', date: '2024-04-19' },
      { id: 7, name: 'Easter Sunday', date: '2024-04-21' },
      { id: 8, name: 'Buddha Purnima', date: '2024-05-17' },
      { id: 9, name: 'Eid al-Fitr', date: '2024-05-22' },
      { id: 10, name: 'Independence Day', date: '2024-08-15' },
      { id: 11, name: 'Raksha Bandhan', date: '2024-08-21' },
      { id: 12, name: 'Janmashtami', date: '2024-08-28' },
      { id: 13, name: 'Ganesh Chaturthi', date: '2024-09-09' },
      { id: 14, name: 'Mahatma Gandhi Jayanti', date: '2024-10-02' },
      { id: 15, name: 'Dussehra', date: '2024-10-08' },
      { id: 16, name: 'Diwali', date: '2024-10-24' },
      { id: 17, name: 'Guru Nanak Jayanti', date: '2024-11-13' },
      { id: 18, name: 'Christmas Day', date: '2024-12-25' }
    ];

    setHolidays(mockHolidays);
  }, []);

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth % 12) + 1); // Wrap around to January if at December
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => prevMonth === 1 ? 12 : prevMonth - 1); // Wrap around to December if at January
  };

  const handleBack = () => {
    navigate(0); // Navigate back to the previous page
  };

  const handleToggleView = () => {
    setIsDetailedView(!isDetailedView); // Toggle detailed view
  };

  // Function to get month name based on month number
  const getMonthName = (monthNumber) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNumber - 1];
  };

  const handleBack2 = () => {
    navigate(0);
  };
  return (
    <div className='holidayListContainer'>
      <p className='holidayListTitle'>Holiday's</p>
      {!isDetailedView && (
        <div className='monthHeader'>
          <div className='currentMonth'>{getMonthName(currentMonth)}</div>
        </div>
      )}
      <ul className='holidayList'>
        {holidays
          .filter((holiday) => {
            if (isDetailedView) return true; // Show all holidays in detailed view
            const holidayMonth = parseInt(holiday.date.split('-')[1], 10);
            return holidayMonth === currentMonth;
          })
          .map((holiday) => (
            <li key={holiday.id} className='holidayListItem'>
              <span>{holiday.name}</span> - {holiday.date}
            </li>
          ))}
      </ul>
      {!isDetailedView && (
        <div className='monthButtons'>
          <button className='monthButton' onClick={handlePrevMonth}>Previous</button>
          <button className='monthButton' onClick={handleNextMonth}>Next</button>
        </div>
      )}
      <div className='toggleViewButtonContainer'>
        <button className='toggleViewButton' onClick={handleToggleView}>
          {isDetailedView ? 'Show Monthly View' : 'View Details'}
        </button>
      </div>
      
        <div className='backButtonContainer'>
          <button className='backButton' onClick={handleBack2}>Back</button>
        </div>
      
    </div>
  );
};

export default HolidayList;