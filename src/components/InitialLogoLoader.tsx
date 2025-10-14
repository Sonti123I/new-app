import React from "react";

const InstagramLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        className="animate-spin"
        width="48"
        height="48"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f09433">
              <animate
                attributeName="stop-color"
                values="#f09433;#e6683c;#dc2743;#cc2366;#bc1888;#f09433"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#bc1888">
              <animate
                attributeName="stop-color"
                values="#bc1888;#f09433;#e6683c;#dc2743;#cc2366;#bc1888"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="url(#grad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="90 150"
          strokeDashoffset="0"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default InstagramLoader;
