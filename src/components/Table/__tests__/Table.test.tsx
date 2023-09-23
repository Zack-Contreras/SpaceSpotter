import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Table, { ColumnDefinition } from "../Table";

const columnDefinitions: ColumnDefinition[] = [
  { columnName: "name" },
  { columnName: "age" },
];

const mockTableData = [
  { name: "han solo", age: 25 },
  { name: "luke skywalker", age: 21 },
  { name: "princess leia", age: 23 },
];

describe("Table", () => {
  it("renders loading state", async () => {
    const wrapper = render(
      <Table
        isLoading={true}
        keyName="name"
        tableData={mockTableData}
        columnDefinitions={columnDefinitions}
      />
    );

    expect(wrapper.getByTestId("loading-state")).toBeVisible();
  });

  it("renders correct headers", async () => {
    const wrapper = render(
      <Table
        isLoading={false}
        keyName="name"
        tableData={mockTableData}
        columnDefinitions={columnDefinitions}
      />
    );

    columnDefinitions.forEach((col) => {
      expect(wrapper.getByTestId(`column-${col.columnName}`)).toBeVisible();
    });
  });

  it("renders correct number of rows", async () => {
    const wrapper = render(
      <Table
        isLoading={false}
        keyName="name"
        tableData={mockTableData}
        columnDefinitions={columnDefinitions}
      />
    );

    const tableRows = await wrapper.findAllByTestId("table-row");
    expect(tableRows.length).toBe(mockTableData.length);
  });
});
