import React from 'react'
import { useParams } from 'react-router-dom'

export default function User(){
  const {userId} = useParams()
  return (
    <>
      <h1 className='text-center bg-gray-600 p-4 text-white text-3xl'>User : {userId} </h1>

    </>
  )
}

