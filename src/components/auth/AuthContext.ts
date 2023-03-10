import { createContext } from 'react';
import AuthStatus from '../../types/enums/AuthStatus';
import User from '../../types/models/User';

export interface AuthContextValue {
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextValue>({
  status: AuthStatus.NotSure,
  setStatus: () => null,
  user: null,
  setUser: () => null,
  setToken: () => null,
});

export default AuthContext;
