import { Auth0Provider } from '@auth0/auth0-react'
import { AppProps } from 'next/app'
import '../app/styles/global.css' // Adjust the path based on your structure

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="dev-kuvlvwpp7p78xckw.au.auth0.com"
      clientId="dMfZUZJaJ8b8MfA4eRr8TLVfNU1Copli"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
