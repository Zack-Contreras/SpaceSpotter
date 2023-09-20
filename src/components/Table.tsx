import React from "react";

export interface ColumnDefinition {
  columnName: string;
}

interface ITable<T> {
  columnDefinitions: ColumnDefinition[];
  tableData: object[] | undefined;
  isLoading?: boolean;
  keyName: string;
}

const TableLoadingState = () => (
  <div className="overflow-x-auto text-center p-2">
    <span className="loading loading-ring loading-lg"></span>
  </div>
);

export default function Table<T>({
  columnDefinitions,
  tableData,
  isLoading,
  keyName,
}: ITable<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {columnDefinitions.map((column) => (
              <th key={column.columnName}>{column.columnName}</th>
            ))}
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td colSpan={2}>
                <TableLoadingState />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {tableData?.map((row: Record<string, any>) => (
              <tr key={row?.[keyName]} className="hover:bg-neutral-focus">
                {Object.values(row).map((value) => (
                  <td key={value}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
