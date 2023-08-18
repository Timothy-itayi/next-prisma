import { Auth0Provider } from '@auth0/auth0-react'
import { AppProps } from 'next/app'
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const redirectUri =
    typeof window !== 'undefined' ? window.location.origin : ''

  return (
    <Auth0Provider
      domain="dev-kuvlvwpp7p78xckw.au.auth0.com"
      clientId="dMfZUZJaJ8b8MfA4eRr8TLVfNU1Copli"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
