"use client";

import Image from 'next/image';
import { Users } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  attendees: number;
  private: boolean;
  imageUrl?: string;
}

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg ">
      <div className="relative h-80 w-full">
        <Image
          src={event.imageUrl || '/images/event_default.jpg'}
          alt={event.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 w-full p-4 text-white">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span className="text-sm">{event.attendees}</span>
          </div>
          <div className={`w-4 h-4 rounded-full ${event.private ? 'bg-white' : 'border-2 border-white'}`} />
          <p className="text-sm opacity-80">{event.date}</p>
        </div>
      </div>
    </div>
  );
};
