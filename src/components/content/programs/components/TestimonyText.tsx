// TextComponent.tsx
import React from 'react';

interface TestimonyTextProps {
  name: string;
  testimony?: string;
}

const TestimonyText: React.FC<TestimonyTextProps> = ({ name, testimony }) => {
  return (
    <div className="p-3 text-xl italic flex flex-col text-center gap-y-1">
      <h2 className="font-semibold text-xl">{name}</h2>
      {testimony && <span className="text-justify text-base">{testimony}</span>}
    </div>
  );
};

export default TestimonyText;
