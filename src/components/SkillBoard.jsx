import React from 'react';

function SkillBoard({ title, array }) {
  return (
    <div className='w-full md:w-1/2 lg:w-full bg-white px-5 py-3 rounded-md'>
      <div className='font-bold text-center md:text-left'>{title}</div>
      <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-5'>
        {array.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className="flex justify-center items-center rounded-full overflow-hidden bg-gray-200 h-20 w-20" style={{ borderRadius: `${item.name ? "50%" : "30%"}` }}>
              <img className={item.name ? 'h-8 w-8' : 'h-4 w-4'} src={item.icon} alt={item.name} />
            </div>
            <div className='text-center text-xs whitespace-normal w-12 mt-2'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillBoard;
