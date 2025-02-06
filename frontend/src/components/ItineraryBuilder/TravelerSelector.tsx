import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type TravelerOption = {
  label: string;
  description: string;
};

const travelerOptions: TravelerOption[] = [
  { label: "Just me", description: "A solo traveler in exploration" },
  { label: "A couple", description: "Two travelers in tandem" },
  { label: "Friends", description: "A bunch of thrill seekers" },
  { label: "Family", description: "A group of fun-loving adventurers" },
];

export default function TravelerSelector() {
  const [selected, setSelected] = useState(travelerOptions[0]);

  return (
    <div className="w-full px-4 py-8 text-gray-800">
      <h1 className="flex items-center justify-center pb-4 text-2xl font-bold">
        Who is Travelling?
      </h1>
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={selected}
          onChange={setSelected}
          className="space-y-2"
        >
          {travelerOptions.map((option) => (
            <RadioGroup.Option
              key={option.label}
              value={option}
              className={({ checked }) =>
                `relative flex cursor-pointer rounded-lg p-4 shadow-md transition-all focus:outline-none ${
                  checked
                    ? "bg-xploreSGVeryLight ring-2 ring-xploreSGLight dark:bg-xploreSG dark:ring-xploreSGVeryLight"
                    : "border border-gray-300 bg-white dark:border-gray-700 dark:bg-xploreSGDark"
                }`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{option.label}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        {option.description}
                      </p>
                    </div>
                    {checked && (
                      <CheckCircleIcon className="h-6 w-6 text-xploreSGLight transition-opacity dark:text-xploreSGAccent" />
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
