import React, { useState } from "react";

import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const Regions = [
  {
    id: 1,
    name: "Shan state",
    districts: [
      {
        id: 10,
        name: "Aunglan",
        townships: [
          {
            id: 100,
            name: "Loilen",
            lastInput: 123456,
            formNumbers: 342456,
            voterNumbers: 123456,
            update: 342456,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Han state",
    districts: [
      {
        id: 20,
        name: "Old Aunglan",
        townships: [
          {
            id: 200,
            name: "Greenwich",
            lastInput: 30865,
            formNumbers: 22012,
            voterNumbers: 30865,
            update: 11002,
          },
        ],
      },
      {
        id: 21,
        name: "New Aunglan",
        townships: [
          {
            id: 210,
            name: "Nolita",
            lastInput: 30865,
            formNumbers: 88131,
            voterNumbers: 30865,
            update: 21392,
          },
        ],
      },
      {
        id: 22,
        name: "West Aunglan",
        townships: [
          {
            id: 220,
            name: "South Bay",
            lastInput: 30865,
            formNumbers: 10231,
            voterNumbers: 30865,
            update: 23001,
          },
        ],
      },
      {
        id: 23,
        name: "East Aunglan",
        townships: [
          {
            id: 230,
            name: "Bridgeport",
            lastInput: 30865,
            formNumbers: 33921,
            voterNumbers: 30865,
            update: 15400,
          },
          {
            id: 231,
            name: "Brockford",
            lastInput: 30865,
            formNumbers: 33921,
            voterNumbers: 30865,
            update: 15400,
          },
        ],
      },
    ],
  },
];

// const regionsArray = Regions.map((region) => region);
// const districtsArray = Regions.map((region) =>
//   region.districts.map((district) => district)
// );
// const townshipsArray = Regions.map((region) =>
//   region.districts.map((district) =>
//     district.townships.map((township) => township)
//   )
// );

export default function TableMain() {
  const [openDistricts, setOpenDistricts] = useState([]);
  const [openTownships, setOpenTownships] = useState(false);
  const classes = useRowStyles();

  const handleDistrictClick = (index) => {
    setOpenDistricts([...openDistricts, ...index]);
  };

  const testArray = openDistricts.slice().reverse();
  console.log(testArray);

  return (
    <TableContainer>
      <Table aria-label="table">
        <TableHead>
          <TableCell />
          <TableCell>Region</TableCell>
          <TableCell>Last Input</TableCell>
          <TableCell>Number of Forms</TableCell>
          <TableCell>Number of Voters</TableCell>
          <TableCell>Update</TableCell>
        </TableHead>
        <TableBody>
          <React.Fragment>
            {Regions.map((region) => (
              <React.Fragment className={classes.root}>
                <TableRow key={region.id}>
                  <TableCell component="th" scope="row">
                    {region.name}
                  </TableCell>
                  <TableCell>
                    <button
                      aria-label="expand row"
                      onClick={() =>
                        handleDistrictClick(
                          region.districts.map((district) => district)
                        )
                      }
                    >
                      Show Districts
                    </button>
                  </TableCell>
                  <TableCell>blank</TableCell>
                  <TableCell>blank</TableCell>
                  <TableCell>blank</TableCell>
                  <TableCell>blank</TableCell>
                </TableRow>
                <Collapse
                  in={
                    openDistricts.slice().reverse() ===
                    region.districts.map((district) => district)
                  }
                >
                  {Regions.map((region) =>
                    region.districts.map((district) => (
                      <React.Fragment>
                        <TableRow key={district.id}>
                          <TableCell component="th" scope="row">
                            {district.name}
                          </TableCell>
                          <TableCell>
                            <button
                              aria-label="expand row"
                              onClick={() => setOpenTownships(!openTownships)}
                            >
                              Show Townships
                            </button>
                          </TableCell>
                          <TableCell>blank</TableCell>
                          <TableCell>blank</TableCell>
                          <TableCell>blank</TableCell>
                          <TableCell>blank</TableCell>
                        </TableRow>
                        <Collapse>
                          {Regions.map((region) =>
                            region.districts.map((district) =>
                              district.townships.map((township) => (
                                <TableRow key={township.id}>
                                  <TableCell component="th" scope="row">
                                    {township.name}
                                  </TableCell>
                                  <TableCell>blank</TableCell>
                                  <TableCell>blank</TableCell>
                                  <TableCell>blank</TableCell>
                                  <TableCell>blank</TableCell>
                                </TableRow>
                              ))
                            )
                          )}
                        </Collapse>
                      </React.Fragment>
                    ))
                  )}
                </Collapse>
              </React.Fragment>
            ))}
          </React.Fragment>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
