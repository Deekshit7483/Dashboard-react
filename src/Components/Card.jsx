import { useContext, useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import {BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs'
function Card(props) {
  // console.log(props);
 
  

  return (
    <div className="border-gray-200 border-1 rounded-xl shadow-2xl hover:shadow-xl  p-3 w-max xl:w-full">
      <div className=" flex justify-evenly h-[200px] w-[400px] xl:w-full ">

      <div className={` w-1/3 xl:w-1/2 my-auto h-3/5 xl:h-32 rounded-full ${props.color}`}>
          {<props.img className={`my-auto text-4xl mx-auto h-full ${props.text}`}/>}
        </div>

        <div className=" my-auto ">
          <div className="sm:pr-5">
            <p>{props.Name}</p>
            <b className="text-2xl">{props.Amount}</b>
            <div className=" flex">
            </div>
          </div>
          
        </div>

        
      </div>
    </div>
  );
}

export default Card;
