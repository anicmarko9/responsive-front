// TextComponent.tsx
import React from 'react';

interface TestimonyTextProps {
  name: string;
  testimony?: string;
}

const TestimonyText: React.FC<TestimonyTextProps> = ({ name, testimony }) => {
  return (
    <div className="flex flex-col gap-y-1 p-3 text-center text-xl italic">
      <h2 className="text-xl font-semibold">{name}</h2>
      {testimony && <span className="text-justify text-base">{testimony}</span>}
    </div>
  );
};

export default TestimonyText;
