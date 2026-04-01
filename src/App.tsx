import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { WelcomeScreen } from '@/components/WelcomeScreen'
import { ExplorePage } from '@/pages/ExplorePage'
import { StoriesPage } from '@/pages/StoriesPage'
import { LoginPage } from '@/pages/LoginPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
