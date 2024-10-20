function Profile({ user }) {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more profile information and edit functionality here */}
    </div>
  )
}

export default Profile