import React from 'react'

const page = ({params}) => {
  return (
    <div>
      Revieew {params.id} ,{params.reviewId}
    </div>
  )
}

export default page
