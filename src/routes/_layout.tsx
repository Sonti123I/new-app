import Layout from '@/components/Layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
    <Layout/>
    <Outlet/>
    </>
  )
}
