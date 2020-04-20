// Colors
export const flightColorLight = [
  '#f21d92D9',
  '#3dacd9D9',
  '#5e5e5eD9',
  '#4b9137D9',
  '#ff0000D9',
];
export const markerColorLight = '#888888';
export const geoColorLight = '#D6D6DA';
export const geoStrokeColorLight = '#f4f4f4';

export const flightColorDark = [
  '#A91566D9',
  '#1A96C8D9',
  '#BCBCBCD9',
  '#4b9137D9',
  '#ff0000D9',
];
export const markerColorDark = '#AAAAAA';
export const geoColorDark = '121212';
export const geoStrokeColorDark = '#444444';
export const strokeWidthXl = 1;
export const strokeWidthLg = 1;
export const strokeWidthSm = 1.5;
export const circleWidthXl = 2;
export const circleWidthLg = 2;
export const circleWidthSm = 3;

// Map Display - TopoJSON by https://github.com/topojson/world-atlas
export const geoUrlSm =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
export const geoUrlLg =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

export const projection = 'geoMercator';
export const projEurope = {
  center: [17, 49],
  scale: 550,
};

export const projWorld = {
  center: [0, 30],
  scale: 175,
  rotate: [0.0, -0.1, 0],
};

// Data Editor
export const screenMdWidth = 764;
export const screenLgWidth = 992;
export const screenXlWidth = 1200;
export const airportAPI = 'http://localhost:1337/';
export const tableColumnsLong = [
  { title: 'Departure Airport', field: 'from' },
  { title: 'Destination Airport', field: 'to' },
  { title: 'Category', field: 'cat' },
];
export const tableColumnsShort = [
  { title: 'From', field: 'from' },
  { title: 'To', field: 'to' },
  { title: 'Category', field: 'cat' },
];

export const tableOptions = {
  pageSize: 8,
  pageSizeOptions: [8],
  draggable: false,
  headerStyle: {
    backgroundColor: '#f9f9f9',
    fontWeight: 700,
  },
};

// CSV
export const csvHeader = [
  {
    id: 'id',
  },
  {
    id: 'from',
  },
  {
    id: 'fromCoordLat',
  },
  {
    id: 'fromCoordLong',
  },
  {
    id: 'to',
  },
  {
    id: 'toCoordLat',
  },
  {
    id: 'toCoordLong',
  },
  {
    id: 'cat',
  },
];

// Sample routes
export const sampleRoutes = [
  {
    id: 0,
    from: 'EDDF',
    fromCoordLat: 50.033333,
    fromCoordLong: 8.570556,
    to: 'EDDS',
    toCoordLat: 48.68989944,
    toCoordLong: 9.221960068,
    cat: 'EMJ190',
  },
  {
    id: 114,
    from: 'VVTS',
    fromCoordLat: 10.81879997,
    fromCoordLong: 106.6520004,
    to: 'VVPQ',
    toCoordLat: 10.1698,
    toCoordLong: 103.9931,
    cat: 'PAX',
  },
  {
    id: 115,
    from: 'VVTS',
    fromCoordLat: 10.81879997,
    fromCoordLong: 106.6520004,
    to: 'VVDN',
    toCoordLat: 16.04389954,
    toCoordLong: 108.1989975,
    cat: 'PAX',
  },
  {
    id: 15,
    from: 'EDDF',
    fromCoordLat: 50.033333,
    fromCoordLong: 8.570556,
    to: 'VVDN',
    toCoordLat: 16.04389954,
    toCoordLong: 108.1989975,
    cat: 'PAX',
  },
  {
    id: 160,
    from: 'EDDF',
    fromCoordLat: 50.033333,
    fromCoordLong: 8.570556,
    to: 'LUKK',
    toCoordLat: 46.92770004,
    toCoordLong: 28.93099976,
    cat: 'EMJ190',
  },
  {
    id: 159,
    from: 'EDDM',
    fromCoordLat: 48.353802,
    fromCoordLong: 11.7861,
    to: 'EGCC',
    toCoordLat: 53.35369873,
    toCoordLong: -2.274950027,
    cat: 'EMJ190',
  },
  {
    id: 30,
    from: 'EDDF',
    fromCoordLat: 50.033333,
    fromCoordLong: 8.570556,
    to: 'LIEO',
    toCoordLat: 40.898701,
    toCoordLong: 9.51763,
    cat: 'EMJ190',
  },
  {
    id: 10,
    from: 'EDDF',
    fromCoordLat: 50.033333,
    fromCoordLong: 8.570556,
    to: 'UUDD',
    toCoordLat: 55.40879822,
    toCoordLong: 37.90629959,
    cat: 'EMJ190',
  },
];
