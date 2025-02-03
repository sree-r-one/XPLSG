import React, { useState } from "react";

type TravelerOption = {
  label: string;
  description: string;
};

const travelerOptions: TravelerOption[] = [
  { label: "Just me", description: "A solo traveler in Exploration" },
  { label: "A couple", description: "Two Travelers in Tandem" },
  { label: "Friends", description: "A Bunch of Thrill Seekers" },
  { label: "Family", description: "A Group of Fun-Loving Adventurers" },
];

const TravelerSelector: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Just me");

  const handleChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Choose your travelers</h2>
      <div className="space-y-4">
        {travelerOptions.map((option) => (
          <label
            key={option.label}
            className={`flex cursor-pointer items-center rounded-lg border p-4 transition-all ${
              selectedOption === option.label
                ? "border-xploreSG bg-xploreSGVeryLight"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="traveler"
              value={option.label}
              checked={selectedOption === option.label}
              onChange={() => handleChange(option.label)}
              className="hidden"
            />
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                selectedOption === option.label
                  ? "bg-xploreSGLight"
                  : "border-gray-400"
              }`}
            >
              {selectedOption === option.label && (
                <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
              )}
            </div>
            <div className="ml-4">
              <span className="block font-medium">{option.label}</span>
              <span className="text-sm text-gray-500">
                {option.description}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TravelerSelector;
