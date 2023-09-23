export interface IAstronauts {
  name: string;
  craft: string;
}

export interface AstronautsResponse {
  message: string;
  number: number;
  people: IAstronauts[];
}

/**
 * Return list of current astronauts in space
 */
export const getAstronauts = async (): Promise<AstronautsResponse> => {
  const response = await fetch("http://api.open-notify.org/astros.json");
  return response.json();
};
