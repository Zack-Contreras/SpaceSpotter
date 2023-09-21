import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Graticule,
} from "react-simple-maps";
import CustomMarker from "./CustomMarker";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

interface IInteractableMap {
  marker?: {
    latitude: number;
    longitude: number;
  };
}

function InteractableMap({ marker }: IInteractableMap) {
  return (
    <ComposableMap>
      <ZoomableGroup center={[marker?.longitude ?? 0, marker?.latitude ?? 0]}>
        <Graticule stroke="#F53" />
        <Geographies geography={"/features.json"}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                style={{
                  default: { fill: "#3ABFFA" },
                  hover: { fill: "#04D" },
                  pressed: { fill: "#02A" },
                }}
                key={geo.rsmKey}
                geography={geo}
              />
            ))
          }
        </Geographies>
        {marker && (
          <Marker coordinates={[marker.longitude, marker.latitude]}>
            <CustomMarker />
          </Marker>
        )}
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default InteractableMap;
