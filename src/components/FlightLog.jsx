import { useState, useEffect } from 'react'

function FlightLog() {
  const [flightLogs, setFlightLogs] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setFlightLogs([
      { id: 1, date: '2023-05-01', duration: '2h 30m', missionType: 'Surveillance', pilot: 'John Doe' },
      { id: 2, date: '2023-05-03', duration: '1h 45m', missionType: 'Delivery', pilot: 'Jane Smith' },
    ])
  }, [])

  return (
    <div className="flight-log">
      <h2>Flight Log</h2>
      <button>Add New Flight Log</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Duration</th>
            <th>Mission Type</th>
            <th>Pilot</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flightLogs.map(log => (
            <tr key={log.id}>
              <td>{log.date}</td>
              <td>{log.duration}</td>
              <td>{log.missionType}</td>
              <td>{log.pilot}</td>
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

export default FlightLog