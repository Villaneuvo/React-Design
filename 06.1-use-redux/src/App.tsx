import { useReducer } from "react";

import "./App.css";
import AddItinerary from "./components/AddItinerary";
import ItineraryList from "./components/ItineraryList";
import {
  itineraryReducer,
  initialItinerary,
} from "./reducers/itinerary-reducer";
import { Initerary } from "./reducers/itinerary-reducer";

function App() {
  const [itineraries, dispatch] = useReducer(
    itineraryReducer,
    initialItinerary
  );

  function handleAdd(text: string) {
    dispatch({
      type: "ADD",
      id: Date.now(),
      text: text,
    });
  }

  function handleEdit(itinerary: Initerary) {
    dispatch({
      type: "EDIT",
      itinerary: itinerary,
    });
  }

  function handleDelete(id: number) {
    dispatch({
      type: "DELETED",
      id,
    });
  }

  return (
    <>
      <AddItinerary onAddItinerary={handleAdd} />
      <ItineraryList
        itineraries={itineraries}
        onEditItinerary={handleEdit}
        onDeleteItinerary={handleDelete}
      />
    </>
  );
}

export default App;
