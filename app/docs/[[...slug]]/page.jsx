import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>Welcome to Docs</h1>
      {params.slug}f
    </div>
  )
}

export default page
