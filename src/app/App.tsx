import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'

import { AppRoutePath } from './appRoutePath'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoutePath.HOME()} element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
