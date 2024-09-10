import { useState } from "react";
import { Initerary as Init } from "../reducers/itinerary-reducer";

interface ItineraryProps {
  itineraries: Init[];
  onEditItinerary: (itinerary: Init) => void;
  onDeleteItinerary: (id: number) => void;
}

interface ItineraryProp {
  itinerary: Init;
  onEdit: (itinerary: Init) => void;
  onDelete: (id: number) => void;
}

function ItineraryList({
  itineraries,
  onEditItinerary,
  onDeleteItinerary,
}: ItineraryProps) {
  console.log(itineraries);

  return (
    <ul>
      {itineraries.map((itinerary) => {
        return (
          <li key={itinerary.id}>
            {
              <Itinerary
                itinerary={itinerary}
                onEdit={onEditItinerary}
                onDelete={onDeleteItinerary}
              />
            }
          </li>
        );
      })}
    </ul>
  );
}

function Itinerary({ itinerary, onEdit, onDelete }: ItineraryProp) {
  const [isEditing, setIsEditing] = useState(false);
  let itineraryContent;
  if (isEditing) {
    itineraryContent = (
      <>
        <input
          type="text"
          value={itinerary.text}
          onChange={(event) =>
            onEdit({ ...itinerary, text: event.target.value })
          }
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    itineraryContent = (
      <>
        <p>{itinerary.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) =>
          onEdit({ ...itinerary, isDone: event.target.checked })
        }
      />
      {itineraryContent}
      <button onClick={() => onDelete(itinerary.id)}>Delete</button>
    </div>
  );
}

export default ItineraryList;
