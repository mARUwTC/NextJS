import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1>Welcome!</h1>

        <h2>Tools</h2>

        <div class={styles.grid}>

          <div className={styles.cards}>
            <Link href="/RandomNumber">
              <a>RandomNumber</a>
            </Link>
          </div>

          <div className={styles.cards}>
            <Link href="/SearchFilter">
              <a>SearchFilter</a>
            </Link>
          </div>

          <div className={styles.cards}>
            <Link href="/">
              <a>SimpleCalculator</a>
            </Link>
          </div>

        </div>

      </main>
    </div>
  )
}
