import { createStore } from "redux";

const INITIAl_STATE = {
  isAddingHotspot: false,
  hotspots: []
};

function reducer(state = INITIAl_STATE, action) {
  if (action.type === "TOGGLE_IS_ADDING_HOTSPOT")
    return { ...state, isAddingHotspot: true };

  if (action.type === "DELETE_HOTSPOT") {
    const newList = [...state.hotspots].filter(
      item => item.id !== action.hotspot.id
    );
    return { ...state, hotspots: newList };
  }

  if (action.type === "ADD_HOTSPOT") {
    action.event.preventDefault();
    const newList = [...state.hotspots];
    const newItem = { ...action.item, id: Math.random() };
    newList.push(newItem);
    return { ...state, hotspots: newList, isAddingHotspot: false };
  }

  return state;
}

const store = createStore(reducer);

export default store;
