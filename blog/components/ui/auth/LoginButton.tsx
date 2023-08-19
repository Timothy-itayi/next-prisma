import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


interface LoginButtonProps {
  onClick: () => void; 
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      console.log('Attempting login...');
      await loginWithRedirect();
  
  
    } catch (error) {
      console.error('An error occurred during login:', error);
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
