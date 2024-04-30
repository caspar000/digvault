import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CloudPage } from '@/pages/cloud/CloudPage'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { HomePage } from '@/pages/home/HomePage'
import { LegalPage } from '@/pages/legal/LegalPage'
import { PrivacyPage } from '@/pages/legal/PrivacyPage'
import { TermsPage } from '@/pages/legal/TermsPage'
import { LoginPage } from '@/pages/login/LoginPage'
import { SignUpPage } from '@/pages/signup/SignUpPage'

import { AppRoutePath } from './appRoutePath'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoutePath.HOME()} element={<HomePage />} />
          <Route path={AppRoutePath.CLOUD()} element={<CloudPage />} />
          <Route path={AppRoutePath.SIGNUP()} element={<SignUpPage />} />
          <Route path={AppRoutePath.LOGIN()} element={<LoginPage />} />
          <Route path={AppRoutePath.DASHBOARD()} element={<DashboardPage />} />
          <Route path={AppRoutePath.LEGAL()} element={<LegalPage />} />
          <Route path={AppRoutePath.PRIVACY()} element={<PrivacyPage />} />
          <Route path={AppRoutePath.TERMS()} element={<TermsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
