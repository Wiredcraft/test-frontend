import { useLayoutEffect, useState } from "react";

export default function useCancelBg(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      ref.current.style.width = "auto";
      ref.current.style.height = "auto";
    }
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      setWidth(0);
    };
  }, [ref]);
  return width;
}
