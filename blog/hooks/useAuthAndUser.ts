import { useAuth0 } from '@auth0/auth0-react';
import { useUser as useUserFromAuth0 } from '@auth0/nextjs-auth0/client';

// Custom hook that combines useAuth0 and useUser
export function useAuthAndUser() {
  const auth0 = useAuth0();
  const user = useUserFromAuth0();

  const loginWithRedirect = auth0.loginWithRedirect;
  // Add any other functions or logic you need here

  return {
    ...auth0,
    user,
    loginWithRedirect,
    // Add other properties or functions as needed
  };
}
