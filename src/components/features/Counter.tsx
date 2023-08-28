import React, { useEffect, useState, useMemo } from 'react';

import { Countdown } from '@Types/countdownType';
import { calculateCountdown } from '@Utils/countdown';
// Counter Component: Represents a countdown timer for an offer expiration.
export default function Counter() {
  // State to store countdown values
  const [countdown, setCountdown] = useState<Countdown>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const countdownTimer = () => {
    const endTime: Date = new Date('2023-10-23T23:59:59');
    
    // Calculate and update the countdown values
    const calculateTimeLeft = (): void => {
      const currentTime: Date = new Date();
      const timeDifference: number = endTime.getTime() - currentTime.getTime();
      
      if (timeDifference > 0) {
        // Calculate the countdown values using utility function
        const getCountdown: Countdown = calculateCountdown(timeDifference);
        
        // Update the countdown state with calculated values
        // Set the offer expiration date and time
        setCountdown(getCountdown);
      } else {
        // Set countdown to zero if offer has expired
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };
    // Initial calculation
    calculateTimeLeft();
    // Update the countdown every second
    const timer: NodeJS.Timeout = setInterval(calculateTimeLeft, 1000);
    // Clear the timer when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }
  // Added a memo so react remembers the function and doesn't re-render it on every change
  const memoCountdownTimer = useMemo(() => countdownTimer, [countdownTimer]);
  
  // moved function outside of hook to take advantage of memo and reduce render times
  useEffect(() => {
    memoCountdownTimer();
  }, []);

  return (
    // Countdown Display Section
    <section className="counterBlock">
      <p className="mb-6 text-center text-sm tracking-wider sm:text-lg xl:mb-14">
        Your offer ends in:
      </p>
      <div className="flex flex-nowrap justify-between min-[500px]:justify-around sm:justify-between">
        <div className="flex flex-col text-center">
          <span className="counterText">Days</span>
          <span className="counterNumber">{countdown.days}</span>
        </div>
        <div className="flex flex-col">
          <span className="counterText">Hours</span>
          <span className="counterNumber">{countdown.hours}</span>
        </div>
        <div className="flex flex-col">
          <span className="counterText">Minutes</span>
          <span className="counterNumber">{countdown.minutes}</span>
        </div>
        <div className="flex flex-col">
          <span className="counterText">Seconds</span>
          <span className="counterNumber">{countdown.seconds}</span>
        </div>
      </div>
    </section>
  );
}
