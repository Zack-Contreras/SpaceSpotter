import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Graticule,
} from "react-simple-maps";
import CustomMarker from "./CustomMarker";
import LoadingState from "./LoadingState";

interface IInteractableMap {
  marker?: {
    latitude: number;
    longitude: number;
  };
  loading?: boolean;
}

function InteractableMap({ marker, loading }: IInteractableMap) {
  if (loading) {
    return <LoadingState />;
  }
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
