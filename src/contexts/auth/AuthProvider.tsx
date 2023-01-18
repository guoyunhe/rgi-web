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
    axios.get<User | null>('/user').then((res) => {
      if (res.data) {
        setStatus(AuthStatus.LoggedIn);
        setUser(res.data);
      } else {
        setStatus(AuthStatus.NotLoggedIn);
      }
    });
  }, []);

  useEffect(() => {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  }, [token]);

  return (
    <AuthContext.Provider value={{ status, setStatus, user, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
