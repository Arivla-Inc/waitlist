import { flexRender } from "@tanstack/react-table";

const Table = ({ table }) => {
  return (
    <div className=" bg-white border border-[#E0E7ED] rounded-xl overflow-auto">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-[#FCFCFC] rounded-tr-xl border-b border-[#E0E7ED]"
            >
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`text-left ${index === 0 ? "rounded-tl-xl" : ""} ${
                    index === headerGroup.headers.length - 1
                      ? "rounded-tr-xl"
                      : ""
                  } py-5 px-3 text-[#333333] text-base font-normal`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => {
            const firstEl = i === 0;
            const lastEl = i === table.getRowModel().rows.length - 1;

            return (
              <tr
                key={row.id}
                className={`${lastEl ? "" : "border-b border-[#E0E7ED"}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`py-5 px-3 text-[#828282] text-sm ${
                      firstEl ? "rounded-bl-xl" : ""
                    } ${lastEl ? "rounded-br-xl" : ""} `}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
