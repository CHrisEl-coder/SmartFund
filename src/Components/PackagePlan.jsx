import { useState } from 'react';
import { TfiAngleRight, TfiAngleLeft, TfiPackage } from 'react-icons/tfi'
import Fund from './Fund';

const Plan = [
    {
        package: 'Basic',
        days: '24 Hours',
        roi: '10%',
        amount: '$20 - $200',
        class: 'basic'
    },

    {
        package: 'Classic',
        days: '48 Hours',
        roi: '20%',
        amount: '$200 - $500',
        class: 'classic'
    },

    {
        package: 'Regular',
        days: '72 Hours',
        roi: '50%',
        amount: '$500 - $1000',
        class: 'regular'
    },

    {
        package: 'Professional',
        days: '96 Hours',
        roi: '100%',
        amount: '$1000 - $3000',
        class: 'prof'
    },

    {
        package: 'Advanced',
        days: '120 Hours',
        roi: '200%',
        amount: '$3000 - $5000',
        class: 'adv'
    },

    {
        package: 'Premium',
        days: '144 Hours',
        roi: '400%',
        amount: '$5000 - $10000',
        class: 'prem'
    }
];

const PackagePlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Plan.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Plan.length) % Plan.length);
  };

  return (
    <div className={Plan[currentSlide].class}>
        <div className='firstDiv'>
            <h1>{Plan[currentSlide].package}</h1>
            <TfiPackage className='icn'/>
        </div>
      
      <main >
        <h4>{Plan[currentSlide].amount}</h4>
        <div>
            <p className="duration">
                <span>Runtime :</span> 

                <span>{Plan[currentSlide].days}</span></p>

            <p className="roi">
                <span>Returns : </span> 

                <span>{Plan[currentSlide].roi}</span>
            </p>
        </div>

        <Fund/>
   
      </main>
      <div className="plan-controls">
        <TfiAngleLeft  onClick={prevSlide} className='arr'/>
        <TfiAngleRight onClick={nextSlide}  className='arr'/>
      </div>
    </div>
  );
};
export default PackagePlan