import React from 'react';

const BarChart = () => {
    const data = [
    { month: 'Jan', h:'h-32',curr:true},
    { month: 'Feb', h:'h-28' },
    { month: 'Mar', h:'h-28' },
    {month:'Apr',h:'h-16'},
    {month:'May',h:'h-24'},
    {month:'Jun',h:'h-28'},
    {month:'July',h:'h-16'},
    {month:'Aug',h:'h-24'},
    {month:'Sept',h:'h-32'},
    {month:'Oct',h:'h-44'},
    {month:'Nov',h:'h-24'},
    {month:'Dec',h:'h-32'}
    // Add more months
  ];

  return (
    <div className=" lg:w-2/3 bg-white shadow rounded lg:h-full">
      <div className='p-5 hidden lg:block'>
                <p className='font-bold text-xl'>Overview</p>
                 <small>Monthly Earning</small>
            </div>
      <div className=" p-4  flex flex-wrap justify-between relative top-1/3 lg:top-1/2">
        {data.map(item => (
          <div className=" items-center mb-4 " key={item.month}>
            <div className={ `h-full w-2 relative`}>
              <div className={` ${item.h} ${item.curr?'bg-blue-600':'bg-blue-400'} md:w-8 w-4 rounded-md absolute bottom-0`}></div>
            </div>
            <div className=" font-bold text-center">{item.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
