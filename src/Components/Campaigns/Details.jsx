import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Details() {
    const detail = useLoaderData()
    console.log(detail)
  return (
    <div>
      {detail.userEmail}
    </div>
  )
}

export default Details
