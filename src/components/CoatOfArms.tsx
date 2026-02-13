import React from 'react';

interface CoatOfArmsProps {
  className?: string;
  size?: number;
}

export const CoatOfArms: React.FC<CoatOfArmsProps> = ({ className = '', size = 120 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer shield border */}
      <path
        d="M100 10L180 40V100C180 145 145 180 100 190C55 180 20 145 20 100V40L100 10Z"
        stroke="#C9A03F"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Inner shield */}
      <path
        d="M100 18L170 44V100C170 140 140 172 100 180C60 172 30 140 30 100V44L100 18Z"
        fill="rgba(201, 160, 63, 0.08)"
        stroke="#C9A03F"
        strokeWidth="1.5"
      />
      
      {/* Lion (left side) */}
      <g transform="translate(35, 65) scale(0.55)">
        {/* Lion body */}
        <ellipse cx="60" cy="80" rx="35" ry="30" fill="#C9A03F" />
        {/* Lion head */}
        <circle cx="60" cy="45" r="28" fill="#C9A03F" />
        {/* Mane */}
        <circle cx="60" cy="45" r="32" fill="none" stroke="#C9A03F" strokeWidth="3" strokeDasharray="8 4" />
        {/* Eyes */}
        <circle cx="50" cy="40" r="4" fill="#1A0B2E" />
        <circle cx="70" cy="40" r="4" fill="#1A0B2E" />
        {/* Nose */}
        <polygon points="60,50 55,58 65,58" fill="#1A0B2E" />
        {/* Mouth */}
        <path d="M60 58 Q60 68 50 72 M60 58 Q60 68 70 72" stroke="#1A0B2E" strokeWidth="2" fill="none" />
        {/* Legs */}
        <rect x="35" y="100" width="12" height="25" rx="3" fill="#C9A03F" />
        <rect x="73" y="100" width="12" height="25" rx="3" fill="#C9A03F" />
        {/* Tail */}
        <path d="M90 75 Q110 60 105 40" stroke="#C9A03F" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Paws */}
        <ellipse cx="41" cy="128" rx="10" ry="6" fill="#C9A03F" />
        <ellipse cx="79" cy="128" rx="10" ry="6" fill="#C9A03F" />
      </g>
      
      {/* Hummingbird (right side) */}
      <g transform="translate(105, 70) scale(0.5)">
        {/* Body */}
        <ellipse cx="70" cy="80" rx="15" ry="25" fill="#C9A03F" />
        {/* Head */}
        <circle cx="70" cy="45" r="18" fill="#C9A03F" />
        {/* Beak */}
        <path d="M85 42 L130 35 L85 48 Z" fill="#C9A03F" />
        {/* Eye */}
        <circle cx="78" cy="42" r="5" fill="#1A0B2E" />
        {/* Wing */}
        <ellipse cx="45" cy="70" rx="30" ry="18" fill="#C9A03F" transform="rotate(-20 45 70)" />
        <ellipse cx="45" cy="70" rx="25" ry="14" fill="none" stroke="#1A0B2E" strokeWidth="1" transform="rotate(-20 45 70)" />
        {/* Tail */}
        <path d="M65 100 L55 140 L70 105 L85 140 L75 100" fill="#C9A03F" />
        {/* Feather details */}
        <path d="M50 65 Q30 50 25 30" stroke="#C9A03F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M55 70 Q35 60 30 45" stroke="#C9A03F" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      
      {/* Center cross */}
      <g transform="translate(85, 85)">
        <rect x="12" y="0" width="6" height="40" fill="#C9A03F" />
        <rect x="0" y="12" width="30" height="6" fill="#C9A03F" />
      </g>
      
      {/* Decorative elements */}
      <circle cx="100" cy="155" r="8" fill="none" stroke="#C9A03F" strokeWidth="1.5" />
      <circle cx="100" cy="155" r="4" fill="#C9A03F" />
      
      {/* Bottom banner area */}
      <path d="M60 165 Q100 175 140 165" stroke="#C9A03F" strokeWidth="1" fill="none" />
    </svg>
  );
};

export default CoatOfArms;
