import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import SuccessNotification from 'src/views/notifications/toasts/SuccessNotification'
import { useSelector } from 'react-redux'

const AppContent = () => {
  const success = useSelector((state) => state.notification.activate) || false
  const text = useSelector((state) => state.notification.text)
  const color = useSelector((state) => state.notification.color)

  return (
    <CContainer lg>
      <SuccessNotification activate={success} text={text} color={color} />
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
