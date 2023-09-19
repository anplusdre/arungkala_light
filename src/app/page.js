import MainComponent from './header/page'
import ThemeProvider from './theme/themeProvider';

export default function Home() {
  return (
    <main>
      
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>

    </main>
  )
}

