import React from 'react'

function Footer() {
  const date = new Date()
  return (
    <div className='footer'>Fashion Apparel &copy; {date.getFullYear()}</div>
  )
}

export default Footer