"use client";

import { useEvents } from '@/hooks/useEvents';
import { useCircles } from '@/hooks/useCircles';
import { Loader2 } from 'lucide-react';

import { useState } from 'react';
import { EventCard } from '@/components/events/EventCard';
import { CircleButton } from '@/components/circles/CircleButton';

export default function Home() {
  const [events] = useState([
    {
      title: "BATCH #989 DEMO DAY",
      date: "11/18",
      attendees: 14,
      private: false,
      imageUrl: "/images/event_default.jpg"
    },
    {
      title: "SURF AT MUZIES",
      date: "07/25",
      attendees: 14,
      private: true,
      imageUrl: "/images/event_default.jpg"
    },
    // Add more sample events
    {
      title: "BOKKE & BRAAI",
      date: "07/25",
      attendees: 14,
      private: false,
      imageUrl: "/images/event_default.jpg"
    },
    {
      title: "BATCH #989 DEMO DAY",
      date: "11/18",
      attendees: 14,
      private: false,
      imageUrl: "/images/event_default.jpg"
    },
    {
      title: "SURF AT MUZIES",
      date: "07/25",
      attendees: 14,
      private: false,
      imageUrl: "/images/event_default.jpg"
    },
    // Add more sample events
    {
      title: "BOKKE & BRAAI",
      date: "07/25",
      attendees: 14,
      private: false,
      imageUrl: "/images/event_default.jpg"
    },
    {
      title: "BATCH #989 DEMO DAY",
      date: "11/18",
      attendees: 14,
      private: true,
      imageUrl: "/images/event_default.jpg"
    },
    {
      title: "SURF AT MUZIES",
      date: "07/25",
      attendees: 14,
      private: false,
      imageUrl: "/images/event_default.jpg"
    },
    // Add more sample events
    {
      title: "BOKKE & BRAAI",
      date: "07/25",
      attendees: 14,
      private: true,
      imageUrl: "/images/event_default.jpg"
    }
  ]);

  const [circles] = useState([
    // Add sample circles
    {
      name: "Family",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F050AE"
    },
    {
      name: "Work",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#1287DB"
    },
    {
      name: "Ball",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F4AE6E"
    },
    {
      name: "Family",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F050AE"
    },
    {
      name: "Work",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#1287DB"
    },
    {
      name: "Ball",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F4AE6E"
    },
    {
      name: "Family",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F050AE"
    },
    {
      name: "Work",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#1287DB"
    },
    {
      name: "Ball",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F4AE6E"
    },
    {
      name: "Family",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F050AE"
    },
    {
      name: "Work",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#1287DB"
    },
    {
      name: "Ball",
      imageUrl: "/images/circle_default.jpg",
      borderColor: "#F4AE6E"
    }
  ]);

  return (
    <div className="h-screen w-screen text-white overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-full">
        {/* Left Sidebar - fixed height */}
        <div className="h-full py-8 px-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white" />
            <h1 className="text-4xl font-bold">CIRCLES</h1>
          </div>

          <button className="text-center hover:text-gray-300 transition-colors">
            Sign in / Sign up
          </button>

          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-center">JOIN A CIRCLE</h2>
            <div className="grid grid-cols-2 gap-4">
              {circles.map((circle, index) => (
                <CircleButton key={index} circle={circle} />
              ))}
            </div>
          </div>

          <button className="text-center hover:text-gray-300 transition-colors mt-auto">
            Logout
          </button>
        </div>

        {/* Events Section - scrollable */}
        <div className="flex-1 h-full hide-scrollbar overflow-y-auto p-8 ps-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden h-screen flex flex-col">
        {/* Mobile Header */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white" />
            <h1 className="text-4xl font-bold">CIRCLES</h1>
          </div>
          <button className="hover:text-gray-300 transition-colors">
            Sign in / Sign up
          </button>
        </div>

        {/* Mobile Circles Scroll */}
        <div className="w-full px-4">
          <p className="mb-4">The social platform for all your events</p>
          <h2 className="text-lg font-semibold mb-4">YOUR CIRCLES</h2>
          <div className="overflow-x-auto hide-scrollbar pb-4">
            <div className="flex gap-4 min-w-min">
              {circles.map((circle, index) => (
                <CircleButton key={index} circle={circle} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Events - scrollable */}
        <div className="flex-1 hide-scrollbar overflow-y-auto px-4">
          <div className="grid grid-cols-1 gap-6 pb-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
