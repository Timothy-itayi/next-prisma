import { handleAuth } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      console.log('API login endpoint called');
      // You can handle login logic here
      // This endpoint will initiate the Auth0 login process
    } catch (error) {
      const errorMessage = (error as Error).message || 'An unknown error occurred';
      console.error('An error occurred during login:', errorMessage);
      res.status(500).end(errorMessage);
    }
  },
});
