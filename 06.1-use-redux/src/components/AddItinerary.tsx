import { useState } from "react";

interface onAddProps {
  onAddItinerary: (text: string) => void;
}

function AddItinerary({ onAddItinerary }: onAddProps) {
  const [itinerary, setItinerary] = useState("");

  return (
    <div>
      <input
        type="text"
        value={itinerary}
        onChange={(event) => setItinerary(event.target.value)}
        placeholder="Add Destination"
      />
      <button
        onClick={() => {
          setItinerary("");
          onAddItinerary(itinerary);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddItinerary;
