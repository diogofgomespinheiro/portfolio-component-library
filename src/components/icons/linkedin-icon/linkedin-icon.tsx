import * as React from 'react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M26.4951 26V25.9992H26.5001V18.6642C26.5001 15.0758 25.7276 12.3116 21.5326 12.3116C19.5159 12.3116 18.1626 13.4183 17.6101 14.4675H17.5517V12.6466H13.5742V25.9992H17.7159V19.3875C17.7159 17.6467 18.0459 15.9633 20.2017 15.9633C22.3259 15.9633 22.3576 17.95 22.3576 19.4992V26H26.4951Z"
          fill={props.fill}
        />
        <path
          d="M6.83008 12.6475H10.9767V26H6.83008V12.6475Z"
          fill={props.fill}
        />
        <path
          d="M8.90167 6C7.57583 6 6.5 7.07583 6.5 8.40167C6.5 9.7275 7.57583 10.8258 8.90167 10.8258C10.2275 10.8258 11.3033 9.7275 11.3033 8.40167C11.3025 7.07583 10.2267 6 8.90167 6V6Z"
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

export { LinkedinIcon };
