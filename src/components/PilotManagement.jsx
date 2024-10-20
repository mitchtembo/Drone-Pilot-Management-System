import { useState, useEffect } from 'react'

function PilotManagement() {
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setPilots([
      { id: 1, name: 'John Doe', email: 'john@example.com', certifications: ['Type A', 'Type B'] },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', certifications: ['Type A'] },
    ])
  }, [])

  return (
    <div className="pilot-management">
      <h2>Pilot Management</h2>
      <button>Add New Pilot</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Certifications</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pilots.map(pilot => (
            <tr key={pilot.id}>
              <td>{pilot.name}</td>
              <td>{pilot.email}</td>
              <td>{pilot.certifications.join(', ')}</td>
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

export default PilotManagement