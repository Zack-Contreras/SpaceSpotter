export interface ISpaceStationCoordinates {
  latitude: string;
  longitude: string;
}

export interface SpaceStationResponse {
  message: string;
  timestamp: number;
  iss_position: ISpaceStationCoordinates;
}

export const getSpaceStationLocation =
  async (): Promise<SpaceStationResponse> => {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    // const json = await response.json();

    return response.json();
  };
