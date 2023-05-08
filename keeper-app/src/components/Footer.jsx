import React from 'react'



const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <div>
        <div className='copyright'>Copyright {year}</div>
    </div>
  )
}

export default Footer
