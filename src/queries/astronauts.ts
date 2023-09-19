export interface IAstronauts {
  name: string;
  craft: string;
}

export interface AstronautsResponse {
  message: string;
  number: number;
  people: IAstronauts[];
}

export const getAstronauts = async (): Promise<AstronautsResponse> => {
  const response = await fetch("http://api.open-notify.org/astros.json");
  // const json = await response.json();

  return response.json();
};
