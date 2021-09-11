import '../styles/globals.css';
import '../styles/antd.css';
import 'antd/dist/antd.css';
import '../i18n/index'
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { LoadingBar } from '../styles/global';
import GlobalStyles from '../styles/global';
import { Provider } from 'react-redux';
import store from '../store/index';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      // ao iniciar o evento de troca de tela, a barra de loading parece
      setLoading(true);
    };

    const handleRouteChanged = () => {
      // após ocorrer a troca de tela, a barra de loading desaparece
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChanged);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChanged);
    };
  }, [router.events]);

  return (
    <Provider store={store.store}>
      <LoadingBar loading={loading ? 1 : 0} />
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  );
}
export default MyApp;
