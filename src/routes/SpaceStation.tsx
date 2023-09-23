import PageHeader from "../components/PageHeader";
import { getSpaceStationLocation } from "../queries/spacestation";
import { useQuery } from "react-query";
import InteractableMap from "../components/InteractableMap";
import ErrorAlert from "../components/ErrorAlert";
import AnimatedContainer from "../components/AnimatedContainer";

export default function SpaceStation() {
  const { isLoading, isError, data, error } = useQuery(
    "spacestation",
    getSpaceStationLocation,
    {
      refetchInterval: 5000,
    }
  );

  console.log(isLoading, isError, data, error);

  const longitude = parseFloat(data?.iss_position?.longitude || "");
  const latitude = parseFloat(data?.iss_position?.latitude || "");

  const updatedTime = data?.timestamp
    ? `Updated as of ${new Date(data?.timestamp * 1000)}`
    : "Unable to retrieve timestamp";

  return (
    <AnimatedContainer>
      <PageHeader
        title={
          <>
            <span className="text-primary">Where is it?</span> ISS Locator
          </>
        }
        description="Stay informed about the International Space Station's present location. Our web page offers insights into where the ISS is positioned above the Earth. Discover the awe-inspiring journey of this space station as it continues to orbit our planet."
      />
      <div className="card bg-neutral mt-4">
        {isError ? (
          <ErrorAlert message="Unable to fetch ISS location" />
        ) : (
          <>
            <h2 className="text-l md:text-xl m-auto py-4 px-4">
              {updatedTime.toLocaleString()}
            </h2>
            <InteractableMap
              loading={isLoading}
              marker={{ longitude, latitude }}
            />
          </>
        )}
      </div>
    </AnimatedContainer>
  );
}
