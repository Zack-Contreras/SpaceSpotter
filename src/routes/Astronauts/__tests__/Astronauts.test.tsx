import { RenderResult, render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import * as reactQuery from "react-query";
import Astronauts from "../Astronauts";
import { QueryClient, QueryClientProvider } from "react-query";

// Setup mock data and query client used inside of component
const queryClient = new QueryClient();

const r = {
  people: [
    {
      name: "Sergey Prokopyev",
      craft: "ISS",
    },
    {
      name: "Dmitry Petelin",
      craft: "ISS",
    },
    {
      name: "Frank Rubio",
      craft: "ISS",
    },
    {
      name: "Jing Haiping",
      craft: "Tiangong",
    },
    {
      name: "Gui Haichow",
      craft: "Tiangong",
    },
    {
      name: "Zhu Yangzhu",
      craft: "Tiangong",
    },
    {
      name: "Jasmin Moghbeli",
      craft: "ISS",
    },
    {
      name: "Andreas Mogensen",
      craft: "ISS",
    },
    {
      name: "Satoshi Furukawa",
      craft: "ISS",
    },
    {
      name: "Konstantin Borisov",
      craft: "ISS",
    },
    {
      name: "Oleg Kononenko",
      craft: "ISS",
    },
    {
      name: "Nikolai Chub",
      craft: "ISS",
    },
    {
      name: "Loral O'Hara",
      craft: "ISS",
    },
  ],
  number: 13,
  message: "success",
};

describe("Astronauts", () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    (reactQuery.useQuery as Mock) = vi.fn().mockReturnValue({
      data: r,
      isSuccess: true,
    });
    wrapper = render(
      <QueryClientProvider client={queryClient}>
        <Astronauts />
      </QueryClientProvider>
    );
  });

  it("renders page title", async () => {
    expect(await wrapper.findByTestId("page-header")).toHaveTextContent(
      "Who's up there? Astronaut Tracker"
    );
  });

  it("renders table", async () => {
    expect(await wrapper.findByTestId("astro-table")).toBeVisible();
  });

  it("renders error state", async () => {
    // setup error state for by resolving react-query request to error
    (reactQuery.useQuery as Mock) = vi.fn().mockReturnValue({
      data: null,
      isSuccess: false,
      isError: true,
      error: "error",
    });
    wrapper = render(
      <QueryClientProvider client={queryClient}>
        <Astronauts />
      </QueryClientProvider>
    );
    // assert error state in UI
    expect(await wrapper.findByTestId("error-alert")).toBeVisible();
  });
});
