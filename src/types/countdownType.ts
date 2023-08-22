// Represents the structure of a countdown with days, hours, minutes, and seconds.
export type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};
// Interface defining the structure of a testimony object.
export interface ITestimony {
  imgSrc: string;
  name: string;
  testimony: string;
}
// Interface outlining the structure of a weight loss program.
export interface IProgram {
  programName: string;
  duration: string;
  description: string;
  imgSrc: string;
}
