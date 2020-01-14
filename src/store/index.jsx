import { createStore } from "redux";

const INITIAl_STATE = {
  isAddingHotspot: false,
  hotspots: [],
  positions: []
};

function reducer(state = INITIAl_STATE, action) {
  if (action.type === "TOGGLE_IS_ADDING_HOTSPOT")
    return { ...state, isAddingHotspot: !state.isAddingHotspot };

  if (action.type === "DELETE_HOTSPOT") {
    const newList = [...state.hotspots].filter(
      item => item.id !== action.hotspot.id
    );
    localStorage.clear();
    localStorage.setItem("Hotspots", JSON.stringify(newList));
    return { ...state, hotspots: newList };
  }

  if (action.type === "ADD_HOTSPOT") {
    let newList = [...state.hotspots];
    const newItem = {
      id: newList.length,
      name: action.name,
      url: action.url
    };
    newList.push(newItem);
    const newState = {
      ...state,
      hotspots: newList,
      isAddingHotspot: false
    };
    localStorage.clear();
    localStorage.setItem("Hotspots", JSON.stringify(newList));
    return newState;
  }

  return state;
}

const store = createStore(reducer);

export default store;
