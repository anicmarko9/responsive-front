import { Countdown } from '@Types/countdownType';

export const calculateCountdown = (timeRemaining: number): Countdown => {
  const days: number = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes: number = Math.floor((timeRemaining / 1000 / 60) % 60);
  const seconds: number = Math.floor((timeRemaining / 1000) % 60);

  return {
    days: padNumber(days),
    hours: padNumber(hours),
    minutes: padNumber(minutes),
    seconds: padNumber(seconds),
  };
};

// This function represents numbre in double digits (7 -> 07)
const padNumber = (number: number): string => {
  return number.toString().padStart(2, '0');
};
