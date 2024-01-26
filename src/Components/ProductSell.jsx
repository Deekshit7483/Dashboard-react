import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiSearch } from "react-icons/bi";
import ProductData from './json/user.json'
const ProductSell = () => {
  return (
    <div>
        <div className="flex justify-between">
        <div className="flex justify-start gap-x-2">
          <p className="text-2xl font-semibold">list</p>
        </div>
       <div className='flex justify-end gap-x-4 flex-wrap'>
        <div className=" flex justify-around gap-x-4  p-3  rounded-2xl my-auto shadow">
          <BiSearch className="my-auto  text-black" />
          <input
            placeholder="Search users"
            className="bg-inherit outline-none "
          />
        </div>
        <div className='flex justify-between p-2 broder-2 border-gray-300 rounded-md shadow'>
            <p>Last 20 days</p>
            <MdKeyboardArrowDown className='my-auto'/>
        </div>
        </div>
      </div>

      {/* table heading */}
      {/* <div className='shadow h-max rounded-md flex justify-between flex-wrap py-3 px-1'>
        <p className='font-semibold '>Product Name</p>
        <div className='flex justify-around space-x-2 flex-wrap'>
            <p className='text-gray-500'>Stock</p>
            <p className='text-gray-500'>Price</p>
            <p className='text-gray-500'>Total sale</p>
        </div>
      </div> */}
      <table className='w-full text-left'>
        <thead className='w-full'>
            <tr>
                <th className='w-3/5 '>Username</th>
                <th className='text-right'>Amount</th>
                <th className='text-right'>UID</th>
            </tr>
        </thead>
        <tbody>
            {ProductData.map((item,i)=>{
                return <tr key={i}>
                <td>
                    
                     <div className='gap-y-2'>
                        <p>{item.Name}</p>
                        <small>{item.Description}</small>
                     </div>
                
                </td>
                <td className='text-right'>{item.Amount}</td>
                <td className='text-right'>{item.Uid}</td>
                </tr>
            })}
           
        </tbody>
        </table>
    </div>
  )
}

export default ProductSell