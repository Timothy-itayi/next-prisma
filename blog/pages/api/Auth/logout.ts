// pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth({
  async logout(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Handle logout logic, if needed
      res.redirect('/');
    } catch (error) {
      const errorMessage = (error as Error).message || 'An unknown error occurred';
      console.error('An error occurred during logout:', errorMessage);
      res.status(500).end(errorMessage);
    }
  },
});
