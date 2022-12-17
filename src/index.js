import { Suspense, lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import classes from './Index.module.css'

const Main = lazy(() => import('./components/Main'))
const ECommerceApp = lazy(() => import('./components/e-commerce-app'))
const OnlineLearningPlatform = lazy(() =>
  import('./components/online-learning-platform')
)
const StocksPortfolio = lazy(() => import('./components/stocks-portfolio'))
const PageNotFoundComponent = lazy(() =>
  import('./components/PageNotFoundComponent')
)

const App = () => {
  return (
    <Suspense
      fallback={
        <div className={classes.fullFlexCenter}>
          <img src="loading.svg" alt="Loading..." />
        </div>
      }
    >
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="e-commerce-app" element={<ECommerceApp />} />
        <Route
          path="online-learning-platform"
          element={<OnlineLearningPlatform />}
        />
        <Route path="stocks-portfolio" element={<StocksPortfolio />} />
        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>
    </Suspense>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
