import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const ArrowIcon = ({ className, ...props }: Props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' className={className} {...props}>
      <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
    </svg>
  );
};

export default ArrowIcon;
