import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SiteContext } from './_app';
import { useContext } from 'react';
import Link from 'next/link'

export default function Home(props) {
  const siteContext = useContext(SiteContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> Site Id {siteContext.siteId}
        </h1>

        <Link href="/"><a>Home</a></Link>

        Props from getServerSideProps: {props.pageProp}

      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  return { props: { pageProp: 'Hello Blog' } };
}
