import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ParentPage() {
  return (
    <div>
      ParentPage
      <Outlet />
    </div>
  )
}
