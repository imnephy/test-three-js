import { BaseLayout } from '@layouts/BaseLayout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { ROUTES } from './routes'

export const routes = createRoutesFromElements(
  <Route path="/">
    <Route Component={BaseLayout}>
      <Route
        path={ROUTES.HOME}
        lazy={async () => {
          const { Home } = await import('@pages/Home')
          return {
            Component: Home,
          }
        }}
      />
    </Route>
    <Route
      path={ROUTES.DASHBOARD}
      lazy={async () => {
        const { Dashboard } = await import('@pages/dashboard/Dashboard')
        return {
          Component: Dashboard,
        }
      }}
    />

    <Route
      path="*"
      lazy={async () => {
        const { NotFound } = await import('@pages/404/NotFound')
        return {
          Component: NotFound,
        }
      }}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)
