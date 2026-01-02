import React from 'react'

const page = () => {
  return (
    <div  className='max-w-4xl mx-auto px-4 py-12'>
      <div className='text-center mb-12'>
<h1 className='text-4xl font-bold  text-gray-900 mb-4'>Contact US</h1>
<p className='text-xl text-grtay-600'>
    WE would love to hear form  you  Send a  message and we'll contact you
</p>
      </div>
      <div className='grid md:grid-cols-3 gap-12'>
     <div className='bg-white rounded-lg shadow-md  border p-8 '>
<h1 className='text-2xl font-semibold text-gray-700 mb-6'>Send us a Message</h1>
        <form className='spcae-y-6'>
            <div>
 <label className='block text-sm font-medium text-gray-600' htmlFor="name">Full Name</label>
            <input type="text" id='name'  className='w-full px-3 py-2 focus:ring-2'/>
            </div>
            <div>
 <label className='block text-sm font-medium text-gray-600' htmlFor="name">Email</label>
            <input type="text" id='name'  className='w-full px-3 py-2 focus:ring-2'/>
            </div>
            <div>
 <label className='block text-sm font-medium text-gray-600' htmlFor="name">Subject</label>
            <textarea type="text" id='name'  className='w-full px-3 py-2 focus:ring-2'/>
            </div>
            <button  type="submit"  className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg   transition-colors hover:'> Send Message</button>
        </form>

     </div>
      </div>
    </div>
  )
}

export default page
