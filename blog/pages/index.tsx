import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/ui/auth/LoginButton';
import { useRouter } from 'next/router';

const SignInPage: NextPage = () => {
  const { loginWithRedirect } = useAuth0();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log('handleLogin function called'); // Add this line
      await loginWithRedirect();
      router.push('/logged-In/landingPage');
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
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
