import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface LoginButtonProps {
  onClick: () => void; // Define the type for onClick prop
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithRedirect();
      onClick(); // Call the onClick function provided by parent
    } catch (error) {
      console.error('An error occurred during login:', error);
      // Handle the error here if needed
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
    >
      Log In
    </button>
  );
};

export default LoginButton;
