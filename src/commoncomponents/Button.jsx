import React from 'react'

const Button = ({btnDesign,btnContent}) => {
  return (
    <div>
    <button className={btnDesign}>{btnContent}</button>
    </div>
  )
}

export default Button
