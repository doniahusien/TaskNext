import '@/styles/globals.css'
import { Fragment } from 'react'
import Layout from '@/Layout/layout'
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      
      
    </Fragment>
  )
}
