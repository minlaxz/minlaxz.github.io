import { Provider as ReduxProvider } from 'react-redux'
import '@/styles/globals.css'
import store from '@/app/store'

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}

export default MyApp
