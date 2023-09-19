import React from "react";
import { useQuery } from "react-query";
import { IAstronauts, getAstronauts } from "../queries/astronauts";
import Table, { ColumnDefinition } from "../components/Table";
import PageHeader from "../components/PageHeader";

const ASTRONAUT_COLUMN_DEFINITIONS: ColumnDefinition[] = [
  { columnName: "Name" },
  { columnName: "Craft" },
];

export default function Astronauts() {
  const { isLoading, isError, data, error } = useQuery(
    "astronauts",
    getAstronauts
  );

  console.log(data);

  return (
    <>
      <PageHeader
        title="Who's up there?"
        description="See all the people currently in space and what the corresponding space craft they are located on. "
      />
      <div className="astronaut-table bg-neutral shadow-xl rounded-lg mt-4">
        <Table<IAstronauts>
          columnDefinitions={ASTRONAUT_COLUMN_DEFINITIONS}
          tableData={data?.people}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
