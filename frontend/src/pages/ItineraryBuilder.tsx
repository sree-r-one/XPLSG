import {
  TravelerSelector,
  TravelDates,
  Budget,
  Interests,
} from "../components/ItineraryBuilder";
// import TravelDates from "../components/ItineraryBuilder/TravelDates";
const ItineraryBuilder = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl items-center justify-center">
        <h1 className="m-5 flex items-center justify-center py-4 text-8xl">
          Itinerary Builder
        </h1>
        <p className="m-5 flex content-center items-center justify-center py-4 text-center text-2xl text-gray-500">
          Plan your perfect trip effortlessly by customizing every detail of
          your adventure. Whether you’re traveling for relaxation, adventure, or
          discovery, this tool helps you tailor a personalized itinerary to
          match your interests and budget.
        </p>
      </div>
      <TravelerSelector />
      <TravelDates />
      <Budget />
      <Interests />
    </div>
  );
};

export default ItineraryBuilder;
