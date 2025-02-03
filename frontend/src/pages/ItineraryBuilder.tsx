import {
  TravelerSelector,
  TravelDates,
  Budget,
  Interests,
} from "../components/ItineraryBuilder";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import progressGif from "../assets/progress.gif";

const ItineraryBuilder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuildItinerary = () => {
    // Simulate "Build Itinerary" action (could be connected to API calls)
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="to-orange-400-50 relative overflow-hidden bg-gradient-to-br from-purple-50 via-yellow-50">
      {/* Background Blurred Patterns */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600 opacity-20 blur-2xl"></div>
      <div className="h-200 absolute bottom-0 right-0 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-orange-600 opacity-30 blur-2xl"></div>
      <div className="absolute right-1/2 top-1/3 h-64 w-64 rounded-full bg-pink-300 opacity-20 blur-2xl"></div>

      {/* Page Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <h1 className="m-5 flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-100 bg-clip-text py-4 text-8xl font-extrabold text-transparent">
          Itinerary Builder
        </h1>
        <p className="m-5 flex content-center items-center justify-center py-4 text-center text-2xl text-gray-700 dark:text-gray-300">
          Plan your perfect trip effortlessly by customizing every detail of
          your adventure. Whether you’re traveling for relaxation, adventure, or
          discovery, this tool helps you tailor a personalized itinerary to
          match your interests and budget.
        </p>

        {/* Component Sections */}
        <div className="mt-10 space-y-16">
          <TravelerSelector />
          <TravelDates />
          <Budget />
          <Interests />
        </div>

        {/* Build Itinerary Button */}
        <div className="mt-16 flex items-center justify-center">
          <button
            onClick={handleBuildItinerary}
            className="rounded-3xl bg-xploreSGDark px-10 py-4 text-2xl font-bold text-white shadow-md transition-all duration-300 hover:bg-xploreSG hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-xploreSGAccent"
          >
            Build Itinerary
          </button>
        </div>
      </div>

      {/* Modal Alert */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-20">
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <Dialog.Title className="text-2xl font-bold text-gray-900">
              Itinerary is being built!
            </Dialog.Title>
            <div className="mt-4 flex justify-center">
              <img
                src={progressGif}
                alt="Loading progress"
                className="h-24 w-24"
              />
              <p className="mt-2 pl-4 text-gray-700">
                Your personalized itinerary has been successfully built. You can
                now review it or make any necessary adjustments.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="rounded-md bg-xploreSGDark px-4 py-2 text-white hover:bg-xploreSG focus:outline-none focus:ring-2 focus:ring-xploreSGAccent"
              >
                Got it, thanks!
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ItineraryBuilder;
