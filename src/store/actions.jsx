export function addHotspot(url, name) {
  return {
    type: "ADD_HOTSPOT",
    url,
    name
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
