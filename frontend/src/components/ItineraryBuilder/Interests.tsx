import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type InterestOption = {
  label: string;
  description: string;
};

const interestOptions: InterestOption[] = [
  { label: "Food & Drinks", description: "Explore the Food Culture" },
  { label: "Nature & Adventure", description: "Outdoor Activities" },
  { label: "History & Culture", description: "Learn about the Local History" },
  { label: "Shopping", description: "Retail Therapy" },
  { label: "Nightlife", description: "Experience the Nightlife" },
  { label: "Relaxation", description: "Unwind and Relax" },
  { label: "Arts & Entertainment", description: "Cultural Experiences" },
  { label: "Sports", description: "Sports & Fitness" },
  { label: "Sightseeing", description: "Tourist Attractions" },
  { label: "Photography", description: "Capture the Moment" },
  { label: "Beaches", description: "Sun, Sand, and Sea" },
  { label: "Wildlife", description: "Animal Encounters" },
  { label: "Theme Parks", description: "Thrills and Excitement" },
];

export default function Interests() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Toggle selection for a given option
  const toggleOption = (label: string) => {
    setSelectedOptions(
      (prev) =>
        prev.includes(label)
          ? prev.filter((item) => item !== label) // Deselect if already selected
          : [...prev, label], // Select if not selected
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="flex items-center justify-center pb-4 text-2xl font-bold">
        Interests
      </h1>
      {/* Grid layout for options */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        {interestOptions.map((option) => {
          const isChecked = selectedOptions.includes(option.label);

          return (
            <div
              key={option.label}
              onClick={() => toggleOption(option.label)}
              className={`relative flex cursor-pointer rounded-lg p-4 shadow-md transition-all ${
                isChecked
                  ? "bg-xploreSGVeryLight ring-2 ring-xploreSGLight dark:bg-xploreSG dark:ring-xploreSGVeryLight"
                  : "border border-gray-300 bg-white dark:border-gray-700 dark:bg-xploreSGDark"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{option.label}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {option.description}
                  </p>
                </div>
                {isChecked && (
                  <CheckCircleIcon className="h-6 w-6 text-xploreSGLight transition-opacity dark:text-xploreSGAccent" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
