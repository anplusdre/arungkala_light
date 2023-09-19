import MainComponent from './header/page'
import ThemeProvider from './theme/themeProvisder';

export default function Home() {
  return (
    <main>
      
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>

    </main>
  )
}

