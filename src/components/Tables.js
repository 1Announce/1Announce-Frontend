import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function BuildTable({data}){

  return(
  <div>
    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Schedule</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((d)=>(
            <TableRow key={d.id}>
              <TableCell>{new Date(d.createTime).toLocaleString()}</TableCell>
              <TableCell>{'Discord'}</TableCell>
              <TableCell>{d.contents[0].text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <script>
      </script>
  </div>
  )
}
export default BuildTable
