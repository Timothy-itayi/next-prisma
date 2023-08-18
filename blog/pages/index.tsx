import React from 'react';
import { useAuth } from '../hooks/useAuth';
import LoginButton from '../components/ui/auth/LoginButton';
import Link from 'next/link';

const SignInPage: React.FC = () => {
  const { loginWithRedirect } = useAuth();

  const handleLogin = () => {
    loginWithRedirect().then(() => {
      // After successful login, navigate to the landing page
      window.location.href = '/logged-in/landing';
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200 font-mono">
  
    
        <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
    
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p className="mb-8">Please sign in</p>
      <LoginButton onClick={handleLogin} />
    </div>
  </div>
     
    
  
  
  );
};

export default SignInPage;
