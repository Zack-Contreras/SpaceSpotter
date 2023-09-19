import React from "react";

export interface ColumnDefinition {
  columnName: string;
}

interface ITable<T> {
  columnDefinitions: ColumnDefinition[];
  tableData: object[] | undefined;
  isLoading?: boolean;
}

const TableLoadingState = () => (
  <div className="overflow-x-auto">
    <table className="table">
      <p>fetching data</p>
      <span className="loading loading-ring loading-lg"></span>
    </table>
  </div>
);

export default function Table<T>({
  columnDefinitions,
  tableData,
  isLoading,
}: ITable<T>) {
  if (isLoading) {
    return <TableLoadingState />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {columnDefinitions.map((column) => (
              <th>{column.columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row) => (
            <tr className="hover:bg-neutral-focus">
              {Object.values(row).map((value) => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
