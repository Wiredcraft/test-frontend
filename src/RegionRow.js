import React, { useState } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import DistrictRow from "./DistrictRow";

const RegionRow = ({ region, query, setQuery }) => {
  const [openDistricts, setOpenDistricts] = useState([]);

  const handleDistrictClick = (index) => {
    if (openDistricts.length > 0) {
      setOpenDistricts([]);
      setQuery(null);
    } else {
      setOpenDistricts([...openDistricts, ...index]);
      setQuery(null);
    }
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{region.name}</TableCell>
        <TableCell>
          <button
            aria-label="expand row"
            onClick={() =>
              handleDistrictClick(region.districts.map((district) => district))
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
      {query === null ||
      query === undefined ||
      query === "" ||
      region.districts
        .map((district) => district.name.toLowerCase().includes(query))
        .every((func) => func === false)
        ? region.districts.map((district) => (
            <DistrictRow
              district={district}
              query={query}
              setQuery={setQuery}
              districtStyle={
                openDistricts[openDistricts.length - 1] === undefined
                  ? { display: "none" }
                  : openDistricts[openDistricts.length - 1] ===
                    region.districts.map((district) => district)[
                      region.districts.map((district) => district).length - 1
                    ]
                  ? { display: "table-row" }
                  : { display: "none" }
              }
            />
          ))
        : region.districts
            .filter((district) => district.name.toLowerCase().includes(query))
            .map((queriedDistrict) => (
              <DistrictRow
                district={queriedDistrict}
                query={query}
                setQuery={setQuery}
                districtStyle={
                  queriedDistrict.name.toLowerCase().includes(query) ||
                  openDistricts[openDistricts.length - 1] ===
                    region.districts.map((district) => district)[
                      region.districts.map((district) => district).length - 1
                    ]
                    ? { display: "table-row" }
                    : openDistricts[openDistricts.length - 1] === undefined &&
                      queriedDistrict.name.toLowerCase().includes(query)
                    ? { display: "table-row" }
                    : { display: "none" }
                }
              />
            ))}
    </React.Fragment>
  );
};

export default RegionRow;
