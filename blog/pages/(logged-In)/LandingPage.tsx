import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/ui/auth/LoginButton';
import LogoutButton from '../../components/ui/auth/LogoutButton';

const LandingPage: NextPage = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div className="bg- p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Recipe Blog</h1>
        <p className="mb-8">This is the homepage of the recipe blog application.</p>
        {isAuthenticated ? (
          <div>
            <p className="mb-2">Hello, {user?.name}!</p>
            <LogoutButton />
          </div>
        ) : (
          <LoginButton onClick={loginWithRedirect} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
