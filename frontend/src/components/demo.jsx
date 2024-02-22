import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import FetchData from './fetch_data';

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div class='flex flex-col w-full h-full space-y-16 my-36 justify-center'>
      <div class='w-auto h-20 m-12 sticky top-4 border border-orchid'>
        <FetchData />
      </div>
      <div class="flex justify-center w-full h-auto">
        <div class='flex justify-center m-4 w-auto h-20 sticky top-1/2 border border-orchid space-x-6'>
          I'm sticky. The current triggered step index is: {currentStepIndex}
        </div>
        <div class="flex flex-col space-y-36 justify-center">
          <Scrollama offset={0.5} onStepEnter={onStepEnter}>
            {[1, 2, 3, 4].map((_, stepIndex) => (
              <Step data={stepIndex} key={stepIndex}>
                <div class={`w-auto h-96 my-96 mx-4 border-gray-400 ${currentStepIndex === stepIndex ? 'opacity-100' : 'opacity-20'}`}>
                  I'm a Scrollama Step of index {stepIndex}
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
      </div>
    </div>
  );
};

export default ScrollamaDemo;
