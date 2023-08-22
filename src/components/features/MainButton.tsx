import React from 'react';
// MainButton Component: Represents a styled button for booking appointments.
const MainButton = ({ overwrite }: { overwrite: string }): JSX.Element => {
  return <button className={`button ${overwrite}`}>Book my appointment</button>;
};

export default MainButton;
