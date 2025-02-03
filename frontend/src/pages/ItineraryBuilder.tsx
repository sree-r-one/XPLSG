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
      ItineraryBuilder
      <TravelerSelector />
      <TravelDates />
      <Budget />
      <Interests />
    </div>
  );
};

export default ItineraryBuilder;
