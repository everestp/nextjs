import React from 'react'
import AboutComponent from './about'

const page = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
     <div className='text-center mb-12'>
<h1 className='text-4xl font-bold text-gray-900 mb-4'>About us</h1>
<p className='text-4xl text-gray-600'>
    Learn  more about our story adn what derives  us forward
</p>
<div className='prose prose-lg mx-auto mt-5'>
<div className='bg-white rounded-lg shadow-sm p-8 mb-8 border-gray-200'>
<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
    Our story
</h2>
<p className='text-gray-600 mb-4'>
    Founded in 2026 eks.xyuz stated as simple idea to create beautfiul and reposnevice app uisint nextjs taht any one can undestand and maintian . We believe that grate web developement can be accessible to every one
</p>
<p className='text-gray-600'>
    Our team is passimate about cleanm code , modern fdesgin and creating experience that users loves we use that latest technologies like next.js and tailwindcss 
</p>
</div>
</div>
     </div>
    </div>
  )
}

export default page
