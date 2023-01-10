import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function TableOne(props) {
  return (
    <div className="mt-2 mx-4">
      <Table className='bg-gray-100 '>
        <Thead className=' p-4'>
          <Tr>
            <Th>Event</Th>
            <Th>Date</Th>
            <Th>Location</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className='p-4'>
            <Td>Tablescon</Td>
            <Td>9 April 2019</Td>
            <Td>East Annex</Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
            <Td>19 May 2019</Td>
            <Td>205 Gorgas</Td>
          </Tr>
          <Tr>
            <Td>Tuscaloosa D3</Td>
            <Td>29 June 2019</Td>
            <Td>Github</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}
