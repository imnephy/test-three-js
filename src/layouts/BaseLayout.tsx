import type { ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'

interface BaseLayoutProperties extends ComponentProps<'div'> {}

export const BaseLayout = (_props: BaseLayoutProperties) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>header</header>
      <main className="flex flex-1 items-center justify-center">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}
