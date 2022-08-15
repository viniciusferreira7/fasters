import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { EventContext } from '../contexts/EventsContext'
import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '../styles/theme/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EventContext>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </EventContext>
  )
}

export default MyApp
