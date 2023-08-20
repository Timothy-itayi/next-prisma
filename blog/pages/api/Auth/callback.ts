import { NextApiRequest, NextApiResponse } from 'next';
import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      console.log('API callback endpoint called');
      // Handle callback logic, if needed
      res.redirect('/logged-in/landingpage');
    } catch (error) {
      const errorMessage = (error as Error).message || 'An unknown error occurred';
      console.error('An error occurred during callback:', errorMessage);
      res.status(500).end(errorMessage);
    }
  },
});