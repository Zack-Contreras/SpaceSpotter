import React from "react";
import { useQuery } from "react-query";
import { IAstronauts, getAstronauts } from "../../queries/astronauts";
import Table, { ColumnDefinition } from "../../components/Table/Table";
import PageHeader from "../../components/PageHeader";
import ErrorAlert from "../../components/ErrorAlert";

const ASTRONAUT_COLUMN_DEFINITIONS: ColumnDefinition[] = [
  { columnName: "Name" },
  { columnName: "Craft" },
];

export default function Astronauts() {
  const { isLoading, isError, data, error } = useQuery(
    "astronauts",
    getAstronauts
  );

  console.log(data, isError, error);

  return (
    <>
      <PageHeader
        title={
          <>
            <span className="text-primary">Who's up there?</span> Astronaut
            Tracker
          </>
        }
        description="Discover the latest information about astronauts currently orbiting our planet. Our table provides up-to-date details about the number of individuals in space, their names, and the spacecraft they're aboard. Stay connected with humanity's ventures beyond Earth and keep track of who is currently among the stars."
      />
      <div className="astronaut-table bg-neutral shadow-xl rounded-lg mt-4">
        {isError ? (
          <ErrorAlert message="Unable to fetch list of astronauts" />
        ) : (
          <Table<IAstronauts>
            columnDefinitions={ASTRONAUT_COLUMN_DEFINITIONS}
            tableData={data?.people}
            isLoading={isLoading}
            keyName="name"
            testId="astro-table"
          />
        )}
      </div>
    </>
  );
}
