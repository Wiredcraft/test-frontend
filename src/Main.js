import React from 'react'

import TableRow from './TableRow'

const Main = ({ regions }) => {

  return ( <div>
    <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>Last Input</th>
          <th>Number of Forms</th>
          <th>Number of Voters</th>
          <th>Update</th>
        </tr>
      </thead>
      {regions.map(region => {
          return (
            <div>
            <TableRow key={region.id} region={region} />

            </div>

          )
      })}
    </table>
  </div>
  )
}

   

export default Main