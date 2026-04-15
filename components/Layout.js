import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children, title, description }) {
  const pageTitle = title
    ? `${title} | Angela Webb Coaching`
    : 'Angela Webb Coaching'

  const pageDescription =
    description ||
    'Certified Wayfinder Life Coach helping women and parents of neurodiverse kids reconnect with their inner compass.'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* Plum dividing line before footer */}
        <div className="h-0.5 bg-plum/40" />
        <Footer />
      </div>
    </>
  )
}
