import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-3 items-center'>
        <h1 className='main-header'>Page not found!</h1>
        <button className='btn-dark'>
            <Link to='/'>Go Back</Link>
        </button>
    </div>
  )
}

export default NotFoundPage