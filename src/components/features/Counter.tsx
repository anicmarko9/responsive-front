import React, { useEffect, useState } from 'react';
import { Countdown } from '../../types/countdownType';
import { calculateCountdown } from '../../utils/countdown';

const Counter = (): JSX.Element => {
  const [countdown, setCountdown] = useState<Countdown>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // offer expiration date
    const endTime: Date = new Date('2023-09-05T23:59:59');

    const calculateTimeLeft = (): void => {
      const currentTime: Date = new Date();
      const timeDifference: number = endTime.getTime() - currentTime.getTime();

      if (timeDifference > 0) {
        const getCountdown: Countdown = calculateCountdown(timeDifference);

        setCountdown(getCountdown);
      } else {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    calculateTimeLeft();

    const timer: NodeJS.Timeout = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
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
};

export default Counter;
