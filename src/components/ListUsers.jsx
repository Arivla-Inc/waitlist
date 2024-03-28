"use client";
import { useState, useEffect } from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Table from "./Table";
import TableControl from "./TableControl";
import client from "@/lib/prismadb";

// const defaultData = [
//   {
//     id: "1",
//     firstName: "Merchant Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: false,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "2",
//     firstName: "Buyer Test",
//     email: "test@test.com",
//     isMerchant: false,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "3",
//     firstName: "Both Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "4",
//     firstName: "Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "5",
//     firstName: "Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "6",
//     firstName: "Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "7",
//     firstName: "Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "8",
//     firstName: "Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "9",
//     firstName: "Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
//   {
//     id: "10",
//     firstName: "Test",
//     email: "test@test.com",
//     isMerchant: true,
//     isBuyer: true,
//     createdAt: "2024-03-25T17:30:07.483Z",
//     updatedAt: "2024-03-25T17:30:07.483Z",
//   },
// ];






const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
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



const ListUsers = ({data}) => {
  // const [data, setData] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 2,
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
