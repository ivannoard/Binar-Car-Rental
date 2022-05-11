import React from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

const TemplateComponent = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  )
}

export default TemplateComponent