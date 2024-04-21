"use client";
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Table from "./Table";
import TableControl from "./TableControl";


const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (props) => props.row.index + 1,
    header: () => <span>Id</span>,
  }),
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor("isMerchant", {
    cell: (props) =>
      props.row.original.isBuyer && props.getValue()
        ? "Both"
        : props.row.original.isBuyer
        ? "Buyer"
        : "Merchant",
    header: () => <span>User Type</span>,
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => new Date(info.getValue()).toDateString(),
    header: () => <span>Date joined</span>,
  }),
];

const ListUsers = ({ data }) => {
  // const [data, setData] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  return (
    <>
      <Table table={table} />
      <TableControl table={table} />
    </>
  );
};

export default ListUsers;
