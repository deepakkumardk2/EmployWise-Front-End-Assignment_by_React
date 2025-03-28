import { createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const login = (token) => {
    localStorage.setItem('token', token);
  };

  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);