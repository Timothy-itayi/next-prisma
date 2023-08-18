import React from 'react';
import { useAuth } from '../hooks/useAuth';
import LoginButton from '../components/ui/auth/LoginButton';
import Link from 'next/link';

const SignInPage: React.FC = () => {
  const { loginWithRedirect } = useAuth();

  const handleLogin = () => {
    loginWithRedirect().then(() => {
      // After successful login, use the Link component to navigate to the landing page
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200 font-mono">
      <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-8">Please sign in</p>
        <LoginButton onClick={handleLogin} />
        <Link href="/logged-in/landing" legacyBehavior>
  {/* The text acts as the link */}
  <a className="mt-4 text-blue-500 hover:underline">Go to Landing Page</a>
</Link>

      </div>
    </div>
  );
};

export default SignInPage;
