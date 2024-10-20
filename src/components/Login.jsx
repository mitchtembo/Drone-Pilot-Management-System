import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; // Ensure this is imported for styles

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate(); // For navigation after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate a login request (replace with your backend logic)
    try {
      // Example: validate credentials (dummy check)
      if (email === 'test@example.com' && password === 'password') {
        onLogin({ email });
        navigate('/'); // Redirect to home or dashboard
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-field">
          <input
            type={passwordVisible ? 'text' : 'password'} // Toggle between text and password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
            className="password-toggle"
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        {error && <p className="error">{error}</p>} {/* Error message */}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
