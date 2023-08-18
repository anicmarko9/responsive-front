export type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export interface ITestimony {
  imgSrc: string;
  name: string;
  testimony: string;
}

export interface IProgram {
  programName: string;
  duration: string;
  description: string;
  imgSrc: string;
}
