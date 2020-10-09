import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Tamacatchi</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Canvas/>
        </main>
      </div>
    </Provider>
  )
}
