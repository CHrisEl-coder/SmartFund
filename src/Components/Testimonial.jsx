import { useState, useEffect } from 'react';




const TestimonialSlider = () => {

    const testimonials = [
        {
            name: 'James Wilson',
            image: '/assets/ben.jpg',
            words: 'I love smartfunds! This is an amazing service and it has saved me and my family so much. I plan to use it for a long time to come',
            state: 'Huntsvile, Alabama'
        },
    
        {
            name: 'Aisha Jacobs',
            image: '/assets/aisha.jpg',
            words: 'I have tried a lot of similar platform and smartfunds is the best!',
            state: 'Guateng, South Africa'
        },
    
        {
            name: 'Amirul Raja',
            image: '/assets/john.jpg',
            words: "If you want to take your finance to the next level, use smartfunds and don't look any further.",
            state: 'Sabah, Malaysia'
        },
    
        {
            name: 'Chritiana Johnson',
            image: 'assets/christiana.jpg',
            words: 'I would recommend smartfunds for anyone trying to get there finances in the right track. It has saved me so many time',
            state: 'Ontario, Canada'
        },
    
        {
            name: 'Paul Garcia',
            image: '/assets/paul.jpg',
            words: 'smartfunds is the ultimate investment platform, since i started using the platform i have had and easy time with both the depositing and witdrawal, Thank You Smartfunds!',
            state: 'Conneticut, Usa'
        },
    
        {
            name: 'Billy Wilson',
            image: '/assets/Billy.jpg',
            words: 'smartfunds has really helped me. Definitely worth the investment. Thank you!',
            state: 'Cleveland, Ohio'
        }
    
    
    ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 10000); // Transition every 5 seconds

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <img src={testimonials[currentSlide].image} alt="user pic" />
        <p className="testimonial-content">{testimonials[currentSlide].words}</p>
        <p className="testimonial-author">- {testimonials[currentSlide].name}</p>
        <p className="testimonial-state">- {testimonials[currentSlide].state}</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
