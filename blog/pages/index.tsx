import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/ui/auth/LoginButton'
import LogoutButton from '../components/ui/auth/LogoutButton'

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      <h1>Welcome to My Recipe Blog</h1>
      <p>This is the homepage of the recipe blog application.</p>
      {isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  )
}

export default Home
