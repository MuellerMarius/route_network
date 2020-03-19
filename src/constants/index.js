// Reducer
export const CHANGE_PROJECTION = "CHANGE_PROJECTION";
export const CHANGE_THEME = "CHANGE_THEME";
export const LOAD_ROUTES = "LOAD_ROUTES";
export const ADD_ROUTE = "ADD_ROUTE";
export const DEL_ROUTE = "DEL_ROUTE";
export const EDIT_ROUTE = "EDIT_ROUTE";

// Map Display
export const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const projEurope = {
  rotate: [-20.0, -52.0, 0],
  scale: 700
};

export const projWorld = {
  center: [0, 30],
  scale: 155,
  rotate: [0.0, -0.1, 0]
};
