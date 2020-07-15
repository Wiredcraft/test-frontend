import React from "react";

import Specific from "./Specific";

import Grid from "@material-ui/core/Grid";

const SpecificLayout = ({ Regions }) => {
  const townships = Regions.filter((region) => region.id > 3)
    .map((region) =>
      region.districts.map((district) =>
        district.townships.map((township) => township)
      )
    )
    .flat(2);

  console.log(townships.map((township) => township.id));
  return (
    <Grid container spacing={4}>
      {townships.map((township) => (
        <Grid item xs={12} sm={6} md={4}>
          <Specific township={township} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SpecificLayout;
