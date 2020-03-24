import React from "react";
import { MapViewProvider } from "../context/MapViewState";
import MapView from "./MapView";
import MapControls from "./MapControls";

export default function MapContainer() {
  return (
    <MapViewProvider>
      <MapControls />
      <MapView />
    </MapViewProvider>
  );
}
