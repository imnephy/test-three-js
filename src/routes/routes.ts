export const ROUTES = {
  HOME: '/',
  DASHBOARD: 'dashboard',
} as const

export type RoutesType = keyof typeof ROUTES
