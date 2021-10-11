import Head from 'next/head';
import { TaskProvider } from '../context/taskContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Head>
        <title>Task App</title>
      </Head>
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;
