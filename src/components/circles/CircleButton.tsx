"use client";

import Image from 'next/image';

interface Circle {
  name: string;
  imageUrl: string;
  borderColor?: string;
}

interface CircleButtonProps {
  circle: Circle;
}

export const CircleButton = ({ circle }: CircleButtonProps) => {
  return (
    <button
      style={{ borderColor: circle.borderColor || 'white' }}
      className={`w-16 h-16 p-1 rounded-full border-2 overflow-hidden transition-transform hover:scale-105`}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src={circle.imageUrl || '/api/placeholder/64/64'}
          alt={circle.name}
          className="object-cover"
          fill
        />
      </div>
    </button>
  );
};
