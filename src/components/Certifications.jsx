import { useState, useEffect } from 'react'

function Certifications() {
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setCertifications([
      { id: 1, pilotName: 'John Doe', type: 'Type A', expirationDate: '2023-12-31', status: 'Active' },
      { id: 2, pilotName: 'Jane Smith', type: 'Type B', expirationDate: '2023-06-30', status: 'Expiring' },
    ])
  }, [])

  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <button>Add New Certification</button>
      <table>
        <thead>
          <tr>
            <th>Pilot Name</th>
            <th>Certification Type</th>
            <th>Expiration Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map(cert => (
            <tr key={cert.id}>
              <td>{cert.pilotName}</td>
              <td>{cert.type}</td>
              <td>{cert.expirationDate}</td>
              <td>{cert.status}</td>
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

export default Certifications