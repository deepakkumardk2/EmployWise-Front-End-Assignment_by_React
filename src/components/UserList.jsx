import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get(`/users?page=${page}`);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  const handleDelete = async (userId) => {
    try {
      await api.delete(`/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
      setError('');
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="user-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} avatar`} />
            <div className="user-info">
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
            </div>
            <div className="user-actions">
              <button onClick={() => navigate(`/users/${user.id}/edit`)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i+1}
            onClick={() => setPage(i+1)}
            className={page === i+1 ? 'active' : ''}
          >
            {i+1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;