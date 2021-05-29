import * as React from 'react';

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M25.25 9.125H7.75C7.06 9.125 6.5 9.685 6.5 10.375V11.0862L16.5 15.3212L26.5 11.085V10.375C26.5 9.685 25.94 9.125 25.25 9.125Z"
          fill={props.fill}
        />
        <path
          d="M16.7437 16.575C16.6662 16.6087 16.5825 16.625 16.5 16.625C16.4175 16.625 16.3337 16.6087 16.2562 16.575L6.5 12.4437V21.625C6.5 22.315 7.06 22.875 7.75 22.875H25.25C25.94 22.875 26.5 22.315 26.5 21.625V12.4437L16.7437 16.575Z"
          fill={props.fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(6.5 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { EmailIcon };
