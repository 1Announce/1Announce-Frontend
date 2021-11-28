import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Data(){
  return(
    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Schedule</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Message</TableCell>
            <TableCell># of Attachements</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
  )
}
export default Data
