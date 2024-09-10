export interface Initerary {
  id: number;
  text: string;
  isDone: boolean;
}

type Action =
  | { type: "ADD"; id: number; text: string }
  | { type: "EDIT"; itinerary: Initerary }
  | { type: "DELETED"; id: number };

const localStorageData = JSON.parse(
  localStorage.getItem("itineraries") || "[]"
);

export const initialItinerary = localStorageData
  ? localStorageData
  : [
      { id: 0, text: "Denpasar, Bali", isDone: true },
      { id: 1, text: "Labuan Bajo, NTB", isDone: false },
      { id: 2, text: "Flores, NTT", isDone: false },
    ];

export function itineraryReducer(itineraries: Initerary[], action: Action) {
  switch (action.type) {
    case "ADD": {
      const result = [
        ...itineraries,
        { id: action.id, text: action.text, isDone: false },
      ];

      localStorage.setItem("itineraries", JSON.stringify(result));
      return result;
    }
    case "EDIT": {
      const result = itineraries.map((item) => {
        return item.id === action.itinerary.id ? action.itinerary : item;
      });

      localStorage.setItem("itineraries", JSON.stringify(result));
      return result;
    }
    case "DELETED": {
      const result = itineraries.filter(
        (itinerary) => itinerary.id !== action.id
      );

      localStorage.setItem("itineraries", JSON.stringify(result));
      return result;
    }
  }
}
