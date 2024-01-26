import React from "react";
import { BiSearch } from "react-icons/bi";
import {FaHandsClapping} from 'react-icons/fa6'
import CardHolder from "./CardHolder";
import BarChart from "./BarChart";
import ProductSell from './ProductSell'
import { BsMenuButtonFill } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
const Dashboard = (props) => {
  return (
    <div className=" lg:w-4/5  lg:mx-20 mx-2 md:mx-10 mt-5 lg:my-10 grid gap-y-10">
      {/* search header  */}
      <div className="flex justify-between">
        <div className="flex justify-start gap-x-2 flex-wrap">
          <MdMenu className="text-3xl lg:hidden cursor-pointer hover:opacity-70" onClick={() => props.setControlSideBar("left-0")}/>
          <p className="text-2xl font-semibold">Hello username! </p>
        </div>

      </div>

      {/* Card holder box  */}
      <CardHolder/>
      {/* bar chart  */}
      <div className='p-5 lg:hidden'>
                <p className='font-bold text-xl'>Overview</p>
                 <small>Monthly Earning</small>
            </div>
      <div className="lg:flex justify-between gap-x-3 my-10 h-full">
        
      <BarChart/>
          <ProductSell/>
      
      {/*<div className="shadow-md border-1 lg:w-2/5 p-10 ">
        <p className="text-xl font-bold">Customers</p>
        <p>Customers that buy products</p>
      <div className=' text-center  bg-blue rounded-full   border-[25px] border-r-pink-500 border-b-blue-500 sm:w-[23%]   lg:w-[60%] md:w-[40%] md:h-1/3   w-[60%] h-4/5  lg:h-2/3  m-auto shadow-md  bg-white '>
        <div className='mt-10 break-words'>
        <p className='text-4xl text-center font-bold'>75%</p>
        <p className='text-center  '>Total new customers</p>
        
        </div>
    </div>
    </div>*/}
  </div>
      
    </div>
  );
};

export default Dashboard;
