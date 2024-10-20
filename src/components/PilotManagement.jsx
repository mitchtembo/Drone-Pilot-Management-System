import { useState, useEffect } from 'react';
import './PilotManagement.css'; // Import your CSS file

function PilotManagement() {
  const [pilots, setPilots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch with a timeout
    setTimeout(() => {
      setPilots([
        { id: 1, name: 'John Doe', email: 'john@example.com', certifications: ['Type A', 'Type B'] },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', certifications: ['Type A'] },
      ]);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  const handleAddPilot = () => {
    // Logic to add a new pilot (open modal/form)
    console.log('Add new pilot');
  };

  const handleEditPilot = (id) => {
    // Logic to edit pilot (open modal/form with current details)
    console.log('Edit pilot with ID:', id);
  };

  const handleDeletePilot = (id) => {
    // Logic to delete pilot (confirm before deleting)
    setPilots(pilots.filter(pilot => pilot.id !== id));
  };

  if (loading) return <div>Loading...</div>; // Loading state

  return (
    <div className="pilot-management">
      <h2>Pilot Management</h2>
      <button className="add-pilot-button" onClick={handleAddPilot}>Add New Pilot</button>
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
                <button onClick={() => handleEditPilot(pilot.id)}>Edit</button>
                <button onClick={() => handleDeletePilot(pilot.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PilotManagement;
