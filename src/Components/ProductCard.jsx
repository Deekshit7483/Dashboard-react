import React from 'react'

const ProductCard = () => {
  return (
    <div className='flex justify-between my-1'>
    <div className='flex justify-start'>
    <img src={book} alt='Book' className='my-auto'/>
    <div className='space-x-5'>
        <h4 className='font-bold'>Data Structure</h4>
        <p className='text-left'>Magic of algorithms</p>
    </div>
    </div>
    <div>{new Date().toUTCString()}</div>
</div>
  )
}

export default ProductCard