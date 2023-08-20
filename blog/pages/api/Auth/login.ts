// pages/api/auth/login.ts
import { handleAuth } from '@auth0/nextjs-auth0';
import { useAuth } from '../../../hooks/useAuth'; // Replace with actual path to your custom hook
import { NextApiRequest, NextApiResponse } from 'next';

export default handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { loginWithRedirect } = useAuth();
      await loginWithRedirect();
    } catch (error) {
        const errorMessage = (error as Error).message||
      console.error('An error occurred during login:', error);
      res.status(500).end(errorMessage);
    }
  },
});
