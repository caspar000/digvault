import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CloudPage } from '@/pages/cloud/CloudPage'
import { HomePage } from '@/pages/home/HomePage'

import { AppRoutePath } from './appRoutePath'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoutePath.HOME()} element={<HomePage />} />
          <Route path={AppRoutePath.CLOUD()} element={<CloudPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
