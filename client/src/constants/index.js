// Routes
export const basename = '';
export const airportAPI = '/api/airport/';
export const autoCompleteAPI = '/api/ac/';

// Colors
export const defaultFlightColors = [
  'rgba(169, 21, 102, 0.85)',
  'rgba(26, 150, 200, 0.85)',
  'rgba(188, 188, 188, 0.85)',
  'rgba(75, 145, 55, 0.85)',
  'rgba(200, 0, 0, 0.85)',
  'rgba(59, 148, 184, 0.85)',
  'rgba(242, 29, 146, 0.85)',
  'rgba(94, 94, 94, 0.85)',
  'rgba(75, 145, 55, 0.85)',
  'rgba(200, 0, 0, 0.85)',
];
export const markerColorLight = '#888888';
export const geoColorLight = '#DEDEDE';
export const geoStrokeColorLight = '#f4f4f4';

export const markerColorDark = '#AAAAAA';
export const geoColorDark = '#121212';
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
export const projRegional = {
  center: [17, 49],
  scale: 550,
};

export const projWorld = {
  center: [0, 30],
  scale: 175,
  rotate: [0.0, -0.1, 0],
};

// Data Editor
export const ESCAPE = 27; // Keycode ESCAPE-key
export const screenMdWidth = 764;
export const screenLgWidth = 992;
export const screenXlWidth = 1200;
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
  pageSize: 10,
  pageSizeOptions: [8],
  draggable: false,
  search: false,
  addRowPosition: 'first',
  headerStyle: {
    backgroundColor: '#f9f9f9',
    fontWeight: 600,
  },
  cellStyle: { borderBottom: '1px solid #f2f2f2' },
  actionsCellStyle: { borderBottom: '1px solid #f2f2f2' },
};

// CSV
export const csvHeader = [
  { id: 'id' },
  { id: 'from' },
  { id: 'fromCoordLat' },
  { id: 'fromCoordLong' },
  { id: 'to' },
  { id: 'toCoordLat' },
  { id: 'toCoordLong' },
  { id: 'cat' },
];

export const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  delimiter: ',',
};

// Sample routes
export const sampleRoutes = [
  {
    from: 'EDDH',
    to: 'LEMG',
    cat: 'Short-haul',
    id: 'd64cab-504-ce71-b41c-8e450c8540df',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '36.67490005',
    toCoordLong: '-4.499110222',
    tableData: { id: 0 },
  },
  {
    from: 'EDDH',
    to: 'UMMS',
    cat: 'Short-haul',
    id: '46733-83d4-c68a-a5a5-710751484cb',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '53.88249969',
    toCoordLong: '28.03070068',
    tableData: { id: 1 },
  },
  {
    from: 'EDDH',
    to: 'LFPG',
    id: '51b320-a72a-d42d-6c3-def8c33e8e2',
    cat: 'Short-haul',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '49.012798',
    toCoordLong: '2.55',
    tableData: { id: 2 },
  },
  {
    from: 'EDDH',
    to: 'EKCH',
    cat: 'Short-haul',
    id: '0be47b1-7c67-c8ae-5f4-ae741fe588f',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '55.61790085',
    toCoordLong: '12.65600014',
    tableData: { id: 3 },
  },
  {
    from: 'EDDH',
    to: 'EGLL',
    cat: 'Short-haul',
    id: '170106-4bd-3b77-ffe2-6501d4b8a434',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '51.4706',
    toCoordLong: '-0.461941',
    tableData: { id: 4 },
  },
  {
    from: 'EDDH',
    to: 'LOWS',
    cat: 'Short-haul',
    id: '6dfad8-2fa3-755-5b76-aeaa037874f',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '47.79330063',
    toCoordLong: '13.00430012',
    tableData: { id: 5 },
  },
  {
    from: 'EDDH',
    to: 'LLBG',
    cat: 'Short-haul',
    id: '236f8a6-8d22-d2ef-5c1c-67c4d56db457',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '32.01139832',
    toCoordLong: '34.88669968',
    tableData: { id: 6 },
  },
  {
    from: 'EDDH',
    to: 'LATI',
    cat: 'Short-haul',
    id: 'e3277c-cf7f-e333-e58-ed2d5ec377a8',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '41.41469955',
    toCoordLong: '19.72060013',
    tableData: { id: 7 },
  },
  {
    from: 'EDDH',
    to: 'LIRF',
    cat: 'Short-haul',
    id: 'd3a6258-5128-6c0-f2c-741dafe510e',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '41.8002778',
    toCoordLong: '12.2388889',
    tableData: { id: 8 },
  },
  {
    from: 'EDDH',
    to: 'LEBB',
    cat: 'Short-haul',
    id: '6467e68-a40d-3a13-a787-5cc8d5c255c3',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '43.30110168',
    toCoordLong: '-2.910609961',
    tableData: { id: 9 },
  },
  {
    from: 'EDDH',
    to: 'LUKK',
    cat: 'Short-haul',
    id: '123408-eca-6d73-5bde-1d22d3ae2c1',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '46.92770004',
    toCoordLong: '28.93099976',
    tableData: { id: 10 },
  },
  {
    from: 'EDDH',
    to: 'LFMN',
    cat: 'Short-haul',
    id: 'bad4d6b-d57f-2d1-1c35-466ba0c42aa3',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '43.65840149',
    toCoordLong: '7.215869904',
    tableData: { id: 11 },
  },
  {
    from: 'EDDH',
    to: 'ULLI',
    cat: 'Short-haul',
    id: 'a25dcc-ff4-c76a-2ca8-27c4fae868dc',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '59.8003006',
    toCoordLong: '30.26250076',
    tableData: { id: 12 },
  },
  {
    to: 'EGPH',
    cat: 'Short-haul',
    from: 'EDDH',
    id: 'e1bb83c-15a-c25b-780c-d1162f80d68',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '55.95000076',
    toCoordLong: '-3.372499943',
    tableData: { id: 13 },
  },
  {
    from: 'EDDH',
    to: 'UKHH',
    cat: 'Short-haul',
    id: 'b756222-48cc-2e21-f7ca-5be0af02ff8d',
    fromCoordLat: '53.63040161',
    fromCoordLong: '9.988229752',
    toCoordLat: '49.92480087',
    toCoordLong: '36.29000092',
    tableData: { id: 14 },
  },
  {
    from: 'EDDF',
    to: 'KLAX',
    cat: 'Long-haul',
    id: '415ae6-284c-22b1-5cd-5eb1feeedb',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '33.94250107',
    toCoordLong: '-118.4079971',
    tableData: { id: 15 },
  },
  {
    from: 'EDDF',
    to: 'KDEN',
    cat: 'Long-haul',
    id: 'd8adb0c-7b42-8aeb-66bc-78b88b271f0b',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '39.86169815',
    toCoordLong: '-104.6729965',
    tableData: { id: 16 },
  },
  {
    from: 'EDDF',
    to: 'MMMX',
    cat: 'Long-haul',
    id: 'd422355-0011-d43a-e61-4f367e3c261f',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '19.4363',
    toCoordLong: '-99.072098',
    tableData: { id: 17 },
  },
  {
    from: 'EDDF',
    to: 'OMDB',
    cat: 'Long-haul',
    id: '388f7db-ff74-f5a4-b555-71e688db40e',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '25.25279999',
    toCoordLong: '55.36439896',
    tableData: { id: 18 },
  },
  {
    to: 'YSSY',
    from: 'OMDB',
    cat: 'Long-haul',
    id: 'c57f0cb-a6cc-088f-6f71-e5017fc07f0c',
    fromCoordLat: '25.25279999',
    fromCoordLong: '55.36439896',
    toCoordLat: '-33.94609833',
    toCoordLong: '151.177002',
    tableData: { id: 19 },
  },
  {
    from: 'EDDF',
    to: 'VTBS',
    cat: 'Long-haul',
    id: 'e1de023-e66c-d08-b71-0ffacdd8b4',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '13.68109989',
    toCoordLong: '100.7470016',
    tableData: { id: 20 },
  },
  {
    from: 'VTBS',
    to: 'VVTS',
    cat: 'Long-haul',
    id: '8a75ff4-38f8-2e4e-2b0-f71b3767ad65',
    fromCoordLat: '13.68109989',
    fromCoordLong: '100.7470016',
    toCoordLat: '10.81879997',
    toCoordLong: '106.6520004',
    tableData: { id: 21 },
  },
  {
    from: 'EDDF',
    to: 'RKSI',
    cat: 'Long-haul',
    id: 'e3bddca-bd-3b0d-667e-65872bfe3e4d',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '37.46910095',
    toCoordLong: '126.4509964',
    tableData: { id: 22 },
  },
  {
    from: 'EDDF',
    to: 'SBGR',
    cat: 'Long-haul',
    id: '57bf628-b8c1-32d1-1c1b-7d68a1e85d30',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '-23.43555641',
    toCoordLong: '-46.47305679',
    tableData: { id: 23 },
  },
  {
    from: 'EDDF',
    to: 'FACT',
    cat: 'Long-haul',
    id: 'b5d8563-b5af-57b-d7d-05227eec',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '-33.96480179',
    toCoordLong: '18.60169983',
    tableData: { id: 24 },
  },
  {
    to: 'FATZ',
    from: 'EDDF',
    cat: 'Long-haul',
    id: '3a817c7-7447-eb23-465f-ce21eb70ba57',
    fromCoordLat: '50.033333',
    fromCoordLong: '8.570556',
    toCoordLat: '-23.82439995',
    toCoordLong: '30.32929993',
    tableData: { id: 25 },
  },
];
