import { Provider as ReduxProvider } from 'react-redux'
import '@/styles/globals.css'
import store from '@/app/store'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps : { session, ...pageProps } }) {
  return (
    <ReduxProvider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ReduxProvider>
  )
}

export default MyApp
