import React from "react";

const TableControl = ({ table }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-4">
        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
          className="pagination-block"
        >
          {"<<"}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="pagination-block"
        >
          {"<"}
        </button>
        <div>
          {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount().toLocaleString()}
        </div>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="pagination-block"
        >
          {">"}
        </button>
        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
          className="pagination-block"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default TableControl;
