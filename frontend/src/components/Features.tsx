import {
  CloudArrowUpIcon,
  LockClosedIcon,
  MapPinIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    name: "Curated Itineraries",
    description:
      "Explore Singapore like never before with personalized itineraries tailored to your interests and preferences.",
    icon: MapPinIcon,
  },
  {
    name: "Top Attractions",
    description:
      "Discover must-see attractions, hidden gems, and local favorites that showcase the beauty and culture of Singapore.",
    icon: TicketIcon,
  },
  {
    name: "Real-Time Updates",
    description:
      "Stay up-to-date with live information about opening hours, events, and availability for key attractions.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Safe & Secure Travel",
    description:
      "Navigate Singapore confidently with reliable recommendations, safety tips, and secure booking options.",
    icon: LockClosedIcon,
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-600">
            Explore Singapore
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Your Gateway to the Lion City
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Experience the vibrant culture, rich history, and breathtaking
            sights of Singapore with our comprehensive travel guide.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
