import React from 'react'
import Header from './_components/header'

function dashboardLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default dashboardLayout
