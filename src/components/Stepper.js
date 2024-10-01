import React from 'react';
import './styles.css';

const Stepper = ({ steps, activeStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index+1 <= activeStep ? 'active' : ''}`}>
          <div className="step-circle">
            {index < activeStep ? '✓' : ''}
          </div>
          <div className="step-label">
            <strong className='step-label-label'>{step.label}</strong>
            <br/>
            <small className='step-label-date'>{step.date}</small>
          </div>
          {index < steps.length - 1 && <div className={`step-line ${index+1 <= activeStep && index < activeStep - 1 ? 'active' : ''}`}></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
