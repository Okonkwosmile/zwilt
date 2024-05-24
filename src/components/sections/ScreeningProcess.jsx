import React, { useState } from 'react';
import videoPlayIcon from "../../assets/images/videoPlayIcon.png";
import videoPlayIconWhite from "../../assets/images/videoPlayIconWhite.png";

function ScreeningProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };

  const steps = [
    {
      title: "Resume Screening",
      description: "We thoroughly review each candidate's resume to ensure they meet our high standards."
    },
    {
      title: "Technical Interview",
      description: "Candidates undergo a rigorous technical interview to assess their skills and expertise."
    },
    {
      title: "HR Interview",
      description: "Our HR team conducts interviews to evaluate candidates' cultural fit and soft skills."
    },
    {
      title: "Final Approval",
      description: "Candidates are reviewed and approved by our senior management team."
    },
    {
      title: "Onboarding",
      description: "We provide a comprehensive onboarding process to help new hires integrate smoothly."
    }
  ];

  return (
    <div className='relative pt-10 bg-white'>
      <div className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-2 origin-top-left" style={{ zIndex: 10, backgroundColor: "#202229" }}></div>

      <div className="relative mx-auto w-11/12 md:w-5/6 lg:w-5/6 px-5 md:px-10 z-10 flex flex-col md:flex-row items-center justify-center py-32 mt-20 bg-transparent">
        <div className='w-full md:w-1/2'>
          <div className='mt-5 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight'>How we ensure you’re <br /> in good hands.</div>
          <div className='my-5 text-sm md:text-base lg:text-lg'>With our comprehensive screening process, we hand-pick highly <br /> skilled candidates so you can onboard them in a matter of days.</div>

          {/* STEPS */}
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-3 mt-1 rounded-sm border border-gray-100 py-2 px-5 cursor-pointer ${activeStep === index ? 'bg-white shadow-lg' : ''}`} 
              onClick={() => toggleStep(index)}
              style={{ width: '100%', maxWidth: '500px' }}
            >
              <div className='flex items-center gap-3'>
                <div className='flex justify-center items-center p-4' style={{borderRadius: "50%", backgroundColor: activeStep === index ? "#8BA4FD" : "#ECECEC"}}>
                  <img className="h-3" src={activeStep === index ? videoPlayIconWhite : videoPlayIcon} alt="" />
                </div>
                <div><strong>Step {index + 1}:</strong> {step.title}</div>
              </div>
              {activeStep === index && (
                <div className='text-xs mt-1'>{step.description}</div>
              )}
            </div>
          ))}
        </div>
        <div className='w-full md:w-1/2 mt-10 md:mt-0'>
          {/* You can add any additional content for the right side here */}
        </div>
      </div>
    </div>
  );
}

export default ScreeningProcess;
