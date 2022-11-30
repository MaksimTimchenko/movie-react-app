import React from 'react'

const Button = ({text}) => {
  return (
    <button className='py-1 px-6 ring-2 ring-red-500 rounded-full bg-red-800'>{text}</button>
  )
}

export default Button