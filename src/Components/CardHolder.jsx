import React from 'react'
import Card from './Card'
import { MdMonetizationOn } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
const CardHolder = () => {
  return (
    <div className='flex xl:grid grid-cols-4 gap-x-3 overflow-x-scroll min-w-full xl:w-full xl:overflow-x-hidden'>
     <Card Name='Total Spends' Amount='₹3,38,676' up={true} color='bg-green-500' text='text-green-300' img={MdMonetizationOn}/>
     <Card Name='Total Earnings' Amount='₹3,38,676' color='bg-blue-300' text='text-purple-500' img={MdOutlineAccountBalance                                                                                                   } />
     <Card Name='Total Expenses' Amount='₹3,38,676' color='bg-red-300' text='text-blue-500' up={true} img={MdOutlineAccountBalanceWallet}/>
    </div>
  )
}

export default CardHolder