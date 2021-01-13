import '../styles/globals.css'
import { createContext, useState } from 'react';
import App from 'next/app';

export const SiteContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [siteContext] = useState(pageProps.siteContext);

  return <SiteContext.Provider value={siteContext}><Component {...pageProps} /></SiteContext.Provider>
}

MyApp.getInitialProps =  async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  // Is website already initialized?
  // FIXME: Is there a better way to distinguish the requests? Or any other way to get data only when rendered on the server?
  if (appContext.ctx.req?.url?.startsWith('/_next/data/')) {
    return {
      ...appProps
    };
  }

  // Load some initial context
  const siteContext = await fetchContext();

  return {
    ...appProps,
    pageProps: {
      siteContext: siteContext
    }
  };
}

function fetchContext() {
  // This data can be several hundred KB in our case
  return {
    siteId: 42
  }
}

export default MyApp
