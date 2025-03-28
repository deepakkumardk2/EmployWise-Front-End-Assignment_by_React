import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import '../styles/EditUser.css';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data.data);
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/users/${id}`, user);
      navigate('/users');
    } catch (err) {
      setError('Failed to update user');
    }
  };

  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={user.first_name}
            onChange={(e) => setUser({...user, first_name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={user.last_name}
            onChange={(e) => setUser({...user, last_name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="form-actions">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => navigate('/users')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;