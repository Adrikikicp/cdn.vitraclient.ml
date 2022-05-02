import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vitra Project - CDN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Vitra CDN" />
        <p className="description">
         
    
    Welcome to Vitra CDN
    
    Here are Uploads of every package & image of Adrikikicp Development or Vitra Project

        </p>
      </main>

      <Footer />
    </div>
  )
}
