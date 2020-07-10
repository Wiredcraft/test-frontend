import React from "react";

import Button from "@material-ui/core/Button";
import AutoRenewIcon from "@material-ui/icons/Autorenew";

const ResetButton = ({
  open,
  setSelectedIndex,
  setOpen,
  setQuery,
  Regions,
}) => {
  const handleResetButton = () => {
    if (!open) {
      return null;
    } else {
      setOpen(Regions.map((region) => region));
      setQuery("");
      setSelectedIndex(0);
    }
  };

  return (
    <Button
      onClick={handleResetButton}
      endIcon={<AutoRenewIcon />}
      style={{ padding: 22, margin: 0, textTransform: "none" }}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
