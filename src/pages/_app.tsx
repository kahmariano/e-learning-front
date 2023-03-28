import type { AppProps } from 'next/app';
import '../main.css';
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
