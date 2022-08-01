import { CardContextProvider } from "../context/CardContext"
import type { AppProps } from "next/app"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CardContextProvider>
      <Component {...pageProps} />
    </CardContextProvider>
  )
}

export default MyApp
