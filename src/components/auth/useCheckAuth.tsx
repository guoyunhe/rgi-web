import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthStatus from '../../types/enums/AuthStatus';
import useAuth from './useAuth';

export function useCheckAuth() {
  const { status } = useAuth();
  const goto = useNavigate();

  const checkAuth = useCallback(() => {
    const result = status === AuthStatus.LoggedIn;
    if (!result) goto('/login');
    return result;
  }, [goto, status]);

  return checkAuth;
}
