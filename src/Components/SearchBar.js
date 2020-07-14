import React from "react";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const SearchBar = ({ Regions, setQuery, query, setOpen }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (
      Regions.map((region) =>
        region.name.toLowerCase().includes(query)
      ).includes(true)
    ) {
      setOpen(
        Regions.filter((region) => region.name.toLowerCase().includes(query))
      );
    } else if (
      Regions.map((region) =>
        region.districts.map((district) =>
          district.name.toLowerCase().includes(query)
        )
      )
        .flat()
        .includes(true)
    ) {
      setOpen([
        ...Regions.filter((region) =>
          region.districts
            .map((district) => district)
            .some((district) => district.name.toLowerCase().includes(query))
        ),
        ...Regions.map((region) =>
          region.districts.filter((district) =>
            district.name.toLowerCase().includes(query)
          )
        ).flat(),
      ]);
    } else if (
      Regions.map((region) =>
        region.districts.map((district) =>
          district.townships.map((township) =>
            township.name.toLowerCase().includes(query)
          )
        )
      )
        .flat(2)
        .includes(true)
    ) {
      setOpen([
        ...Regions.filter((region) =>
          region.districts
            .map((district) => district.townships.map((township) => township))
            .flat()
            .some((township) => township.name.toLowerCase().includes(query))
        ),
        ...Regions.map((region) => region.districts.map((district) => district))
          .flat()
          .filter((district) =>
            district.townships
              .map((township) => township)
              .flat(2)
              .some((township) => township.name.toLowerCase().includes(query))
          ),
        ...Regions.map((region) =>
          region.districts.map((district) =>
            district.townships.filter((township) =>
              township.name.toLowerCase().includes(query)
            )
          )
        ).flat(2),
      ]);
    } else {
      return;
    }
  };
  return (
    <TextField
      placeholder="Search"
      style={{ marginRight: ".5rem" }}
      InputLabelProps={{
        shrink: true,
      }}
      variant="standard"
      onChange={handleChange}
      value={query}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
