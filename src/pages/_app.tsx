import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { EventProvider } from '../contexts/EventsProvider'
import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '../styles/theme/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EventProvider>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </EventProvider>
  )
}

export default MyApp
