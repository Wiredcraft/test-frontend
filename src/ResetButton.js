import React from "react";

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

  return <button onClick={handleResetButton}>Reset</button>;
};

export default ResetButton;
