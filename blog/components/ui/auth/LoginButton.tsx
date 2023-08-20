import React, { useState } from 'react';
import { useAuthAndUser } from '../../../hooks/useAuthAndUser'; // Update the path based on your project structure
import { NextPage } from 'next';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: NextPage<LoginButtonProps> = ({ onClick }) => {
  const { user, loginWithRedirect } = useAuthAndUser(); // Use your custom hook
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      console.log('Attempting login...');
      await loginWithRedirect();
      setTimeout(() => {
        setIsLoading(false); // Reset loading state after the delay
      }, 5000); // 5000ms = 5 seconds
    } catch (error) {
      setIsLoading(false); // Reset loading state on error
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? 'Logging In...' : 'Log In'}
    </button>
  );
};

export default LoginButton;
