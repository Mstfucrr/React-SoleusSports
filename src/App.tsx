import Home from '@/pages/home'
import LanguageProvider from './LanguageProvider';

function App() {
  return (
    <div className="app">
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </div>

  )
}

export default App
