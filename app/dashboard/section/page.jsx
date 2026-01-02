import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Thi  is the section
<Link  href={"/setting"}> Go to setting
</Link>
 <Link href={"/admin"}>View admin</Link>
    </div>
  )
}

export default page
