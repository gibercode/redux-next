import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { Provider } from 'react-redux';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  (
    <Component {...pageProps} />
  )
}

export default initStore.withRedux(MyApp);
