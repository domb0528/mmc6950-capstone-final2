import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sip & Savor 🍷</title>
        <meta name="description" content="Sip & Savor is a wine pairing app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍷</text></svg>"/>
      </Head>
      <main>
        <div className={styles.container}>
          <h1>Welcome to Sip & Savor 🍷 where you can find the best food and wine pairings</h1>
          <section className={styles.jumbo}>
            <p>Find a Pairing. 🍷</p>
          </section>
        </div>
        <section className={styles.goSearch}>
          <p></p>
          <Link href="/search" className="button">Search for your Pairing</Link>
        </section>
      </main>
    </>
  )
}
