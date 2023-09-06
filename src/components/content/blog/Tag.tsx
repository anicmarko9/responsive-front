import React from 'react';
import { slug } from 'github-slugger';

interface Props {
  text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <a
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-normal uppercase text-primary hover:text-opacity-70 "
    >
      {text.split(' ').join('-')}
    </a>
  );
};

export default Tag;
