import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0()
  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
    >
      Log Out
    </button>
  )
}

export default LogoutButton
