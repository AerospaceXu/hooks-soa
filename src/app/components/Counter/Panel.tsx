import React from 'react';

interface Props {
  count: number;
}

const Panel: React.FC<Props> = ({ count }) => {
  return <h2>{count}</h2>;
};

export default Panel;
