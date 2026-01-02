import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Dash Board</h1>
      <Link href={"/dashboard/reports"}>View Report</Link>
       <Link href={"/profile"}>View Profile</Link>
       
    </div>
  )
}

export default page
