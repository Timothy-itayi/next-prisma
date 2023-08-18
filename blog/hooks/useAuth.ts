// hooks/useAuth.ts
import { useAuth0 } from '@auth0/auth0-react';

export function useAuth() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  };
}
