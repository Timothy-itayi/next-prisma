// pages/api/auth/me.ts

import { getSession, handleAuth } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default handleAuth({
  async me(req: NextApiRequest, res: NextApiResponse) {
    try {
      const session = await getSession(req, res);
      if (session) {
        res.status(200).json(session.user); // Return the user data
      } else {
        res.status(401).json({ message: 'Not authenticated' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  },
});
