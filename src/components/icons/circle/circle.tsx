import * as React from 'react';

function CircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={4.851} cy={4.34} r={4.085} />
    </svg>
  );
}

export { CircleIcon };
