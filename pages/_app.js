import '@/styles/globals.css'
import theme from '@/utils/theme'
import { ThemeProvider } from '@mui/material'
import Layout from './components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
