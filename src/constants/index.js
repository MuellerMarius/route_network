// Colors
export const flightColorLight = ["#000000", "#1A96C8", "#ff0000", "#ff0000"];
export const markerColorLight = "#888888";
export const geoColorLight = "#D6D6DA";
export const geoStrokeColorLight = "#FFFFFF";

export const flightColorDark = ["#1A96C8", "#4b9137", "#BCBCBC", "#ff0000"];
export const markerColorDark = "#AAAAAA";
export const geoColorDark = "#1A1A1A";
export const geoStrokeColorDark = "#333333";

// Reducer
export const LOAD_ROUTES = "LOAD_ROUTES";
export const ADD_ROUTE = "ADD_ROUTE";
export const DEL_ROUTE = "DEL_ROUTE";
export const EDIT_ROUTE = "EDIT_ROUTE";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const TOGGLE_VIEW = "TOGGLE_VIEW";
export const INIT_CATEGORIES = "INIT_CATEGORIES";
export const TOGGLE_CAT_DISPLAY = "TOGGLE_CAT_DISPLAY";

// Map Display
export const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const projEurope = {
  rotate: [-15.0, -50.0, 0],
  scale: 840
};

export const projWorld = {
  center: [0, 30],
  scale: 175,
  rotate: [0.0, -0.1, 0]
};

// Data Editor
export const airportAPI = "http://localhost:1337/";
export const tableColumns = [
  { title: "Departure Airport", field: "from" },
  { title: "Destination Airport", field: "to" },
  { title: "Category", field: "cat" }
];

export const tableOptions = {
  pageSize: 8,
  pageSizeOptions: [8],
  draggable: false,
  headerStyle: {
    backgroundColor: "#f9f9f9",
    fontWeight: 700
  }
};

// CSV
export const csvHeader = [
  {
    id: "id"
  },
  {
    id: "from"
  },
  {
    id: "fromCoordLat"
  },
  {
    id: "fromCoordLong"
  },
  {
    id: "to"
  },
  {
    id: "toCoordLat"
  },
  {
    id: "toCoordLong"
  },
  {
    id: "cat"
  }
];
