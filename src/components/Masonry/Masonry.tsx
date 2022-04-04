import { memo } from "react";
import "./masonry.scss";
import { Picture } from "../../utils/api";
import Image from "../Image/Image";

interface Props {
  picMatrix: Picture[][];
}

function Masonry({ picMatrix }: Props) {
  return (
    <div className="masonry">
      {picMatrix.map((col, colIdx) => (
        <div key={colIdx} data-testid="col" className="col">
          {col.map((cell) => (
            <div className="cell" key={cell._id}>
              <Image src={cell.src} alt={cell.name} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default memo(Masonry);
