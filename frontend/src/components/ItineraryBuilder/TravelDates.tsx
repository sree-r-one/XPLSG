import { useState } from "react";
import Flatpickr from "react-flatpickr";
import { CalendarIcon } from "@heroicons/react/24/outline";
// import "flatpickr/dist/themes/material_blue.css"; // Replace this with a theme of your choice
import "./custom-calendar.css";

export default function TravelDates() {
  // Type-safe state for date selection
  const [dates, setDates] = useState<Date[]>([]);

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-900 dark:text-white">
      <h1 className="flex items-center justify-center pb-4 text-2xl font-bold">
        Travel Dates
      </h1>
      {/* Flatpickr Date Range Picker */}
      <div className="relative">
        <Flatpickr
          options={{
            mode: "range",
            dateFormat: "d M Y",
            minDate: "today",
          }}
          value={dates}
          onChange={(selectedDates: Date[]) => setDates(selectedDates)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Display selected start and end dates */}
      {dates.length === 2 && (
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-xploreSGLight" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Start at
              </p>
              <p className="font-semibold">{dates[0].toLocaleDateString()}</p>
            </div>
          </div>

          <span className="text-gray-500 dark:text-gray-400">→</span>

          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-xploreSGLight" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ends at
              </p>
              <p className="font-semibold">{dates[1].toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
