export interface ISpaceStationCoordinates {
  latitude: string;
  longitude: string;
}

export interface SpaceStationResponse {
  message: string;
  timestamp: number;
  iss_position: ISpaceStationCoordinates;
}

/**
 * Return coordinates of the ISS space station
 */
export const getSpaceStationLocation =
  async (): Promise<SpaceStationResponse> => {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    return response.json();
  };
