export function addHotspot(event, item) {
  return {
    type: "ADD_HOTSPOT",
    event,
    item
  };
}

export function deleteHotspot(hotspot) {
  return {
    type: "DELETE_HOTSPOT",
    hotspot
  };
}

export function toggleIsAddingHotspot() {
  return { type: "TOGGLE_IS_ADDING_HOTSPOT" };
}
