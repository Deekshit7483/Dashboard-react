import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { FaUsersRectangle } from "react-icons/fa6";

const MobileViews = () => {
  return (
    <div className="">
      <div className="h-full lg:hidden flex justify-around gap-x-4 bg-[#211a75] p-3  rounded-2xl my-auto">
        <BiSearch className="my-auto text-2xl text-[#7879f1]" />
        <input
          placeholder="Search icons"
          className="bg-inherit outline-none "
        />
      </div>
      
    </div>
  );
};

export default MobileViews;
