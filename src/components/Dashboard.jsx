import { useState, useEffect } from 'react';
import { FaUsers, FaCertificate, FaRocket } from 'react-icons/fa'; // Import the icons

function Dashboard({ user }) {
  const [stats, setStats] = useState({
    activePilots: 0,
    expiringCertifications: 0,
    scheduledMissions: 0,
  });

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setStats({
      activePilots: 15,
      expiringCertifications: 3,
      scheduledMissions: 7,
    });
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, {user.email}!</h2>
      <div className="stats-container">
        <div className="stat-card">
          <FaUsers size={30} color="#f9ab23" /> {/* Icon for Active Pilots */}
          <h3>Active Pilots</h3>
          <p>{stats.activePilots}</p>
        </div>
        <div className="stat-card">
          <FaCertificate size={30} color="#f9ab23" />{' '}
          {/* Icon for Expiring Certifications */}
          <h3>Expiring Certifications</h3>
          <p>{stats.expiringCertifications}</p>
        </div>
        <div className="stat-card">
          <FaRocket size={30} color="#f9ab23" />{' '}
          {/* Icon for Scheduled Missions */}
          <h3>Scheduled Missions</h3>
          <p>{stats.scheduledMissions}</p>
        </div>
      </div>
      <div className="quick-links">
        <h3>Quick Links</h3>
        <button>Add Pilot</button>
        <button>View Certifications</button>
      </div>
      {/* Add more dashboard content here */}
    </div>
  );
}

export default Dashboard;
