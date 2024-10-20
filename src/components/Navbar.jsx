import { Link } from 'react-router-dom'

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <h1>Drone Pilot Management System</h1>
      {user ? (
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/pilots">Pilots</Link>
          <Link to="/flight-log">Flight Log</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/scheduling">Scheduling</Link>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar