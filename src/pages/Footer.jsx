import React from 'react'

function Footer() {
  const date = new Date()
  return (
    <div className='footer'>copyright &copy; {date.getFullYear()}</div>
  )
}

export default Footer