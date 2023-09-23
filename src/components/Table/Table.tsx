import LoadingState from "../LoadingState";

/**
 * TODO
 * - empty state
 * - column sorting
 * - error state
 */

export interface ColumnDefinition {
  columnName: string;
}

interface ITable {
  columnDefinitions: ColumnDefinition[];
  tableData: object[] | undefined;
  isLoading?: boolean;
  keyName: string;
  testId?: string;
}

export default function Table({
  columnDefinitions,
  tableData,
  isLoading,
  keyName,
  testId,
}: ITable) {
  return (
    <div className="overflow-x-auto">
      <table data-testid={testId ?? "table-component"} className="table">
        {/* head */}
        <thead>
          <tr>
            {columnDefinitions.map((column) => (
              <th
                data-testid={`column-${column.columnName}`}
                key={column.columnName}
              >
                {column.columnName}
              </th>
            ))}
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td colSpan={2}>
                <LoadingState />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {tableData?.map((row: Record<string, any>) => (
              <tr
                data-testid="table-row"
                key={row?.[keyName]}
                className="hover:bg-neutral-focus"
              >
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
