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

export interface IBurgerMenuItem {
  href: string;
  icon: React.ReactElement;
  text: string;
}

// Interface outlining Product
export interface IProduct {
  description: string;
  imgSrc: string;
  title: string;
  price: string;
}

// Interface outlining Location
export interface ILocation {
  name: string;
  imgSrc: string;
  schedule: string;
  address: string;
}