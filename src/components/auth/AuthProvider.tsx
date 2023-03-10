import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import AuthStatus from '../../types/enums/AuthStatus';
import User from '../../types/models/User';
import AuthContext from './AuthContext';

export interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [status, setStatus] = useState(AuthStatus.NotSure);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useLocalStorage('api_token');

  useEffect(() => {
    if (token) {
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
      axios
        .get<User | null>('/user')
        .then((res) => {
          setStatus(AuthStatus.LoggedIn);
          setUser(res.data);
        })
        .catch(() => {
          setStatus(AuthStatus.NotLoggedIn);
        });
    } else {
      axios.defaults.headers['Authorization'] = '';
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ status, setStatus, user, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
