import { Provider } from 'react-redux';
import store from '../store';

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SafeHydrate>
  );
}

export default MyApp;
