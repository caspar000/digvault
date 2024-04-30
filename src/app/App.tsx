import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CloudPage } from '@/pages/cloud/CloudPage'
import { HomePage } from '@/pages/home/HomePage'
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
        </Routes>
      </Router>
    </>
  )
}

export default App
