import React, { useState } from 'react';

function Services() {
  const [activeService, setActiveService] = useState('IT & Development');

  const services = {
    'IT & Development': [
      'Python Developer',
      'Data Scientist',
      'Shopify Developer',
      'Shopify Developer',
      'Front End Developer',
      'Python Developer',
      'MERN Stack Developer',
      'Shopify Developer',
      'Full Stack Developer',
      'Full Stack Developer',
      'Python Developer',
      'Explore More'
    ],
    'Design and Creative': [
      'Graphic Designer',
      'UI/UX Designer',
      'Illustrator',
      '3D Artist',
      'Animator',
      'Video Editor',
      'Photographer',
      'Art Director'
    ]
  };

  const renderServicesInColumns = (serviceList) => {
    const columns = [[], [], []];

    serviceList.forEach((service, index) => {
      columns[index % 3].push(service);
    });

    return columns.map((column, columnIndex) => (
      <div key={columnIndex} className='w-full md:w-1/3 px-2'>
        {column.map((service, serviceIndex) => (
          <p
  className='text-left mt-3'
  style={{
    color: service === "MERN Stack Developer" || service === "Explore More" ? "#000000" : "#959595",
    fontWeight: service === "MERN Stack Developer" || service === "Explore More" ? "bold" : "normal"
  }}
  key={serviceIndex}
>
  {service}
</p>

        
        ))}
      </div>
    ));
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='px-5 py-5 rounded-lg w-full md:w-3/5' style={{ backgroundColor: "#F8F8F8" }}>
        <div className='flex flex-wrap justify-between rounded-lg mb-4 mx-auto' style={{backgroundColor: "#D2D2D2", maxWidth: "26rem"}}>
          <button
            className='px-5 py-1 rounded-lg w-1/2'
            style={{ backgroundColor: activeService === 'IT & Development' ? '#C7F4C2' : '#D2D2D2' }}
            onClick={() => setActiveService('IT & Development')}
          >
            IT & Development
          </button>
          <button
            className='px-5 py-1 rounded-lg w-1/2'
            style={{ backgroundColor: activeService === 'Design and Creative' ? '#C7F4C2' : '#D2D2D2' }}
            onClick={() => setActiveService('Design and Creative')}
          >
            Design and Creative
          </button>
        </div>

        <div className='flex justify-center mt-3 mx-auto'>
          <div className='flex flex-wrap justify-between w-full max-w-3xl'>
            {renderServicesInColumns(services[activeService])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
