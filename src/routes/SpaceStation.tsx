import React from "react";
import PageHeader from "../components/PageHeader";
import { getSpaceStationLocation } from "../queries/spacestation";
import { useQuery } from "react-query";
import InteractableMap from "../components/InteractableMap";

export default function SpaceStation() {
  const { isLoading, isError, data, error } = useQuery(
    "spacestation",
    getSpaceStationLocation
  );

  const longitude = parseFloat(data?.iss_position?.longitude || "");
  const latitude = parseFloat(data?.iss_position?.latitude || "");

  return (
    <>
      <PageHeader
        title={
          <>
            <span className="text-primary">Where is it?</span> ISS Locator
          </>
        }
        description="Stay informed about the International Space Station's present location. Our web page offers insights into where the ISS is positioned above the Earth. Discover the awe-inspiring journey of this space station as it continues to orbit our planet."
      />
      <div className="card bg-neutral mt-4">
        <InteractableMap marker={{ longitude, latitude }} />
      </div>
    </>
  );
}
