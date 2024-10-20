import { useState, useEffect } from 'react'

function Scheduling() {
  const [missions, setMissions] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setMissions([
      { id: 1, date: '2023-05-10', time: '09:00', missionType: 'Surveillance', assignedPilot: 'John Doe' },
      { id: 2, date: '2023-05-12', time: '14:00', missionType: 'Delivery', assignedPilot: 'Jane Smith' },
    ])
  }, [])

  return (
    <div className="scheduling">
      <h2>Mission Scheduling</h2>
      <button>Schedule New Mission</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Mission Type</th>
            <th>Assigned Pilot</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(mission => (
            <tr key={mission.id}>
              <td>{mission.date}</td>
              <td>{mission.time}</td>
              <td>{mission.missionType}</td>
              <td>{mission.assignedPilot}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Scheduling