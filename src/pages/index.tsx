import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/navigation-bar/navigation-bar'

export default function ParentPage() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  )
}
