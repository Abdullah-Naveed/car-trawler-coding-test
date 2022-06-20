import React, { lazy, Suspense } from 'react'
import './theme/app.scss'
import { Routes, Route } from 'react-router-dom'

const Cars = lazy(() => import('./modules/cars/cars.component'))
const CarDetails = lazy(
  () => import('./modules/cars/car-details/car-details.component'),
)

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="carDetails" element={<CarDetails />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
